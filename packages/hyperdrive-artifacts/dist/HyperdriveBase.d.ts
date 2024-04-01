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
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly name: "basePayment";
            readonly type: "uint256";
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
            readonly name: "newFeeCollector";
            readonly type: "address";
        }];
        readonly name: "FeeCollectorUpdated";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Sweep";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSweepCollector";
            readonly type: "address";
        }];
        readonly name: "SweepCollectorUpdated";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"The Hyperdrive base contract that provides a set of helper methods         and defines the functions that must be overridden by implementations.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly name: "basePayment";
                    readonly type: "uint256";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "Sweep";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newSweepCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "SweepCollectorUpdated";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
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
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4";
                readonly urls: readonly ["bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e", "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"];
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
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067";
                readonly urls: readonly ["bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f", "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"];
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
        readonly id: 13996;
        readonly exportedSymbols: {
            readonly AssetId: readonly [18265];
            readonly FixedPointMath: readonly [19065];
            readonly HyperdriveBase: readonly [13995];
            readonly HyperdriveMath: readonly [19813];
            readonly HyperdriveStorage: readonly [17990];
            readonly IERC20: readonly [9980];
            readonly IHyperdrive: readonly [10676];
            readonly IHyperdriveEvents: readonly [11205];
            readonly LPMath: readonly [21757];
            readonly ONE: readonly [18299];
            readonly SafeCast: readonly [21936];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:34588:112";
        readonly nodes: readonly [{
            readonly id: 12821;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:112";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12823;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 9981;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12822;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9980;
                    readonly src: "73:6:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12825;
            readonly nodeType: "ImportDirective";
            readonly src: "115:60:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12824;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "124:11:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12827;
            readonly nodeType: "ImportDirective";
            readonly src: "176:72:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveEvents.sol";
            readonly file: "../interfaces/IHyperdriveEvents.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 11206;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12826;
                    readonly name: "IHyperdriveEvents";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11205;
                    readonly src: "185:17:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12829;
            readonly nodeType: "ImportDirective";
            readonly src: "249:51:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "../libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 18266;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12828;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18265;
                    readonly src: "258:7:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12832;
            readonly nodeType: "ImportDirective";
            readonly src: "301:70:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 19066;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12830;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19065;
                    readonly src: "310:14:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 12831;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18299;
                    readonly src: "326:3:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12834;
            readonly nodeType: "ImportDirective";
            readonly src: "372:65:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 19814;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12833;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19813;
                    readonly src: "381:14:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12836;
            readonly nodeType: "ImportDirective";
            readonly src: "438:49:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "../libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 21758;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12835;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21757;
                    readonly src: "447:6:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12838;
            readonly nodeType: "ImportDirective";
            readonly src: "488:53:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "../libraries/SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 21937;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12837;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21936;
                    readonly src: "497:8:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12840;
            readonly nodeType: "ImportDirective";
            readonly src: "542:60:112";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "./HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13996;
            readonly sourceUnit: 17991;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12839;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17990;
                    readonly src: "551:17:112";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13995;
            readonly nodeType: "ContractDefinition";
            readonly src: "1032:33594:112";
            readonly nodes: readonly [{
                readonly id: 12848;
                readonly nodeType: "UsingForDirective";
                readonly src: "1111:33:112";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 12846;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1117:14:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "1117:14:112";
                };
                readonly typeName: {
                    readonly id: 12847;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1136:7:112";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 12851;
                readonly nodeType: "UsingForDirective";
                readonly src: "1149:32:112";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 12849;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1155:14:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "1155:14:112";
                };
                readonly typeName: {
                    readonly id: 12850;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1174:6:112";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 12854;
                readonly nodeType: "UsingForDirective";
                readonly src: "1186:27:112";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 12852;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1192:8:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21936;
                    readonly src: "1192:8:112";
                };
                readonly typeName: {
                    readonly id: 12853;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1205:7:112";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 12857;
                readonly nodeType: "UsingForDirective";
                readonly src: "1218:26:112";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 12855;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1224:8:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21936;
                    readonly src: "1224:8:112";
                };
                readonly typeName: {
                    readonly id: 12856;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1237:6:112";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 12940;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1926:1509:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 12939;
                    readonly nodeType: "Block";
                    readonly src: "2087:1348:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [12871];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 12871;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2186:6:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 12939;
                            readonly src: "2178:14:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 12870;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2178:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 12872;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2178:14:112";
                    }, {
                        readonly condition: {
                            readonly expression: {
                                readonly id: 12873;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12863;
                                readonly src: "2206:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 12874;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "2215:6:112";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10522;
                            readonly src: "2206:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 12901;
                            readonly nodeType: "Block";
                            readonly src: "2414:600:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 12889;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 12886;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12871;
                                        readonly src: "2544:6:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly id: 12887;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2553:3:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 12888;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2557:5:112";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2553:9:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2544:18:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12890;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2544:18:112";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 12892;
                                        readonly name: "_amount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12860;
                                        readonly src: "2642:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 12893;
                                            readonly name: "_options";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12863;
                                            readonly src: "2651:8:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                readonly typeString: "struct IHyperdrive.Options calldata";
                                            };
                                        };
                                        readonly id: 12894;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2660:9:112";
                                        readonly memberName: "extraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10525;
                                        readonly src: "2651:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                                            readonly typeString: "bytes calldata";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                                            readonly typeString: "bytes calldata";
                                        }];
                                        readonly id: 12891;
                                        readonly name: "_depositWithShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13034;
                                        readonly src: "2623:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_bytes_calldata_ptr_$returns$__$";
                                            readonly typeString: "function (uint256,bytes calldata)";
                                        };
                                    };
                                    readonly id: 12895;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2623:47:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 12896;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2623:47:112";
                            }, {
                                readonly expression: {
                                    readonly id: 12899;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 12897;
                                        readonly name: "sharesMinted";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12866;
                                        readonly src: "2981:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 12898;
                                        readonly name: "_amount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12860;
                                        readonly src: "2996:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2981:22:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12900;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2981:22:112";
                            }];
                        };
                        readonly id: 12902;
                        readonly nodeType: "IfStatement";
                        readonly src: "2202:812:112";
                        readonly trueBody: {
                            readonly id: 12885;
                            readonly nodeType: "Block";
                            readonly src: "2223:185:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 12883;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 12875;
                                            readonly name: "sharesMinted";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12866;
                                            readonly src: "2282:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 12876;
                                            readonly name: "refund";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12871;
                                            readonly src: "2296:6:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly id: 12877;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "2281:22:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "tuple(uint256,uint256)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 12879;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12860;
                                            readonly src: "2340:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 12880;
                                                readonly name: "_options";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 12863;
                                                readonly src: "2365:8:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                                };
                                            };
                                            readonly id: 12881;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2374:9:112";
                                            readonly memberName: "extraData";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10525;
                                            readonly src: "2365:18:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                                readonly typeString: "bytes calldata";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                                readonly typeString: "bytes calldata";
                                            }];
                                            readonly id: 12878;
                                            readonly name: "_depositWithBase";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13026;
                                            readonly src: "2306:16:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_bytes_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                                readonly typeString: "function (uint256,bytes calldata) returns (uint256,uint256)";
                                            };
                                        };
                                        readonly id: 12882;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2306:91:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "tuple(uint256,uint256)";
                                        };
                                    };
                                    readonly src: "2281:116:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 12884;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2281:116:112";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 12906;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 12903;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12868;
                                readonly src: "3068:15:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 12904;
                                    readonly name: "_pricePerVaultShare";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13014;
                                    readonly src: "3086:19:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 12905;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3086:21:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3068:39:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 12907;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3068:39:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 12910;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 12908;
                                readonly name: "refund";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12871;
                                readonly src: "3184:6:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 12909;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3193:1:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3184:10:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 12934;
                        readonly nodeType: "IfStatement";
                        readonly src: "3180:200:112";
                        readonly trueBody: {
                            readonly id: 12933;
                            readonly nodeType: "Block";
                            readonly src: "3196:184:112";
                            readonly statements: readonly [{
                                readonly assignments: readonly [12912, null];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 12912;
                                    readonly mutability: "mutable";
                                    readonly name: "success";
                                    readonly nameLocation: "3216:7:112";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 12933;
                                    readonly src: "3211:12:112";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly typeName: {
                                        readonly id: 12911;
                                        readonly name: "bool";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3211:4:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }, null];
                                readonly id: 12923;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "";
                                        readonly id: 12921;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3271:2:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                            readonly typeString: "literal_string \"\"";
                                        };
                                        readonly value: "";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                            readonly typeString: "literal_string \"\"";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 12915;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "3237:3:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 12916;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "3241:6:112";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "3237:10:112";
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
                                                    readonly id: 12914;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3229:8:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                        readonly typeString: "type(address payable)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 12913;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3229:8:112";
                                                        readonly stateMutability: "payable";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 12917;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3229:19:112";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address_payable";
                                                    readonly typeString: "address payable";
                                                };
                                            };
                                            readonly id: 12918;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3249:4:112";
                                            readonly memberName: "call";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3229:24:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 12920;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly names: readonly ["value"];
                                        readonly nodeType: "FunctionCallOptions";
                                        readonly options: readonly [{
                                            readonly id: 12919;
                                            readonly name: "refund";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12871;
                                            readonly src: "3262:6:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly src: "3229:41:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                            readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                        };
                                    };
                                    readonly id: 12922;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3229:45:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "tuple(bool,bytes memory)";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3210:64:112";
                            }, {
                                readonly condition: {
                                    readonly id: 12925;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "!";
                                    readonly prefix: true;
                                    readonly src: "3292:8:112";
                                    readonly subExpression: {
                                        readonly id: 12924;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12912;
                                        readonly src: "3293:7:112";
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
                                readonly id: 12932;
                                readonly nodeType: "IfStatement";
                                readonly src: "3288:82:112";
                                readonly trueBody: {
                                    readonly id: 12931;
                                    readonly nodeType: "Block";
                                    readonly src: "3302:68:112";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 12926;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10676;
                                                    readonly src: "3327:11:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 12928;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3339:14:112";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10621;
                                                readonly src: "3327:26:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 12929;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3327:28:112";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 12930;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "3320:35:112";
                                    }];
                                };
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 12935;
                                readonly name: "sharesMinted";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12866;
                                readonly src: "3398:12:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 12936;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12868;
                                readonly src: "3412:15:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 12937;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3397:31:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 12869;
                        readonly id: 12938;
                        readonly nodeType: "Return";
                        readonly src: "3390:38:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 12858;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1276:645:112";
                    readonly text: "@dev Process a deposit in either base or vault shares.\n @param _amount The amount of capital to deposit. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the deposit is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return vaultSharePrice The vault share price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_deposit";
                readonly nameLocation: "1935:8:112";
                readonly parameters: {
                    readonly id: 12864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12860;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1961:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12940;
                        readonly src: "1953:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12859;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1953:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12863;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "2007:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12940;
                        readonly src: "1978:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 12862;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 12861;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1978:11:112", "1990:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "1978:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "1978:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1943:78:112";
                };
                readonly returnParameters: {
                    readonly id: 12869;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12866;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "2048:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12940;
                        readonly src: "2040:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12865;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2040:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12868;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "2070:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12940;
                        readonly src: "2062:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12867;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2062:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2039:47:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13003;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4144:1323:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13002;
                    readonly nodeType: "Block";
                    readonly src: "4318:1149:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [12954];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 12954;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "4617:10:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13002;
                            readonly src: "4609:18:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 12953;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4609:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 12959;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 12957;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12945;
                                readonly src: "4646:16:112";
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
                                    readonly id: 12955;
                                    readonly name: "_shares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 12943;
                                    readonly src: "4630:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12956;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4638:7:112";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18345;
                                readonly src: "4630:15:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 12958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4630:33:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4609:54:112";
                    }, {
                        readonly expression: {
                            readonly id: 12964;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 12960;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12943;
                                readonly src: "4673:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 12962;
                                    readonly name: "baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 12954;
                                    readonly src: "4700:10:112";
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
                                    readonly id: 12961;
                                    readonly name: "_convertToShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13098;
                                    readonly src: "4683:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256) view returns (uint256)";
                                    };
                                };
                                readonly id: 12963;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4683:28:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4673:38:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 12965;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4673:38:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 12968;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 12966;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12943;
                                readonly src: "4799:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 12967;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4810:1:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4799:12:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 12972;
                        readonly nodeType: "IfStatement";
                        readonly src: "4795:51:112";
                        readonly trueBody: {
                            readonly id: 12971;
                            readonly nodeType: "Block";
                            readonly src: "4813:33:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly hexValue: "30";
                                    readonly id: 12969;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4834:1:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly functionReturnParameters: 12952;
                                readonly id: 12970;
                                readonly nodeType: "Return";
                                readonly src: "4827:8:112";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly expression: {
                                readonly id: 12973;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12948;
                                readonly src: "4940:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 12974;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "4949:6:112";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10522;
                            readonly src: "4940:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 12998;
                            readonly nodeType: "Block";
                            readonly src: "5183:245:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 12987;
                                        readonly name: "_shares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12943;
                                        readonly src: "5283:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 12988;
                                            readonly name: "_options";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12948;
                                            readonly src: "5308:8:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                readonly typeString: "struct IHyperdrive.Options calldata";
                                            };
                                        };
                                        readonly id: 12989;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5317:11:112";
                                        readonly memberName: "destination";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10519;
                                        readonly src: "5308:20:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 12990;
                                            readonly name: "_options";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12948;
                                            readonly src: "5346:8:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                readonly typeString: "struct IHyperdrive.Options calldata";
                                            };
                                        };
                                        readonly id: 12991;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5355:9:112";
                                        readonly memberName: "extraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10525;
                                        readonly src: "5346:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                                            readonly typeString: "bytes calldata";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                                            readonly typeString: "bytes calldata";
                                        }];
                                        readonly id: 12986;
                                        readonly name: "_withdrawWithShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13056;
                                        readonly src: "5246:19:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_bytes_calldata_ptr_$returns$__$";
                                            readonly typeString: "function (uint256,address,bytes calldata)";
                                        };
                                    };
                                    readonly id: 12992;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5246:132:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 12993;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5246:132:112";
                            }, {
                                readonly expression: {
                                    readonly id: 12996;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 12994;
                                        readonly name: "amountWithdrawn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12951;
                                        readonly src: "5392:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 12995;
                                        readonly name: "_shares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12943;
                                        readonly src: "5410:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5392:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12997;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5392:25:112";
                            }];
                        };
                        readonly id: 12999;
                        readonly nodeType: "IfStatement";
                        readonly src: "4936:492:112";
                        readonly trueBody: {
                            readonly id: 12985;
                            readonly nodeType: "Block";
                            readonly src: "4957:220:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 12983;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 12975;
                                        readonly name: "amountWithdrawn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12951;
                                        readonly src: "5018:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 12977;
                                            readonly name: "_shares";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12943;
                                            readonly src: "5071:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 12978;
                                                readonly name: "_options";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 12948;
                                                readonly src: "5096:8:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                                };
                                            };
                                            readonly id: 12979;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5105:11:112";
                                            readonly memberName: "destination";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10519;
                                            readonly src: "5096:20:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 12980;
                                                readonly name: "_options";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 12948;
                                                readonly src: "5134:8:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                                };
                                            };
                                            readonly id: 12981;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5143:9:112";
                                            readonly memberName: "extraData";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10525;
                                            readonly src: "5134:18:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                                readonly typeString: "bytes calldata";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                                readonly typeString: "bytes calldata";
                                            }];
                                            readonly id: 12976;
                                            readonly name: "_withdrawWithBase";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13046;
                                            readonly src: "5036:17:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_bytes_calldata_ptr_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,address,bytes calldata) returns (uint256)";
                                            };
                                        };
                                        readonly id: 12982;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5036:130:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5018:148:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12984;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5018:148:112";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 13000;
                            readonly name: "amountWithdrawn";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 12951;
                            readonly src: "5445:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 12952;
                        readonly id: 13001;
                        readonly nodeType: "Return";
                        readonly src: "5438:22:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 12941;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3441:698:112";
                    readonly text: "@dev Process a withdrawal and send the proceeds to the destination.\n @param _shares The vault shares to withdraw from the yield source.\n @param _vaultSharePrice The vault share price.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The proceeds of the withdrawal. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdraw";
                readonly nameLocation: "4153:9:112";
                readonly parameters: {
                    readonly id: 12949;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12943;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "4180:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13003;
                        readonly src: "4172:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12942;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4172:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12945;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "4205:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13003;
                        readonly src: "4197:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4197:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12948;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "4260:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13003;
                        readonly src: "4231:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 12947;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 12946;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["4231:11:112", "4243:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "4231:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "4231:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4162:112:112";
                };
                readonly returnParameters: {
                    readonly id: 12952;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12951;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "4301:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13003;
                        readonly src: "4293:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12950;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4293:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4292:25:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13014;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5594:150:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13013;
                    readonly nodeType: "Block";
                    readonly src: "5701:43:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 13010;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18299;
                                readonly src: "5733:3:112";
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
                                readonly id: 13009;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13090;
                                readonly src: "5718:14:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 13011;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5718:19:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 13008;
                        readonly id: 13012;
                        readonly nodeType: "Return";
                        readonly src: "5711:26:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13004;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5473:116:112";
                    readonly text: "@dev Loads the share price from the yield source.\n @return vaultSharePrice The current vault share price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_pricePerVaultShare";
                readonly nameLocation: "5603:19:112";
                readonly parameters: {
                    readonly id: 13005;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5622:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13008;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13007;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "5680:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13014;
                        readonly src: "5672:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13006;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5672:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5671:25:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13026;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6125:160:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13015;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5750:370:112";
                    readonly text: "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @param _extraData The extra data to use in the deposit.\n @return sharesMinted The shares that were minted in the deposit.\n @return refund The amount of ETH to refund. This should be zero for\n         yield sources that don't accept ETH.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "6134:16:112";
                readonly parameters: {
                    readonly id: 13020;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13017;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "6168:11:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13026;
                        readonly src: "6160:19:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13016;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6160:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13019;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "6204:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13026;
                        readonly src: "6189:25:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 13018;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6189:5:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6150:70:112";
                };
                readonly returnParameters: {
                    readonly id: 13025;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13022;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "6255:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13026;
                        readonly src: "6247:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13021;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6247:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13024;
                        readonly mutability: "mutable";
                        readonly name: "refund";
                        readonly nameLocation: "6277:6:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13026;
                        readonly src: "6269:14:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13023;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6269:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6246:38:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13034;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6467:116:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13027;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6291:171:112";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.\n @param _extraData The extra data to use in the deposit.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "6476:18:112";
                readonly parameters: {
                    readonly id: 13032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13029;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6512:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13034;
                        readonly src: "6504:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13028;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6504:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13031;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "6549:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13034;
                        readonly src: "6534:25:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 13030;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6534:5:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6494:71:112";
                };
                readonly returnParameters: {
                    readonly id: 13033;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6582:0:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13046;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6951:179:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13035;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6589:357:112";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @param _extraData The extra data used to settle the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "6960:17:112";
                readonly parameters: {
                    readonly id: 13042;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13037;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6995:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13046;
                        readonly src: "6987:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13036;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6987:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13039;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "7025:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13046;
                        readonly src: "7017:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 13038;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7017:7:112";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13041;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "7062:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13046;
                        readonly src: "7047:25:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 13040;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7047:5:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6977:101:112";
                };
                readonly returnParameters: {
                    readonly id: 13045;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13044;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "7113:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13046;
                        readonly src: "7105:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13043;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7105:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7104:25:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13056;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7444:147:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13047;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7136:303:112";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @param _extraData The extra data used to settle the withdrawal.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "7453:19:112";
                readonly parameters: {
                    readonly id: 13054;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13049;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7490:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13056;
                        readonly src: "7482:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13048;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7482:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13051;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "7520:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13056;
                        readonly src: "7512:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 13050;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7512:7:112";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13053;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "7557:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13056;
                        readonly src: "7542:25:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 13052;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7542:5:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7472:101:112";
                };
                readonly returnParameters: {
                    readonly id: 13055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7590:0:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13060;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7746:52:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13057;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7597:144:112";
                    readonly text: "@dev A yield source dependent check that prevents ether from being\n      transferred to Hyperdrive instances that don't accept ether.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7755:18:112";
                readonly parameters: {
                    readonly id: 13058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7773:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7797:0:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13082;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8216:221:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13081;
                    readonly nodeType: "Block";
                    readonly src: "8314:123:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 13073;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 13067;
                                    readonly name: "_options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13064;
                                    readonly src: "8328:8:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 13068;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8337:11:112";
                                readonly memberName: "destination";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10519;
                                readonly src: "8328:20:112";
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
                                    readonly id: 13071;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8360:1:112";
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
                                    readonly id: 13070;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8352:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 13069;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8352:7:112";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 13072;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8352:10:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8328:34:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13080;
                        readonly nodeType: "IfStatement";
                        readonly src: "8324:107:112";
                        readonly trueBody: {
                            readonly id: 13079;
                            readonly nodeType: "Block";
                            readonly src: "8364:67:112";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 13074;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "8385:11:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 13076;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8397:21:112";
                                        readonly memberName: "RestrictedZeroAddress";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10607;
                                        readonly src: "8385:33:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 13077;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8385:35:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 13078;
                                readonly nodeType: "RevertStatement";
                                readonly src: "8378:42:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13061;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7804:407:112";
                    readonly text: "@dev A yield source dependent check that verifies that the provided\n      options are valid. The default check is that the destination is\n      non-zero to prevent users from accidentally transferring funds\n      to the zero address. Custom integrations can override this to\n      implement additional checks.\n @param _options The provided options for the transaction.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkOptions";
                readonly nameLocation: "8225:13:112";
                readonly parameters: {
                    readonly id: 13065;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13064;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "8277:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13082;
                        readonly src: "8248:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 13063;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13062;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8248:11:112", "8260:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "8248:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "8248:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8238:53:112";
                };
                readonly returnParameters: {
                    readonly id: 13066;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8314:0:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13090;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8609:111:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13083;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8443:161:112";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return baseAmount The base amount.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "8618:14:112";
                readonly parameters: {
                    readonly id: 13086;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13085;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "8650:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13090;
                        readonly src: "8642:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13084;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8642:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8632:36:112";
                };
                readonly returnParameters: {
                    readonly id: 13089;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13088;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "8708:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13090;
                        readonly src: "8700:18:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13087;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8700:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8699:20:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13098;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8892:113:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13091;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8726:161:112";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return shareAmount The vault shares amount.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8901:16:112";
                readonly parameters: {
                    readonly id: 13094;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13093;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8935:11:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13098;
                        readonly src: "8927:19:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13092;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8927:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8917:35:112";
                };
                readonly returnParameters: {
                    readonly id: 13097;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13096;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "8992:11:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13098;
                        readonly src: "8984:19:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13095;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8984:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8983:21:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13104;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9125:73:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13099;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9011:109:112";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "9134:10:112";
                readonly parameters: {
                    readonly id: 13100;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9144:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13103;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13102;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "9186:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13104;
                        readonly src: "9178:18:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13101;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9178:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9177:20:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13110;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9356:76:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13105;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9204:147:112";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9365:12:112";
                readonly parameters: {
                    readonly id: 13106;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9377:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13109;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13108;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9419:11:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13110;
                        readonly src: "9411:19:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13107;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9411:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9410:21:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13124;
                readonly nodeType: "ModifierDefinition";
                readonly src: "9525:135:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13123;
                    readonly nodeType: "Block";
                    readonly src: "9548:112:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 13113;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17826;
                                readonly src: "9562:12:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 13114;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "9575:8:112";
                            readonly memberName: "isPaused";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10350;
                            readonly src: "9562:21:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13121;
                        readonly nodeType: "IfStatement";
                        readonly src: "9558:85:112";
                        readonly trueBody: {
                            readonly id: 13120;
                            readonly nodeType: "Block";
                            readonly src: "9585:58:112";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 13115;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "9606:11:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 13117;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9618:12:112";
                                        readonly memberName: "PoolIsPaused";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10604;
                                        readonly src: "9606:24:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 13118;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9606:26:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 13119;
                                readonly nodeType: "RevertStatement";
                                readonly src: "9599:33:112";
                            }];
                        };
                    }, {
                        readonly id: 13122;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "9652:1:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13111;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9457:63:112";
                    readonly text: "@dev Blocks a function execution if the contract is paused.";
                };
                readonly name: "isNotPaused";
                readonly nameLocation: "9534:11:112";
                readonly parameters: {
                    readonly id: 13112;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9545:2:112";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13134;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9979:154:112";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 13125;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9690:284:112";
                    readonly text: "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _vaultSharePrice The current vault share price.\n @return openVaultSharePrice The open vault share price of the latest\n         checkpoint.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCheckpoint";
                readonly nameLocation: "9988:16:112";
                readonly parameters: {
                    readonly id: 13130;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13127;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "10022:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13134;
                        readonly src: "10014:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13126;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10014:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13129;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "10055:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13134;
                        readonly src: "10047:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13128;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10047:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10004:73:112";
                };
                readonly returnParameters: {
                    readonly id: 13133;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13132;
                        readonly mutability: "mutable";
                        readonly name: "openVaultSharePrice";
                        readonly nameLocation: "10112:19:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13134;
                        readonly src: "10104:27:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13131;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10104:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10103:29:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 13166;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10366:432:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13165;
                    readonly nodeType: "Block";
                    readonly src: "10482:316:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13143];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13143;
                            readonly mutability: "mutable";
                            readonly name: "latestCheckpoint";
                            readonly nameLocation: "10500:16:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13165;
                            readonly src: "10492:24:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13142;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10492:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13146;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 13144;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13220;
                                readonly src: "10519:17:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 13145;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10519:19:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10492:46:112";
                    }, {
                        readonly expression: {
                            readonly id: 13156;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13147;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13140;
                                readonly src: "10548:13:112";
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
                                    readonly id: 13150;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13148;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13137;
                                        readonly src: "10564:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 13149;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13143;
                                        readonly src: "10580:16:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10564:32:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 13154;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10658:1:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly id: 13155;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "10564:95:112";
                                readonly trueExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 13153;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13151;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13137;
                                        readonly src: "10611:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 13152;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13143;
                                        readonly src: "10627:16:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10611:32:112";
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
                            readonly src: "10548:111:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13157;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10548:111:112";
                    }, {
                        readonly expression: {
                            readonly id: 13163;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13158;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13140;
                                readonly src: "10735:13:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13161;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17798;
                                    readonly src: "10773:17:112";
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
                                        readonly id: 13159;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13140;
                                        readonly src: "10751:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10765:7:112";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18363;
                                    readonly src: "10751:21:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13162;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10751:40:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10735:56:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13164;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10735:56:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13135;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10160:201:112";
                    readonly text: "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1]).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateTimeRemaining";
                readonly nameLocation: "10375:23:112";
                readonly parameters: {
                    readonly id: 13138;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13137;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "10416:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13166;
                        readonly src: "10408:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13136;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10408:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10398:37:112";
                };
                readonly returnParameters: {
                    readonly id: 13141;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13140;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "10467:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13166;
                        readonly src: "10459:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13139;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10459:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10458:23:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13202;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10998:450:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13201;
                    readonly nodeType: "Block";
                    readonly src: "11120:328:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13175];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13175;
                            readonly mutability: "mutable";
                            readonly name: "latestCheckpoint";
                            readonly nameLocation: "11138:16:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13201;
                            readonly src: "11130:24:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13174;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "11130:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13180;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13179;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 13176;
                                    readonly name: "_latestCheckpoint";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13220;
                                    readonly src: "11157:17:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 13177;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11157:19:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "*";
                            readonly rightExpression: {
                                readonly id: 13178;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18299;
                                readonly src: "11179:3:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11157:25:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11130:52:112";
                    }, {
                        readonly expression: {
                            readonly id: 13190;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13181;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13172;
                                readonly src: "11192:13:112";
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
                                    readonly id: 13184;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13182;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13169;
                                        readonly src: "11208:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 13183;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13175;
                                        readonly src: "11224:16:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "11208:32:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 13188;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "11302:1:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly id: 13189;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "11208:95:112";
                                readonly trueExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 13187;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13185;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13169;
                                        readonly src: "11255:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 13186;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13175;
                                        readonly src: "11271:16:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "11255:32:112";
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
                            readonly src: "11192:111:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13191;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11192:111:112";
                    }, {
                        readonly expression: {
                            readonly id: 13199;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13192;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13172;
                                readonly src: "11379:13:112";
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
                                    readonly id: 13197;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13195;
                                        readonly name: "_positionDuration";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17798;
                                        readonly src: "11417:17:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "*";
                                    readonly rightExpression: {
                                        readonly id: 13196;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18299;
                                        readonly src: "11437:3:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "11417:23:112";
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
                                        readonly id: 13193;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13172;
                                        readonly src: "11395:13:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13194;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "11409:7:112";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18363;
                                    readonly src: "11395:21:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13198;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11395:46:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11379:62:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13200;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11379:62:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13167;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10804:189:112";
                    readonly text: "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateTimeRemainingScaled";
                readonly nameLocation: "11007:29:112";
                readonly parameters: {
                    readonly id: 13170;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13169;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "11054:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13202;
                        readonly src: "11046:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13168;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11046:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11036:37:112";
                };
                readonly returnParameters: {
                    readonly id: 13173;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13172;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "11105:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13202;
                        readonly src: "11097:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13171;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11097:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11096:23:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13220;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11561:223:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13219;
                    readonly nodeType: "Block";
                    readonly src: "11667:117:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13217;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13208;
                                readonly name: "latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13206;
                                readonly src: "11677:16:112";
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
                                readonly id: 13216;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 13209;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "11708:5:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 13210;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "11714:9:112";
                                    readonly memberName: "timestamp";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "11708:15:112";
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
                                        readonly id: 13214;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 13211;
                                                readonly name: "block";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -4;
                                                readonly src: "11739:5:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_block";
                                                    readonly typeString: "block";
                                                };
                                            };
                                            readonly id: 13212;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11745:9:112";
                                            readonly memberName: "timestamp";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11739:15:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "%";
                                        readonly rightExpression: {
                                            readonly id: 13213;
                                            readonly name: "_checkpointDuration";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17795;
                                            readonly src: "11757:19:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "11739:37:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 13215;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "11738:39:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "11708:69:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11677:100:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13218;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11677:100:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13203;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11454:102:112";
                    readonly text: "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_latestCheckpoint";
                readonly nameLocation: "11570:17:112";
                readonly parameters: {
                    readonly id: 13204;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11587:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13206;
                        readonly mutability: "mutable";
                        readonly name: "latestCheckpoint";
                        readonly nameLocation: "11645:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13220;
                        readonly src: "11637:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13205;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11637:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11636:26:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13235;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11965:253:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13234;
                    readonly nodeType: "Block";
                    readonly src: "12032:186:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 13228;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "12125:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13229;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12138:13:112";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10323;
                                readonly src: "12125:26:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 13230;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "12169:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13231;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12182:15:112";
                                readonly memberName: "shareAdjustment";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10335;
                                readonly src: "12169:28:112";
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
                                    readonly id: 13226;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19813;
                                    readonly src: "12061:14:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19813_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 13227;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12076:31:112";
                                readonly memberName: "calculateEffectiveShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19256;
                                readonly src: "12061:46:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13232;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12061:150:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 13225;
                        readonly id: 13233;
                        readonly nodeType: "Return";
                        readonly src: "12042:169:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13221;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11790:170:112";
                    readonly text: "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_effectiveShareReserves";
                readonly nameLocation: "11974:23:112";
                readonly parameters: {
                    readonly id: 13222;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11997:2:112";
                };
                readonly returnParameters: {
                    readonly id: 13225;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13224;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13235;
                        readonly src: "12023:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13223;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12023:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12022:9:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13268;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12556:675:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13267;
                    readonly nodeType: "Block";
                    readonly src: "12649:582:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 13265;
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
                                            readonly id: 13243;
                                            readonly name: "_totalSupply";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17871;
                                            readonly src: "12912:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                                readonly typeString: "mapping(uint256 => uint256)";
                                            };
                                        };
                                        readonly id: 13251;
                                        readonly indexExpression: {
                                            readonly arguments: readonly [{
                                                readonly expression: {
                                                    readonly expression: {
                                                        readonly id: 13246;
                                                        readonly name: "AssetId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18265;
                                                        readonly src: "12964:7:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                            readonly typeString: "type(library AssetId)";
                                                        };
                                                    };
                                                    readonly id: 13247;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12972:13:112";
                                                    readonly memberName: "AssetIdPrefix";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18012;
                                                    readonly src: "12964:21:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$18012_$";
                                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                    };
                                                };
                                                readonly id: 13248;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12986:4:112";
                                                readonly memberName: "Long";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18009;
                                                readonly src: "12964:26:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18012";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                };
                                            }, {
                                                readonly id: 13249;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13238;
                                                readonly src: "12992:13:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18012";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly expression: {
                                                    readonly id: 13244;
                                                    readonly name: "AssetId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18265;
                                                    readonly src: "12942:7:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                        readonly typeString: "type(library AssetId)";
                                                    };
                                                };
                                                readonly id: 13245;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12950:13:112";
                                                readonly memberName: "encodeAssetId";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18035;
                                                readonly src: "12942:21:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 13250;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12942:64:112";
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
                                        readonly src: "12912:108:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13252;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13021:8:112";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21935;
                                    readonly src: "12912:117:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 13253;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12912:119:112";
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
                                            readonly id: 13254;
                                            readonly name: "_totalSupply";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17871;
                                            readonly src: "13046:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                                readonly typeString: "mapping(uint256 => uint256)";
                                            };
                                        };
                                        readonly id: 13262;
                                        readonly indexExpression: {
                                            readonly arguments: readonly [{
                                                readonly expression: {
                                                    readonly expression: {
                                                        readonly id: 13257;
                                                        readonly name: "AssetId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18265;
                                                        readonly src: "13119:7:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                            readonly typeString: "type(library AssetId)";
                                                        };
                                                    };
                                                    readonly id: 13258;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13127:13:112";
                                                    readonly memberName: "AssetIdPrefix";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18012;
                                                    readonly src: "13119:21:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$18012_$";
                                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                    };
                                                };
                                                readonly id: 13259;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13141:5:112";
                                                readonly memberName: "Short";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18010;
                                                readonly src: "13119:27:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18012";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                };
                                            }, {
                                                readonly id: 13260;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13238;
                                                readonly src: "13168:13:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18012";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly expression: {
                                                    readonly id: 13255;
                                                    readonly name: "AssetId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18265;
                                                    readonly src: "13076:7:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                        readonly typeString: "type(library AssetId)";
                                                    };
                                                };
                                                readonly id: 13256;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13084:13:112";
                                                readonly memberName: "encodeAssetId";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18035;
                                                readonly src: "13076:21:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 13261;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13076:123:112";
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
                                        readonly src: "13046:167:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13263;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13214:8:112";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21935;
                                    readonly src: "13046:176:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 13264;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13046:178:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "12912:312:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 13242;
                        readonly id: 13266;
                        readonly nodeType: "Return";
                        readonly src: "12893:331:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13236;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12224:327:112";
                    readonly text: "@dev Gets the amount of non-netted longs with a given maturity.\n @param _maturityTime The maturity time of the longs.\n @return The amount of non-netted longs. This is a signed value that\n         can be negative. This is convenient for updating the long\n         exposure when closing positions.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonNettedLongs";
                readonly nameLocation: "12565:15:112";
                readonly parameters: {
                    readonly id: 13239;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13238;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12598:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13268;
                        readonly src: "12590:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13237;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12590:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12580:37:112";
                };
                readonly returnParameters: {
                    readonly id: 13242;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13241;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13268;
                        readonly src: "12641:6:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 13240;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12641:6:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12640:8:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13358;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13522:1887:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13357;
                    readonly nodeType: "Block";
                    readonly src: "13789:1620:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13287];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13287;
                            readonly mutability: "mutable";
                            readonly name: "presentValueParams";
                            readonly nameLocation: "13999:18:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13357;
                            readonly src: "13954:63:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                            readonly typeName: {
                                readonly id: 13286;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 13285;
                                    readonly name: "LPMath.PresentValueParams";
                                    readonly nameLocations: readonly ["13954:6:112", "13961:18:112"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 20065;
                                    readonly src: "13954:25:112";
                                };
                                readonly referencedDeclaration: 20065;
                                readonly src: "13954:25:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_storage_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13291;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 13289;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13275;
                                readonly src: "14060:16:112";
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
                                readonly id: 13288;
                                readonly name: "_getPresentValueParams";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13397;
                                readonly src: "14020:22:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$20065_memory_ptr_$";
                                    readonly typeString: "function (uint256) view returns (struct LPMath.PresentValueParams memory)";
                                };
                            };
                            readonly id: 13290;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14020:70:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "13954:136:112";
                    }, {
                        readonly assignments: readonly [13293];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13293;
                            readonly mutability: "mutable";
                            readonly name: "startingPresentValue";
                            readonly nameLocation: "14108:20:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13357;
                            readonly src: "14100:28:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13292;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14100:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13294;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14100:28:112";
                    }, {
                        readonly expression: {
                            readonly id: 13302;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 13295;
                                    readonly name: "startingPresentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13293;
                                    readonly src: "14139:20:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13296;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13281;
                                    readonly src: "14161:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 13297;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "14138:31:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13300;
                                    readonly name: "presentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13287;
                                    readonly src: "14218:18:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 13298;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21757;
                                        readonly src: "14172:6:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21757_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 13299;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14179:25:112";
                                    readonly memberName: "calculatePresentValueSafe";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20160;
                                    readonly src: "14172:32:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20065_memory_ptr_$returns$_t_uint256_$_t_bool_$";
                                        readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)";
                                    };
                                };
                                readonly id: 13301;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14172:74:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly src: "14138:108:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 13303;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14138:108:112";
                    }, {
                        readonly condition: {
                            readonly id: 13305;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "14260:8:112";
                            readonly subExpression: {
                                readonly id: 13304;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13281;
                                readonly src: "14261:7:112";
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
                        readonly id: 13311;
                        readonly nodeType: "IfStatement";
                        readonly src: "14256:61:112";
                        readonly trueBody: {
                            readonly id: 13310;
                            readonly nodeType: "Block";
                            readonly src: "14270:47:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 13306;
                                        readonly name: "params";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13279;
                                        readonly src: "14292:6:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_memory_ptr";
                                            readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                        };
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 13307;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "14300:5:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 13308;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "14291:15:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_struct$_DistributeExcessIdleParams_$20553_memory_ptr_$_t_bool_$";
                                        readonly typeString: "tuple(struct LPMath.DistributeExcessIdleParams memory,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 13282;
                                readonly id: 13309;
                                readonly nodeType: "Return";
                                readonly src: "14284:22:112";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [13313];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13313;
                            readonly mutability: "mutable";
                            readonly name: "netCurveTrade";
                            readonly nameLocation: "14471:13:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13357;
                            readonly src: "14464:20:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 13312;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14464:6:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13331;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 13330;
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
                                                readonly id: 13317;
                                                readonly name: "presentValueParams";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13287;
                                                readonly src: "14555:18:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                                };
                                            };
                                            readonly id: 13318;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "14574:24:112";
                                            readonly memberName: "longAverageTimeRemaining";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 20060;
                                            readonly src: "14555:43:112";
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
                                                    readonly id: 13314;
                                                    readonly name: "presentValueParams";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13287;
                                                    readonly src: "14487:18:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                                    };
                                                };
                                                readonly id: 13315;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "14519:16:112";
                                                readonly memberName: "longsOutstanding";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 20058;
                                                readonly src: "14487:48:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13316;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "14549:5:112";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18395;
                                            readonly src: "14487:67:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 13319;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "14487:112:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13320;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14613:8:112";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21935;
                                    readonly src: "14487:134:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 13321;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14487:136:112";
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
                                                readonly id: 13325;
                                                readonly name: "presentValueParams";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13287;
                                                readonly src: "14717:18:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                                };
                                            };
                                            readonly id: 13326;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "14736:25:112";
                                            readonly memberName: "shortAverageTimeRemaining";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 20064;
                                            readonly src: "14717:44:112";
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
                                                    readonly id: 13322;
                                                    readonly name: "presentValueParams";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13287;
                                                    readonly src: "14638:18:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                                    };
                                                };
                                                readonly id: 13323;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "14674:17:112";
                                                readonly memberName: "shortsOutstanding";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 20062;
                                                readonly src: "14638:53:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13324;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "14709:7:112";
                                            readonly memberName: "mulDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18345;
                                            readonly src: "14638:78:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 13327;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "14638:124:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13328;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14780:8:112";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21935;
                                    readonly src: "14638:150:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 13329;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14638:152:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "14487:303:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14464:326:112";
                    }, {
                        readonly expression: {
                            readonly id: 13351;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13332;
                                readonly name: "params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13279;
                                readonly src: "14800:6:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13335;
                                    readonly name: "presentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13287;
                                    readonly src: "14877:18:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    };
                                }, {
                                    readonly id: 13336;
                                    readonly name: "startingPresentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13293;
                                    readonly src: "14931:20:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly baseExpression: {
                                        readonly id: 13337;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17871;
                                        readonly src: "14986:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 13340;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 13338;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18265;
                                            readonly src: "14999:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 13339;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15007:12:112";
                                        readonly memberName: "_LP_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17998;
                                        readonly src: "14999:20:112";
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
                                    readonly src: "14986:34:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13341;
                                    readonly name: "_withdrawalSharesTotalSupply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13273;
                                    readonly src: "15063:28:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13342;
                                    readonly name: "_idle";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13271;
                                    readonly src: "15111:5:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13343;
                                    readonly name: "netCurveTrade";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13313;
                                    readonly src: "15145:13:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13344;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13287;
                                        readonly src: "15195:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 13345;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15214:13:112";
                                    readonly memberName: "shareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20042;
                                    readonly src: "15195:32:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13346;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13287;
                                        readonly src: "15266:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 13347;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15285:15:112";
                                    readonly memberName: "shareAdjustment";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20044;
                                    readonly src: "15266:34:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13348;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13287;
                                        readonly src: "15336:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 13349;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15355:12:112";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20046;
                                    readonly src: "15336:31:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
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
                                        readonly id: 13333;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21757;
                                        readonly src: "14809:6:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21757_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 13334;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14816:26:112";
                                    readonly memberName: "DistributeExcessIdleParams";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20553;
                                    readonly src: "14809:33:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_DistributeExcessIdleParams_$20553_storage_ptr_$";
                                        readonly typeString: "type(struct LPMath.DistributeExcessIdleParams storage pointer)";
                                    };
                                };
                                readonly id: 13350;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["14857:18:112", "14909:20:112", "14965:19:112", "15034:27:112", "15105:4:112", "15130:13:112", "15172:21:112", "15241:23:112", "15314:20:112"];
                                readonly names: readonly ["presentValueParams", "startingPresentValue", "activeLpTotalSupply", "withdrawalSharesTotalSupply", "idle", "netCurveTrade", "originalShareReserves", "originalShareAdjustment", "originalBondReserves"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14809:569:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            };
                            readonly src: "14800:578:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_memory_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                            };
                        };
                        readonly id: 13352;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14800:578:112";
                    }, {
                        readonly expression: {
                            readonly id: 13355;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13353;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13281;
                                readonly src: "15388:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "74727565";
                                readonly id: 13354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "15398:4:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            };
                            readonly src: "15388:14:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13356;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15388:14:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13269;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13237:280:112";
                    readonly text: "@dev Gets the distribute excess idle parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The distribute excess idle parameters.\n @return success A failure flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getDistributeExcessIdleParamsSafe";
                readonly nameLocation: "13531:34:112";
                readonly parameters: {
                    readonly id: 13276;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13271;
                        readonly mutability: "mutable";
                        readonly name: "_idle";
                        readonly nameLocation: "13583:5:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13358;
                        readonly src: "13575:13:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13270;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13575:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13273;
                        readonly mutability: "mutable";
                        readonly name: "_withdrawalSharesTotalSupply";
                        readonly nameLocation: "13606:28:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13358;
                        readonly src: "13598:36:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13272;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13598:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13275;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13652:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13358;
                        readonly src: "13644:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13274;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13644:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13565:109:112";
                };
                readonly returnParameters: {
                    readonly id: 13282;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13279;
                        readonly mutability: "mutable";
                        readonly name: "params";
                        readonly nameLocation: "13763:6:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13358;
                        readonly src: "13722:47:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 13278;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13277;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["13722:6:112", "13729:26:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20553;
                                readonly src: "13722:33:112";
                            };
                            readonly referencedDeclaration: 20553;
                            readonly src: "13722:33:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20553_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13281;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "13776:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13358;
                        readonly src: "13771:12:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 13280;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13771:4:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13721:63:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13397;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15602:1035:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13396;
                    readonly nodeType: "Block";
                    readonly src: "15738:899:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13394;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13367;
                                readonly name: "params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13365;
                                readonly src: "15748:6:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 13370;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "15812:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13371;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15825:13:112";
                                    readonly memberName: "shareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10323;
                                    readonly src: "15812:26:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13372;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "15869:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13373;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15882:15:112";
                                    readonly memberName: "shareAdjustment";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10335;
                                    readonly src: "15869:28:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13374;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "15925:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13375;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15938:12:112";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10326;
                                    readonly src: "15925:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly id: 13376;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13361;
                                    readonly src: "15981:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13377;
                                    readonly name: "_initialVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17816;
                                    readonly src: "16035:23:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13378;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17819;
                                    readonly src: "16094:21:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13379;
                                    readonly name: "_minimumTransactionAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17822;
                                    readonly src: "16155:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13380;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17801;
                                    readonly src: "16207:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13381;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "16251:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13382;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16264:16:112";
                                    readonly memberName: "longsOutstanding";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10332;
                                    readonly src: "16251:29:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 13384;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "16367:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13385;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "16380:23:112";
                                        readonly memberName: "longAverageMaturityTime";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10341;
                                        readonly src: "16367:36:112";
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
                                        readonly id: 13383;
                                        readonly name: "_calculateTimeRemainingScaled";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13202;
                                        readonly src: "16320:29:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 13386;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "16320:97:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 13387;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "16450:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13388;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16463:17:112";
                                    readonly memberName: "shortsOutstanding";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10338;
                                    readonly src: "16450:30:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 13390;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "16568:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13391;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "16581:24:112";
                                        readonly memberName: "shortAverageMaturityTime";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10344;
                                        readonly src: "16568:37:112";
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
                                        readonly id: 13389;
                                        readonly name: "_calculateTimeRemainingScaled";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13202;
                                        readonly src: "16521:29:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 13392;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "16521:98:112";
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
                                        readonly id: 13368;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21757;
                                        readonly src: "15757:6:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21757_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 13369;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15764:18:112";
                                    readonly memberName: "PresentValueParams";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 20065;
                                    readonly src: "15757:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_PresentValueParams_$20065_storage_ptr_$";
                                        readonly typeString: "type(struct LPMath.PresentValueParams storage pointer)";
                                    };
                                };
                                readonly id: 13393;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["15797:13:112", "15852:15:112", "15911:12:112", "15964:15:112", "16011:22:112", "16072:20:112", "16129:24:112", "16194:11:112", "16233:16:112", "16294:24:112", "16431:17:112", "16494:25:112"];
                                readonly names: readonly ["shareReserves", "shareAdjustment", "bondReserves", "vaultSharePrice", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "timeStretch", "longsOutstanding", "longAverageTimeRemaining", "shortsOutstanding", "shortAverageTimeRemaining"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15757:873:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            };
                            readonly src: "15748:882:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams memory";
                            };
                        };
                        readonly id: 13395;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15748:882:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13359;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15415:182:112";
                    readonly text: "@dev Gets the present value parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The present value parameters.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getPresentValueParams";
                readonly nameLocation: "15611:22:112";
                readonly parameters: {
                    readonly id: 13362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13361;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "15651:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13397;
                        readonly src: "15643:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13360;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15643:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15633:40:112";
                };
                readonly returnParameters: {
                    readonly id: 13366;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13365;
                        readonly mutability: "mutable";
                        readonly name: "params";
                        readonly nameLocation: "15730:6:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13397;
                        readonly src: "15697:39:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 13364;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13363;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["15697:6:112", "15704:18:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20065;
                                readonly src: "15697:25:112";
                            };
                            readonly referencedDeclaration: 20065;
                            readonly src: "15697:25:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15696:41:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13430;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17116:683:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13429;
                    readonly nodeType: "Block";
                    readonly src: "17278:521:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13410];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13410;
                            readonly mutability: "mutable";
                            readonly name: "endingSpotPrice";
                            readonly nameLocation: "17505:15:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13429;
                            readonly src: "17497:23:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13409;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "17497:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13424;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 13416;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 13413;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13235;
                                        readonly src: "17570:23:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 13414;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17570:25:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 13415;
                                    readonly name: "_shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13400;
                                    readonly src: "17598:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "17570:44:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 13420;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 13417;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "17628:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13418;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17641:12:112";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10326;
                                    readonly src: "17628:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 13419;
                                    readonly name: "_bondCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13402;
                                    readonly src: "17656:15:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "17628:43:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 13421;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17816;
                                readonly src: "17685:23:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 13422;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17801;
                                readonly src: "17722:12:112";
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
                                    readonly id: 13411;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19813;
                                    readonly src: "17523:14:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19813_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 13412;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17538:18:112";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19183;
                                readonly src: "17523:33:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13423;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17523:221:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "17497:247:112";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13427;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13425;
                                readonly name: "endingSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13410;
                                readonly src: "17761:15:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 13426;
                                readonly name: "_maxSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13404;
                                readonly src: "17779:13:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "17761:31:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 13408;
                        readonly id: 13428;
                        readonly nodeType: "Return";
                        readonly src: "17754:38:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13398;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16643:468:112";
                    readonly text: "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above the price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_isNegativeInterest";
                readonly nameLocation: "17125:19:112";
                readonly parameters: {
                    readonly id: 13405;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13400;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "17162:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13430;
                        readonly src: "17154:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13399;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17154:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13402;
                        readonly mutability: "mutable";
                        readonly name: "_bondCurveDelta";
                        readonly nameLocation: "17196:15:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13430;
                        readonly src: "17188:23:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13401;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17188:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13404;
                        readonly mutability: "mutable";
                        readonly name: "_maxSpotPrice";
                        readonly nameLocation: "17229:13:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13430;
                        readonly src: "17221:21:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13403;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17221:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17144:104:112";
                };
                readonly returnParameters: {
                    readonly id: 13408;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13407;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13430;
                        readonly src: "17272:4:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 13406;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17272:4:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17271:6:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13456;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18131:376:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13455;
                    readonly nodeType: "Block";
                    readonly src: "18206:301:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13453;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 13444;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13433;
                                    readonly src: "18378:16:112";
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
                                                readonly id: 13440;
                                                readonly name: "_marketState";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17826;
                                                readonly src: "18342:12:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                };
                                            };
                                            readonly id: 13441;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "18355:13:112";
                                            readonly memberName: "shareReserves";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10323;
                                            readonly src: "18342:26:112";
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
                                            readonly id: 13439;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "18334:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 13438;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "18334:7:112";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 13442;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "18334:35:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13443;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18370:7:112";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "18334:43:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13445;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "18334:61:112";
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
                                readonly id: 13452;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 13446;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "18411:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13447;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18424:12:112";
                                    readonly memberName: "longExposure";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10329;
                                    readonly src: "18411:25:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 13450;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13433;
                                        readonly src: "18483:16:112";
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
                                            readonly id: 13448;
                                            readonly name: "_minimumShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17819;
                                            readonly src: "18455:21:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13449;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18477:5:112";
                                        readonly memberName: "mulUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18395;
                                        readonly src: "18455:27:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13451;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18455:45:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "18411:89:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "18334:166:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 13437;
                        readonly id: 13454;
                        readonly nodeType: "Return";
                        readonly src: "18315:185:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13431;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17805:321:112";
                    readonly text: "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _vaultSharePrice The current vault share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_isSolvent";
                readonly nameLocation: "18140:10:112";
                readonly parameters: {
                    readonly id: 13434;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13433;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "18159:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13456;
                        readonly src: "18151:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13432;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18151:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18150:26:112";
                };
                readonly returnParameters: {
                    readonly id: 13437;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13436;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13456;
                        readonly src: "18200:4:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 13435;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18200:4:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18199:6:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13509;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18678:551:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13508;
                    readonly nodeType: "Block";
                    readonly src: "18747:482:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13465];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13465;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "18989:5:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13508;
                            readonly src: "18982:12:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                            readonly typeName: {
                                readonly id: 13464;
                                readonly name: "int128";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "18982:6:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13478;
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
                                        readonly id: 13474;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 13468;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "19009:1:112";
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
                                                    readonly id: 13466;
                                                    readonly name: "_after";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13461;
                                                    readonly src: "18998:6:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly id: 13467;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19005:3:112";
                                                readonly memberName: "max";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 19064;
                                                readonly src: "18998:10:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                    readonly typeString: "function (int256,int256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 13469;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "18998:13:112";
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
                                                readonly id: 13472;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "19026:1:112";
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
                                                    readonly id: 13470;
                                                    readonly name: "_before";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13459;
                                                    readonly src: "19014:7:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly id: 13471;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19022:3:112";
                                                readonly memberName: "max";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 19064;
                                                readonly src: "19014:11:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                    readonly typeString: "function (int256,int256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 13473;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "19014:14:112";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "18998:30:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly id: 13475;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "18997:32:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 13476;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "19030:8:112";
                                readonly memberName: "toInt128";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21900;
                                readonly src: "18997:41:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$";
                                    readonly typeString: "function (int256) pure returns (int128)";
                                };
                            };
                            readonly id: 13477;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "18997:43:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "18982:58:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                            readonly id: 13481;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13479;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13465;
                                readonly src: "19054:5:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 13480;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "19062:1:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "19054:9:112";
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
                                readonly id: 13494;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 13492;
                                    readonly name: "delta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13465;
                                    readonly src: "19143:5:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 13493;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "19151:1:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "19143:9:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 13506;
                            readonly nodeType: "IfStatement";
                            readonly src: "19139:84:112";
                            readonly trueBody: {
                                readonly id: 13505;
                                readonly nodeType: "Block";
                                readonly src: "19154:69:112";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 13503;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly id: 13495;
                                                readonly name: "_marketState";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17826;
                                                readonly src: "19168:12:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                };
                                            };
                                            readonly id: 13497;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "19181:12:112";
                                            readonly memberName: "longExposure";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10329;
                                            readonly src: "19168:25:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 13501;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "19205:6:112";
                                                readonly subExpression: {
                                                    readonly id: 13500;
                                                    readonly name: "delta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13465;
                                                    readonly src: "19206:5:112";
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
                                                readonly id: 13499;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "19197:7:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint128_$";
                                                    readonly typeString: "type(uint128)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 13498;
                                                    readonly name: "uint128";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "19197:7:112";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 13502;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "19197:15:112";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        };
                                        readonly src: "19168:44:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly id: 13504;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "19168:44:112";
                                }];
                            };
                        };
                        readonly id: 13507;
                        readonly nodeType: "IfStatement";
                        readonly src: "19050:173:112";
                        readonly trueBody: {
                            readonly id: 13491;
                            readonly nodeType: "Block";
                            readonly src: "19065:68:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13489;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 13482;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "19079:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13484;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "19092:12:112";
                                        readonly memberName: "longExposure";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10329;
                                        readonly src: "19079:25:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 13487;
                                            readonly name: "delta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13465;
                                            readonly src: "19116:5:112";
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
                                            readonly id: 13486;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "19108:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint128_$";
                                                readonly typeString: "type(uint128)";
                                            };
                                            readonly typeName: {
                                                readonly id: 13485;
                                                readonly name: "uint128";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "19108:7:112";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 13488;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "19108:14:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "19079:43:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 13490;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "19079:43:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13457;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "18513:160:112";
                    readonly text: "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_updateLongExposure";
                readonly nameLocation: "18687:19:112";
                readonly parameters: {
                    readonly id: 13462;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13459;
                        readonly mutability: "mutable";
                        readonly name: "_before";
                        readonly nameLocation: "18714:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13509;
                        readonly src: "18707:14:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 13458;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18707:6:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13461;
                        readonly mutability: "mutable";
                        readonly name: "_after";
                        readonly nameLocation: "18730:6:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13509;
                        readonly src: "18723:13:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 13460;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18723:6:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18706:31:112";
                };
                readonly returnParameters: {
                    readonly id: 13463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "18747:0:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13601;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19651:1652:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13600;
                    readonly nodeType: "Block";
                    readonly src: "19777:1526:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13520, 13522];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13520;
                            readonly mutability: "mutable";
                            readonly name: "zombieBaseProceeds";
                            readonly nameLocation: "19903:18:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13600;
                            readonly src: "19895:26:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13519;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "19895:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 13522;
                            readonly mutability: "mutable";
                            readonly name: "zombieBaseReserves";
                            readonly nameLocation: "19943:18:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13600;
                            readonly src: "19935:26:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13521;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "19935:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13526;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 13524;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13514;
                                readonly src: "19997:16:112";
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
                                readonly id: 13523;
                                readonly name: "_collectZombieInterest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13689;
                                readonly src: "19974:22:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 13525;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19974:40:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "19881:133:112";
                    }, {
                        readonly assignments: readonly [13528];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13528;
                            readonly mutability: "mutable";
                            readonly name: "baseProceeds";
                            readonly nameLocation: "20291:12:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13600;
                            readonly src: "20283:20:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13527;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20283:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13533;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 13531;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13514;
                                readonly src: "20329:16:112";
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
                                    readonly id: 13529;
                                    readonly name: "_shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13512;
                                    readonly src: "20306:14:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13530;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20321:7:112";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18345;
                                readonly src: "20306:22:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13532;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "20306:40:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "20283:63:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13536;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13534;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13520;
                                readonly src: "20360:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 13535;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13522;
                                readonly src: "20381:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20360:39:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13546;
                        readonly nodeType: "IfStatement";
                        readonly src: "20356:198:112";
                        readonly trueBody: {
                            readonly id: 13545;
                            readonly nodeType: "Block";
                            readonly src: "20401:153:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13543;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13537;
                                        readonly name: "_shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13512;
                                        readonly src: "20415:14:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 13540;
                                            readonly name: "zombieBaseReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13522;
                                            readonly src: "20475:18:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 13541;
                                            readonly name: "zombieBaseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13520;
                                            readonly src: "20511:18:112";
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
                                                readonly id: 13538;
                                                readonly name: "_shareProceeds";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13512;
                                                readonly src: "20432:14:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13539;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "20447:10:112";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18327;
                                            readonly src: "20432:25:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 13542;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "20432:111:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "20415:128:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13544;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "20415:128:112";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13549;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13547;
                                readonly name: "baseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13528;
                                readonly src: "20645:12:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 13548;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13520;
                                readonly src: "20660:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20645:33:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 13560;
                            readonly nodeType: "Block";
                            readonly src: "20787:47:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13558;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13556;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13520;
                                        readonly src: "20801:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "30";
                                        readonly id: 13557;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "20822:1:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "20801:22:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13559;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "20801:22:112";
                            }];
                        };
                        readonly id: 13561;
                        readonly nodeType: "IfStatement";
                        readonly src: "20641:193:112";
                        readonly trueBody: {
                            readonly id: 13555;
                            readonly nodeType: "Block";
                            readonly src: "20680:101:112";
                            readonly statements: readonly [{
                                readonly id: 13554;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "20694:77:112";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 13552;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 13550;
                                            readonly name: "zombieBaseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13520;
                                            readonly src: "20722:18:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly id: 13551;
                                            readonly name: "baseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13528;
                                            readonly src: "20744:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "20722:34:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13553;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "20722:34:112";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 13568;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 13562;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "20843:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13564;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20856:18:112";
                                readonly memberName: "zombieBaseProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10353;
                                readonly src: "20843:31:112";
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
                                        readonly id: 13565;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13520;
                                        readonly src: "20877:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13566;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "20896:9:112";
                                    readonly memberName: "toUint112";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21792;
                                    readonly src: "20877:28:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint112)";
                                    };
                                };
                                readonly id: 13567;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "20877:30:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "20843:64:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly id: 13569;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20843:64:112";
                    }, {
                        readonly assignments: readonly [13571];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13571;
                            readonly mutability: "mutable";
                            readonly name: "zombieShareReserves";
                            readonly nameLocation: "20925:19:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13600;
                            readonly src: "20917:27:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13570;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20917:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13574;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 13572;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17826;
                                readonly src: "20947:12:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 13573;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "20960:19:112";
                            readonly memberName: "zombieShareReserves";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10356;
                            readonly src: "20947:32:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "20917:62:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13577;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13575;
                                readonly name: "_shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13512;
                                readonly src: "20993:14:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 13576;
                                readonly name: "zombieShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13571;
                                readonly src: "21010:19:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20993:36:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 13588;
                            readonly nodeType: "Block";
                            readonly src: "21141:48:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13586;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13584;
                                        readonly name: "zombieShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13571;
                                        readonly src: "21155:19:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "30";
                                        readonly id: 13585;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "21177:1:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "21155:23:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13587;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "21155:23:112";
                            }];
                        };
                        readonly id: 13589;
                        readonly nodeType: "IfStatement";
                        readonly src: "20989:200:112";
                        readonly trueBody: {
                            readonly id: 13583;
                            readonly nodeType: "Block";
                            readonly src: "21031:104:112";
                            readonly statements: readonly [{
                                readonly id: 13582;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "21045:80:112";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 13580;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 13578;
                                            readonly name: "zombieShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13571;
                                            readonly src: "21073:19:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly id: 13579;
                                            readonly name: "_shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13512;
                                            readonly src: "21096:14:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "21073:37:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13581;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "21073:37:112";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 13596;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 13590;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "21198:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13592;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "21211:19:112";
                                readonly memberName: "zombieShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10356;
                                readonly src: "21198:32:112";
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
                                        readonly id: 13593;
                                        readonly name: "zombieShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13571;
                                        readonly src: "21233:19:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13594;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "21253:9:112";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21822;
                                    readonly src: "21233:29:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 13595;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "21233:31:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "21198:66:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 13597;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "21198:66:112";
                    }, {
                        readonly expression: {
                            readonly id: 13598;
                            readonly name: "_shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 13512;
                            readonly src: "21282:14:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 13518;
                        readonly id: 13599;
                        readonly nodeType: "Return";
                        readonly src: "21275:21:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13510;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19235:411:112";
                    readonly text: "@dev Apply the updates to the market state as a result of closing a\n      position after maturity. This function also adjusts the proceeds\n      to account for any negative interest that has accrued in the\n      zombie reserves.\n @param _shareProceeds The share proceeds.\n @param _vaultSharePrice The current vault share price.\n @return The adjusted share proceeds.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyZombieClose";
                readonly nameLocation: "19660:17:112";
                readonly parameters: {
                    readonly id: 13515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13512;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "19695:14:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13601;
                        readonly src: "19687:22:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13511;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19687:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13514;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "19727:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13601;
                        readonly src: "19719:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13513;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19719:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19677:72:112";
                };
                readonly returnParameters: {
                    readonly id: 13518;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13517;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13601;
                        readonly src: "19768:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13516;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19768:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19767:9:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "21722:2511:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13688;
                    readonly nodeType: "Block";
                    readonly src: "21888:2345:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13617;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13611;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13609;
                                readonly src: "22022:18:112";
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
                                        readonly id: 13614;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17826;
                                        readonly src: "22081:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 13615;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "22094:19:112";
                                    readonly memberName: "zombieShareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10356;
                                    readonly src: "22081:32:112";
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
                                        readonly id: 13612;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13604;
                                        readonly src: "22043:16:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13613;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "22060:7:112";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "22043:24:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13616;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "22043:80:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "22022:101:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13618;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "22022:101:112";
                    }, {
                        readonly expression: {
                            readonly id: 13622;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13619;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13607;
                                readonly src: "22133:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13620;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "22154:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13621;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "22167:18:112";
                                readonly memberName: "zombieBaseProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10353;
                                readonly src: "22154:31:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "22133:52:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13623;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "22133:52:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13626;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13624;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13609;
                                readonly src: "22328:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 13625;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13607;
                                readonly src: "22349:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "22328:39:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13687;
                        readonly nodeType: "IfStatement";
                        readonly src: "22324:1903:112";
                        readonly trueBody: {
                            readonly id: 13686;
                            readonly nodeType: "Block";
                            readonly src: "22369:1858:112";
                            readonly statements: readonly [{
                                readonly assignments: readonly [13628];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 13628;
                                    readonly mutability: "mutable";
                                    readonly name: "zombieInterest";
                                    readonly nameLocation: "22541:14:112";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 13686;
                                    readonly src: "22533:22:112";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 13627;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "22533:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 13632;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 13631;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 13629;
                                        readonly name: "zombieBaseReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13609;
                                        readonly src: "22558:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 13630;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13607;
                                        readonly src: "22579:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22558:39:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "22533:64:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13642;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 13633;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "22834:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13635;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "22847:19:112";
                                        readonly memberName: "zombieShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10356;
                                        readonly src: "22834:32:112";
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
                                                    readonly id: 13638;
                                                    readonly name: "_vaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13604;
                                                    readonly src: "22908:16:112";
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
                                                        readonly id: 13636;
                                                        readonly name: "zombieInterest";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 13628;
                                                        readonly src: "22870:14:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 13637;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "22902:5:112";
                                                    readonly memberName: "divUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18413;
                                                    readonly src: "22870:37:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 13639;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "22870:55:112";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13640;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "22943:9:112";
                                            readonly memberName: "toUint128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 21822;
                                            readonly src: "22870:82:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (uint128)";
                                            };
                                        };
                                        readonly id: 13641;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "22870:84:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "22834:120:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 13643;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "22834:120:112";
                            }, {
                                readonly assignments: readonly [13645];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 13645;
                                    readonly mutability: "mutable";
                                    readonly name: "zombieInterestShares";
                                    readonly nameLocation: "23261:20:112";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 13686;
                                    readonly src: "23253:28:112";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 13644;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "23253:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 13650;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 13648;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13604;
                                        readonly src: "23324:16:112";
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
                                            readonly id: 13646;
                                            readonly name: "zombieInterest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13628;
                                            readonly src: "23284:14:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13647;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "23299:7:112";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18363;
                                        readonly src: "23284:22:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13649;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "23284:70:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "23253:101:112";
                            }, {
                                readonly assignments: readonly [13652];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 13652;
                                    readonly mutability: "mutable";
                                    readonly name: "governanceZombieFeeCollected";
                                    readonly nameLocation: "23376:28:112";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 13686;
                                    readonly src: "23368:36:112";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 13651;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "23368:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 13657;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 13655;
                                        readonly name: "_governanceZombieFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17813;
                                        readonly src: "23453:20:112";
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
                                            readonly id: 13653;
                                            readonly name: "zombieInterestShares";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13645;
                                            readonly src: "23407:20:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13654;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "23428:7:112";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18345;
                                        readonly src: "23407:28:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13656;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "23407:80:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "23368:119:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13660;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13658;
                                        readonly name: "_governanceFeesAccrued";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17848;
                                        readonly src: "23501:22:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 13659;
                                        readonly name: "governanceZombieFeeCollected";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13652;
                                        readonly src: "23527:28:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "23501:54:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13661;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23501:54:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13664;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13662;
                                        readonly name: "zombieInterestShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13645;
                                        readonly src: "23832:20:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "-=";
                                    readonly rightHandSide: {
                                        readonly id: 13663;
                                        readonly name: "governanceZombieFeeCollected";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13652;
                                        readonly src: "23856:28:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "23832:52:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13665;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23832:52:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13672;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 13666;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "23898:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13668;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "23911:13:112";
                                        readonly memberName: "shareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10323;
                                        readonly src: "23898:26:112";
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
                                                readonly id: 13669;
                                                readonly name: "zombieInterestShares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13645;
                                                readonly src: "23928:20:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13670;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "23949:9:112";
                                            readonly memberName: "toUint128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 21822;
                                            readonly src: "23928:30:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (uint128)";
                                            };
                                        };
                                        readonly id: 13671;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "23928:32:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "23898:62:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 13673;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23898:62:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13680;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 13674;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "23974:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13676;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "23987:15:112";
                                        readonly memberName: "shareAdjustment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10335;
                                        readonly src: "23974:28:112";
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
                                                readonly id: 13677;
                                                readonly name: "zombieInterestShares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13645;
                                                readonly src: "24006:20:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13678;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "24027:8:112";
                                            readonly memberName: "toInt128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 21860;
                                            readonly src: "24006:29:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (int128)";
                                            };
                                        };
                                        readonly id: 13679;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "24006:31:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int128";
                                            readonly typeString: "int128";
                                        };
                                    };
                                    readonly src: "23974:63:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                };
                                readonly id: 13681;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23974:63:112";
                            }, {
                                readonly expression: {
                                    readonly id: 13684;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13682;
                                        readonly name: "zombieBaseReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13609;
                                        readonly src: "24177:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 13683;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13607;
                                        readonly src: "24198:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "24177:39:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13685;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "24177:39:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13602;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "21309:408:112";
                    readonly text: "@dev Collect the interest earned on unredeemed matured positions. This\n      interest is split between the LPs and governance.\n @param _vaultSharePrice The current vault share price.\n @return zombieBaseProceeds The base proceeds reserved for zombie\n         positions.\n @return zombieBaseReserves The updated base reserves reserved for zombie\n         positions.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_collectZombieInterest";
                readonly nameLocation: "21731:22:112";
                readonly parameters: {
                    readonly id: 13605;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13604;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "21771:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13689;
                        readonly src: "21763:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13603;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21763:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21753:40:112";
                };
                readonly returnParameters: {
                    readonly id: 13610;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13607;
                        readonly mutability: "mutable";
                        readonly name: "zombieBaseProceeds";
                        readonly nameLocation: "21836:18:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13689;
                        readonly src: "21828:26:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13606;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21828:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13609;
                        readonly mutability: "mutable";
                        readonly name: "zombieBaseReserves";
                        readonly nameLocation: "21864:18:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13689;
                        readonly src: "21856:26:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13608;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21856:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21827:56:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13728;
                readonly nodeType: "FunctionDefinition";
                readonly src: "24513:558:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13727;
                    readonly nodeType: "Block";
                    readonly src: "24633:438:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13698];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13698;
                            readonly mutability: "mutable";
                            readonly name: "longExposure";
                            readonly nameLocation: "24711:12:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13727;
                            readonly src: "24703:20:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13697;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "24703:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13707;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 13705;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13692;
                                readonly src: "24780:16:112";
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
                                            readonly id: 13701;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17826;
                                            readonly src: "24734:12:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 13702;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "24747:12:112";
                                        readonly memberName: "longExposure";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10329;
                                        readonly src: "24734:25:112";
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
                                        readonly id: 13700;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "24726:7:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 13699;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "24726:7:112";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 13703;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "24726:34:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13704;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "24761:5:112";
                                readonly memberName: "divUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18413;
                                readonly src: "24726:40:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13706;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "24726:80:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "24703:103:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13713;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 13708;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "24820:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 13709;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "24833:13:112";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10323;
                                readonly src: "24820:26:112";
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
                                readonly id: 13712;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 13710;
                                    readonly name: "longExposure";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13698;
                                    readonly src: "24849:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 13711;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17819;
                                    readonly src: "24864:21:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "24849:36:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "24820:65:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13724;
                        readonly nodeType: "IfStatement";
                        readonly src: "24816:222:112";
                        readonly trueBody: {
                            readonly id: 13723;
                            readonly nodeType: "Block";
                            readonly src: "24887:151:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13721;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 13714;
                                        readonly name: "idleShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13695;
                                        readonly src: "24901:10:112";
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
                                        readonly id: 13720;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 13718;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 13715;
                                                    readonly name: "_marketState";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17826;
                                                    readonly src: "24930:12:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                    };
                                                };
                                                readonly id: 13716;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "24943:13:112";
                                                readonly memberName: "shareReserves";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10323;
                                                readonly src: "24930:26:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint128";
                                                    readonly typeString: "uint128";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 13717;
                                                readonly name: "longExposure";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13698;
                                                readonly src: "24975:12:112";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "24930:57:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 13719;
                                            readonly name: "_minimumShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17819;
                                            readonly src: "25006:21:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "24930:97:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "24901:126:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13722;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "24901:126:112";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 13725;
                            readonly name: "idleShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 13695;
                            readonly src: "25054:10:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 13696;
                        readonly id: 13726;
                        readonly nodeType: "Return";
                        readonly src: "25047:17:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13690;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "24239:269:112";
                    readonly text: "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _vaultSharePrice The current vault share price.\n @return idleShares The amount of shares that are available for LPs to\n         withdraw.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateIdleShareReserves";
                readonly nameLocation: "24522:27:112";
                readonly parameters: {
                    readonly id: 13693;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13692;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "24567:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13728;
                        readonly src: "24559:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13691;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24559:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24549:40:112";
                };
                readonly returnParameters: {
                    readonly id: 13696;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13695;
                        readonly mutability: "mutable";
                        readonly name: "idleShares";
                        readonly nameLocation: "24621:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13728;
                        readonly src: "24613:18:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13694;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24613:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24612:20:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13805;
                readonly nodeType: "FunctionDefinition";
                readonly src: "25409:1358:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13804;
                    readonly nodeType: "Block";
                    readonly src: "25523:1244:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [13739, 13741];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13739;
                            readonly mutability: "mutable";
                            readonly name: "presentValueShares";
                            readonly nameLocation: "25668:18:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13804;
                            readonly src: "25660:26:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13738;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "25660:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 13741;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "25693:7:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13804;
                            readonly src: "25688:12:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 13740;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "25688:4:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13748;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 13745;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13731;
                                    readonly src: "25790:16:112";
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
                                    readonly id: 13744;
                                    readonly name: "_getPresentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13397;
                                    readonly src: "25767:22:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$20065_memory_ptr_$";
                                        readonly typeString: "function (uint256) view returns (struct LPMath.PresentValueParams memory)";
                                    };
                                };
                                readonly id: 13746;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "25767:40:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20065_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 13742;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21757;
                                    readonly src: "25704:6:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21757_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 13743;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "25724:25:112";
                                readonly memberName: "calculatePresentValueSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20160;
                                readonly src: "25704:45:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20065_memory_ptr_$returns$_t_uint256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)";
                                };
                            };
                            readonly id: 13747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "25704:117:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "25659:162:112";
                    }, {
                        readonly condition: {
                            readonly id: 13750;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "25835:8:112";
                            readonly subExpression: {
                                readonly id: 13749;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13741;
                                readonly src: "25836:7:112";
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
                        readonly id: 13756;
                        readonly nodeType: "IfStatement";
                        readonly src: "25831:56:112";
                        readonly trueBody: {
                            readonly id: 13755;
                            readonly nodeType: "Block";
                            readonly src: "25845:42:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 13751;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "25867:1:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 13752;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "25870:5:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 13753;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "25866:10:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 13737;
                                readonly id: 13754;
                                readonly nodeType: "Return";
                                readonly src: "25859:17:112";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [13758];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13758;
                            readonly mutability: "mutable";
                            readonly name: "presentValue";
                            readonly nameLocation: "26053:12:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13804;
                            readonly src: "26045:20:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13757;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "26045:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13768;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 13761;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 13759;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13731;
                                    readonly src: "26068:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 13760;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "26087:1:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "26068:20:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 13766;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "26162:1:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 13767;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "26068:95:112";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 13764;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13731;
                                    readonly src: "26130:16:112";
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
                                        readonly id: 13762;
                                        readonly name: "presentValueShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13739;
                                        readonly src: "26103:18:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13763;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26122:7:112";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "26103:26:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13765;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26103:44:112";
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
                        readonly src: "26045:118:112";
                    }, {
                        readonly assignments: readonly [13770];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13770;
                            readonly mutability: "mutable";
                            readonly name: "lpTotalSupply";
                            readonly nameLocation: "26181:13:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13804;
                            readonly src: "26173:21:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13769;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "26173:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13783;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13782;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 13779;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly baseExpression: {
                                        readonly id: 13771;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17871;
                                        readonly src: "26197:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 13774;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 13772;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18265;
                                            readonly src: "26210:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 13773;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "26218:12:112";
                                        readonly memberName: "_LP_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17998;
                                        readonly src: "26210:20:112";
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
                                    readonly src: "26197:34:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly baseExpression: {
                                        readonly id: 13775;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17871;
                                        readonly src: "26246:12:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 13778;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 13776;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18265;
                                            readonly src: "26259:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18265_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 13777;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "26267:26:112";
                                        readonly memberName: "_WITHDRAWAL_SHARE_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18007;
                                        readonly src: "26259:34:112";
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
                                    readonly src: "26246:48:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "26197:97:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 13780;
                                    readonly name: "_withdrawPool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17830;
                                    readonly src: "26309:13:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10368_storage";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                    };
                                };
                                readonly id: 13781;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "26323:15:112";
                                readonly memberName: "readyToWithdraw";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10364;
                                readonly src: "26309:29:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "26197:141:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "26173:165:112";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 13786;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 13784;
                                readonly name: "lpTotalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13770;
                                readonly src: "26475:13:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 13785;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "26492:1:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "26475:18:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 13792;
                        readonly nodeType: "IfStatement";
                        readonly src: "26471:66:112";
                        readonly trueBody: {
                            readonly id: 13791;
                            readonly nodeType: "Block";
                            readonly src: "26495:42:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 13787;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "26517:1:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 13788;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "26520:5:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 13789;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "26516:10:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 13737;
                                readonly id: 13790;
                                readonly nodeType: "Return";
                                readonly src: "26509:17:112";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [13794];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13794;
                            readonly mutability: "mutable";
                            readonly name: "lpSharePrice";
                            readonly nameLocation: "26672:12:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13804;
                            readonly src: "26664:20:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13793;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "26664:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13799;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 13797;
                                readonly name: "lpTotalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13770;
                                readonly src: "26708:13:112";
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
                                    readonly id: 13795;
                                    readonly name: "presentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13758;
                                    readonly src: "26687:12:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13796;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "26700:7:112";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18363;
                                readonly src: "26687:20:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13798;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "26687:35:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "26664:58:112";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 13800;
                                readonly name: "lpSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13794;
                                readonly src: "26741:12:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly hexValue: "74727565";
                                readonly id: 13801;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "26755:4:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            }];
                            readonly id: 13802;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "26740:20:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 13737;
                        readonly id: 13803;
                        readonly nodeType: "Return";
                        readonly src: "26733:27:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13729;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "25077:327:112";
                    readonly text: "@dev Calculates the LP share price. If the LP share price can't be\n      calculated, this function returns a failure flag.\n @param _vaultSharePrice The current vault share price.\n @return The LP share price in units of (base / lp shares).\n @return A flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateLPSharePriceSafe";
                readonly nameLocation: "25418:26:112";
                readonly parameters: {
                    readonly id: 13732;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13731;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "25462:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13805;
                        readonly src: "25454:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13730;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25454:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "25444:40:112";
                };
                readonly returnParameters: {
                    readonly id: 13737;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13734;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13805;
                        readonly src: "25508:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13733;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25508:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13736;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13805;
                        readonly src: "25517:4:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 13735;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25517:4:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "25507:15:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13846;
                readonly nodeType: "FunctionDefinition";
                readonly src: "27287:1651:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13845;
                    readonly nodeType: "Block";
                    readonly src: "27489:1449:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13836;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13819;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13815;
                                readonly src: "28485:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13834;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13808;
                                    readonly src: "28612:12:112";
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
                                            readonly id: 13831;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13812;
                                            readonly src: "28575:16:112";
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
                                                    readonly id: 13828;
                                                    readonly name: "_curveFee";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17804;
                                                    readonly src: "28545:9:112";
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
                                                            readonly id: 13825;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly leftExpression: {
                                                                readonly arguments: readonly [{
                                                                    readonly id: 13822;
                                                                    readonly name: "_spotPrice";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 13810;
                                                                    readonly src: "28507:10:112";
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
                                                                        readonly id: 13820;
                                                                        readonly name: "ONE";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 18299;
                                                                        readonly src: "28497:3:112";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly id: 13821;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly memberLocation: "28501:5:112";
                                                                    readonly memberName: "divUp";
                                                                    readonly nodeType: "MemberAccess";
                                                                    readonly referencedDeclaration: 18413;
                                                                    readonly src: "28497:9:112";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                                    };
                                                                };
                                                                readonly id: 13823;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly kind: "functionCall";
                                                                readonly lValueRequested: false;
                                                                readonly nameLocations: readonly [];
                                                                readonly names: readonly [];
                                                                readonly nodeType: "FunctionCall";
                                                                readonly src: "28497:21:112";
                                                                readonly tryCall: false;
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly nodeType: "BinaryOperation";
                                                            readonly operator: "-";
                                                            readonly rightExpression: {
                                                                readonly id: 13824;
                                                                readonly name: "ONE";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18299;
                                                                readonly src: "28521:3:112";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly src: "28497:27:112";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        }];
                                                        readonly id: 13826;
                                                        readonly isConstant: false;
                                                        readonly isInlineArray: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "TupleExpression";
                                                        readonly src: "28496:29:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 13827;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "28539:5:112";
                                                    readonly memberName: "mulUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18395;
                                                    readonly src: "28496:48:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 13829;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "28496:59:112";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13830;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "28569:5:112";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18395;
                                            readonly src: "28496:78:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 13832;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "28496:96:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13833;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "28606:5:112";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18395;
                                    readonly src: "28496:115:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13835;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "28496:129:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "28485:140:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13837;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "28485:140:112";
                    }, {
                        readonly expression: {
                            readonly id: 13843;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13838;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13817;
                                readonly src: "28876:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13841;
                                    readonly name: "_governanceLPFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17810;
                                    readonly src: "28914:16:112";
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
                                        readonly id: 13839;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13815;
                                        readonly src: "28897:8:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13840;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "28906:7:112";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "28897:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13842;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "28897:34:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "28876:55:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13844;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "28876:55:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13806;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "26773:509:112";
                    readonly text: "@dev Calculates the fees that go to the LPs and governance.\n @param _shareAmount The amount of shares exchanged for bonds.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateFeesGivenShares";
                readonly nameLocation: "27296:25:112";
                readonly parameters: {
                    readonly id: 13813;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13808;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "27339:12:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13846;
                        readonly src: "27331:20:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13807;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27331:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13810;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "27369:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13846;
                        readonly src: "27361:18:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13809;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27361:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13812;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "27397:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13846;
                        readonly src: "27389:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13811;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27389:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "27321:98:112";
                };
                readonly returnParameters: {
                    readonly id: 13818;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13815;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "27451:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13846;
                        readonly src: "27443:16:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13814;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27443:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13817;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "27469:18:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13846;
                        readonly src: "27461:26:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13816;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27461:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "27442:46:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13916;
                readonly nodeType: "FunctionDefinition";
                readonly src: "29755:2727:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13915;
                    readonly nodeType: "Block";
                    readonly src: "30128:2354:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13880;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13866;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13858;
                                readonly src: "30864:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13877;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13851;
                                    readonly src: "30976:24:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 13878;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13855;
                                    readonly src: "31002:16:112";
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
                                            readonly id: 13874;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13849;
                                            readonly src: "30941:11:112";
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
                                                    readonly id: 13871;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 13869;
                                                        readonly name: "ONE";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18299;
                                                        readonly src: "30904:3:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly id: 13870;
                                                        readonly name: "_spotPrice";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 13853;
                                                        readonly src: "30910:10:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "30904:16:112";
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
                                                        readonly id: 13867;
                                                        readonly name: "_curveFee";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17804;
                                                        readonly src: "30875:9:112";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 13868;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "30898:5:112";
                                                    readonly memberName: "mulUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18395;
                                                    readonly src: "30875:28:112";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 13872;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "30875:46:112";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 13873;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "30935:5:112";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18395;
                                            readonly src: "30875:65:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 13875;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "30875:78:112";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13876;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "30967:8:112";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18377;
                                    readonly src: "30875:100:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13879;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "30875:144:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "30864:155:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13881;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "30864:155:112";
                    }, {
                        readonly expression: {
                            readonly id: 13887;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13882;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13862;
                                readonly src: "31286:18:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13885;
                                    readonly name: "_governanceLPFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17810;
                                    readonly src: "31324:16:112";
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
                                        readonly id: 13883;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13858;
                                        readonly src: "31307:8:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13884;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "31316:7:112";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "31307:16:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13886;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "31307:34:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "31286:55:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13888;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "31286:55:112";
                    }, {
                        readonly assignments: readonly [13890];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 13890;
                            readonly mutability: "mutable";
                            readonly name: "flat";
                            readonly nameLocation: "31857:4:112";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 13915;
                            readonly src: "31849:12:112";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 13889;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "31849:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 13898;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 13895;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 13893;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18299;
                                    readonly src: "31898:3:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 13894;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13851;
                                    readonly src: "31904:24:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "31898:30:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 13896;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13855;
                                readonly src: "31942:16:112";
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
                                    readonly id: 13891;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13849;
                                    readonly src: "31864:11:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 13892;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "31876:8:112";
                                readonly memberName: "mulDivUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18377;
                                readonly src: "31864:20:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 13897;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "31864:104:112";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "31849:119:112";
                    }, {
                        readonly expression: {
                            readonly id: 13904;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13899;
                                readonly name: "flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13860;
                                readonly src: "31978:7:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 13902;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17807;
                                    readonly src: "31999:8:112";
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
                                        readonly id: 13900;
                                        readonly name: "flat";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13890;
                                        readonly src: "31988:4:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 13901;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "31993:5:112";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18395;
                                    readonly src: "31988:10:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 13903;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "31988:20:112";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "31978:30:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13905;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "31978:30:112";
                    }, {
                        readonly expression: {
                            readonly id: 13913;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13906;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13864;
                                readonly src: "32376:18:112";
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
                                readonly id: 13912;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 13907;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13862;
                                    readonly src: "32409:18:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 13910;
                                        readonly name: "_governanceLPFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17810;
                                        readonly src: "32458:16:112";
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
                                            readonly id: 13908;
                                            readonly name: "flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13860;
                                            readonly src: "32442:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13909;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "32450:7:112";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18345;
                                        readonly src: "32442:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13911;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "32442:33:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "32409:66:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "32376:99:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13914;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "32376:99:112";
                    }];
                };
                readonly documentation: {
                    readonly id: 13847;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "28944:806:112";
                    readonly text: "@dev Calculates the fees that go to the LPs and governance.\n @param _bondAmount The amount of bonds being exchanged for shares.\n @param _normalizedTimeRemaining The normalized amount of time until\n        maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of shares.\n @return flatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares.\n @return totalGovernanceFee The total fee that goes to governance. The\n         fee is in terms of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateFeesGivenBonds";
                readonly nameLocation: "29764:24:112";
                readonly parameters: {
                    readonly id: 13856;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13849;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "29806:11:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "29798:19:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13848;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29798:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13851;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "29835:24:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "29827:32:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13850;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29827:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13853;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "29877:10:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "29869:18:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13852;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29869:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13855;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "29905:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "29897:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13854;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29897:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "29788:139:112";
                };
                readonly returnParameters: {
                    readonly id: 13865;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13858;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "29996:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "29988:16:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13857;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29988:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13860;
                        readonly mutability: "mutable";
                        readonly name: "flatFee";
                        readonly nameLocation: "30026:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "30018:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13859;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30018:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13862;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "30055:18:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "30047:26:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13861;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30047:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13864;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "30095:18:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13916;
                        readonly src: "30087:26:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13863;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30087:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "29974:149:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13942;
                readonly nodeType: "FunctionDefinition";
                readonly src: "32807:391:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13941;
                    readonly nodeType: "Block";
                    readonly src: "32985:213:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 13929;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13924;
                                readonly src: "32999:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 13930;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "33008:6:112";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10522;
                            readonly src: "32999:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 13939;
                            readonly nodeType: "Block";
                            readonly src: "33061:131:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 13936;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13921;
                                        readonly src: "33164:16:112";
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
                                            readonly id: 13934;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13919;
                                            readonly src: "33148:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13935;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "33156:7:112";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18345;
                                        readonly src: "33148:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13937;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "33148:33:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13928;
                                readonly id: 13938;
                                readonly nodeType: "Return";
                                readonly src: "33141:40:112";
                            }];
                        };
                        readonly id: 13940;
                        readonly nodeType: "IfStatement";
                        readonly src: "32995:197:112";
                        readonly trueBody: {
                            readonly id: 13933;
                            readonly nodeType: "Block";
                            readonly src: "33016:39:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13931;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13919;
                                    readonly src: "33037:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13928;
                                readonly id: 13932;
                                readonly nodeType: "Return";
                                readonly src: "33030:14:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13917;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "32488:314:112";
                    readonly text: "@dev Converts input to base if necessary according to what is specified\n      in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBaseFromOption";
                readonly nameLocation: "32816:24:112";
                readonly parameters: {
                    readonly id: 13925;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13919;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "32858:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13942;
                        readonly src: "32850:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13918;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "32850:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13921;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "32883:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13942;
                        readonly src: "32875:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13920;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "32875:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13924;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "32938:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13942;
                        readonly src: "32909:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 13923;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13922;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["32909:11:112", "32921:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "32909:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "32909:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "32840:112:112";
                };
                readonly returnParameters: {
                    readonly id: 13928;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13927;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13942;
                        readonly src: "32976:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13926;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "32976:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "32975:9:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13968;
                readonly nodeType: "FunctionDefinition";
                readonly src: "33531:405:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13967;
                    readonly nodeType: "Block";
                    readonly src: "33716:220:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 13955;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13950;
                                readonly src: "33730:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 13956;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "33739:6:112";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10522;
                            readonly src: "33730:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 13965;
                            readonly nodeType: "Block";
                            readonly src: "33891:39:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13963;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13945;
                                    readonly src: "33912:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13954;
                                readonly id: 13964;
                                readonly nodeType: "Return";
                                readonly src: "33905:14:112";
                            }];
                        };
                        readonly id: 13966;
                        readonly nodeType: "IfStatement";
                        readonly src: "33726:204:112";
                        readonly trueBody: {
                            readonly id: 13962;
                            readonly nodeType: "Block";
                            readonly src: "33747:138:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 13959;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13947;
                                        readonly src: "33857:16:112";
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
                                            readonly id: 13957;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13945;
                                            readonly src: "33841:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13958;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "33849:7:112";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18363;
                                        readonly src: "33841:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13960;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "33841:33:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13954;
                                readonly id: 13961;
                                readonly nodeType: "Return";
                                readonly src: "33834:40:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13943;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "33204:322:112";
                    readonly text: "@dev Converts input to vault shares if necessary according to what is\n      specified in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToVaultSharesFromOption";
                readonly nameLocation: "33540:31:112";
                readonly parameters: {
                    readonly id: 13951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13945;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "33589:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13968;
                        readonly src: "33581:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "33581:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13947;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "33614:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13968;
                        readonly src: "33606:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "33606:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13950;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "33669:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13968;
                        readonly src: "33640:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 13949;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13948;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["33640:11:112", "33652:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "33640:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "33640:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "33571:112:112";
                };
                readonly returnParameters: {
                    readonly id: 13954;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13953;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13968;
                        readonly src: "33707:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13952;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "33707:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "33706:9:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 13994;
                readonly nodeType: "FunctionDefinition";
                readonly src: "34231:393:112";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13993;
                    readonly nodeType: "Block";
                    readonly src: "34409:215:112";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 13981;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13976;
                                readonly src: "34423:8:112";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 13982;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "34432:6:112";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10522;
                            readonly src: "34423:15:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 13991;
                            readonly nodeType: "Block";
                            readonly src: "34485:133:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 13988;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13973;
                                        readonly src: "34590:16:112";
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
                                            readonly id: 13986;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13971;
                                            readonly src: "34574:7:112";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 13987;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "34582:7:112";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18363;
                                        readonly src: "34574:15:112";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 13989;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "34574:33:112";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13980;
                                readonly id: 13990;
                                readonly nodeType: "Return";
                                readonly src: "34567:40:112";
                            }];
                        };
                        readonly id: 13992;
                        readonly nodeType: "IfStatement";
                        readonly src: "34419:199:112";
                        readonly trueBody: {
                            readonly id: 13985;
                            readonly nodeType: "Block";
                            readonly src: "34440:39:112";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 13983;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13971;
                                    readonly src: "34461:7:112";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 13980;
                                readonly id: 13984;
                                readonly nodeType: "Return";
                                readonly src: "34454:14:112";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 13969;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "33942:284:112";
                    readonly text: "@dev Converts input to what is specified in the options from base.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToOptionFromBase";
                readonly nameLocation: "34240:24:112";
                readonly parameters: {
                    readonly id: 13977;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13971;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "34282:7:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13994;
                        readonly src: "34274:15:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13970;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "34274:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13973;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "34307:16:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13994;
                        readonly src: "34299:24:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13972;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "34299:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13976;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "34362:8:112";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13994;
                        readonly src: "34333:37:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 13975;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13974;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["34333:11:112", "34345:7:112"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "34333:19:112";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "34333:19:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "34264:112:112";
                };
                readonly returnParameters: {
                    readonly id: 13980;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13979;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13994;
                        readonly src: "34400:7:112";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13978;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "34400:7:112";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "34399:9:112";
                };
                readonly scope: 13995;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 12842;
                    readonly name: "IHyperdriveEvents";
                    readonly nameLocations: readonly ["1068:17:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11205;
                    readonly src: "1068:17:112";
                };
                readonly id: 12843;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1068:17:112";
            }, {
                readonly baseName: {
                    readonly id: 12844;
                    readonly name: "HyperdriveStorage";
                    readonly nameLocations: readonly ["1087:17:112"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 17990;
                    readonly src: "1087:17:112";
                };
                readonly id: 12845;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1087:17:112";
            }];
            readonly canonicalName: "HyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 12841;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "604:428:112";
                readonly text: "@author DELV\n @title HyperdriveBase\n @notice The Hyperdrive base contract that provides a set of helper methods\n         and defines the functions that must be overridden by implementations.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [13995, 17990, 71674, 11205, 11777];
            readonly name: "HyperdriveBase";
            readonly nameLocation: "1050:14:112";
            readonly scope: 13996;
            readonly usedErrors: readonly [71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 112;
};
//# sourceMappingURL=HyperdriveBase.d.ts.map