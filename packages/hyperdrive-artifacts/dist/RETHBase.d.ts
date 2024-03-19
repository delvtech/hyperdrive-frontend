export declare const RETHBase: {
    readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AddLiquidity";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CloseLong";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "destination";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CloseShort";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "destination";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "basePayment";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CollectGovernanceFee";
        readonly inputs: readonly [{
            readonly name: "collector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "fees";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CreateCheckpoint";
        readonly inputs: readonly [{
            readonly name: "checkpointTime";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturedShorts";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturedLongs";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
            readonly name: "newGovernance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Initialize";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "apr";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OpenLong";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OpenShort";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "baseProceeds";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PauseStatusUpdated";
        readonly inputs: readonly [{
            readonly name: "isPaused";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PauserUpdated";
        readonly inputs: readonly [{
            readonly name: "newPauser";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "status";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RedeemWithdrawalShares";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "destination";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RemoveLiquidity";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "destination";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Sweep";
        readonly inputs: readonly [{
            readonly name: "collector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SweepCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newSweepCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TransferSingle";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"Rocket Pool has it's own notion of shares to account for the accrual of      interest on the ether pooled in the Rocket Pool protocol. Instead of      maintaining a balance of shares, this integration can simply use Rocket Pool      shares directly.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__rocketStorage\":\"The Rocket Pool storage contract.\"}}},\"stateVariables\":{\"_rocketStorage\":{\"details\":\"The Rocket Pool storage contract.\"},\"_rocketTokenReth\":{\"details\":\"The Rocket Token rETH contract.\"}},\"title\":\"RETHHyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the rETH Hyperdrive base contract.\"}},\"notice\":\"The base contract for the rETH Hyperdrive implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/reth/RETHBase.sol\":\"RETHBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/instances/reth/RETHBase.sol\":{\"keccak256\":\"0xb9a185b232403370cf27d8c59974092ed94a83a6aadffb51943cba99b3cbe02e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0c758c8aca3eb5cf53558644f95d8e58ac2780f2fbd656ca9cb723bebd3c91b\",\"dweb:/ipfs/QmYQB1U9smh6YxzHCFgcqrmfDeKj21CCocDZVoVp4P82Gr\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/interfaces/IRocketDepositPool.sol\":{\"keccak256\":\"0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff\",\"dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz\"]},\"contracts/src/interfaces/IRocketStorage.sol\":{\"keccak256\":\"0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308\",\"dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM\"]},\"contracts/src/interfaces/IRocketTokenRETH.sol\":{\"keccak256\":\"0x5796efb852a2ddbd07325f14230c90bf86b9229be421d0dda7e73748a786b7a9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3cc5ed3f01c7a6ece0bea2a85c1d4bd75e1b1e58caed8f02688e7df94f12e79f\",\"dweb:/ipfs/QmPpEbox2jwfjZScm3TGywPgi6UWHzproRGZmbCYBg2jy5\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
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
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "receive";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly constructor: {
                        readonly params: {
                            readonly __rocketStorage: "The Rocket Pool storage contract.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly constructor: {
                        readonly notice: "Instantiates the rETH Hyperdrive base contract.";
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
                readonly "contracts/src/instances/reth/RETHBase.sol": "RETHBase";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/instances/reth/RETHBase.sol": {
                readonly keccak256: "0xb9a185b232403370cf27d8c59974092ed94a83a6aadffb51943cba99b3cbe02e";
                readonly urls: readonly ["bzz-raw://e0c758c8aca3eb5cf53558644f95d8e58ac2780f2fbd656ca9cb723bebd3c91b", "dweb:/ipfs/QmYQB1U9smh6YxzHCFgcqrmfDeKj21CCocDZVoVp4P82Gr"];
                readonly license: "Apache-2.0";
            };
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
            readonly "contracts/src/interfaces/IRocketDepositPool.sol": {
                readonly keccak256: "0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a";
                readonly urls: readonly ["bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff", "dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IRocketStorage.sol": {
                readonly keccak256: "0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944";
                readonly urls: readonly ["bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308", "dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IRocketTokenRETH.sol": {
                readonly keccak256: "0x5796efb852a2ddbd07325f14230c90bf86b9229be421d0dda7e73748a786b7a9";
                readonly urls: readonly ["bzz-raw://3cc5ed3f01c7a6ece0bea2a85c1d4bd75e1b1e58caed8f02688e7df94f12e79f", "dweb:/ipfs/QmPpEbox2jwfjZScm3TGywPgi6UWHzproRGZmbCYBg2jy5"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a";
                readonly urls: readonly ["bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195", "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"];
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
        readonly absolutePath: "contracts/src/instances/reth/RETHBase.sol";
        readonly id: 9527;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [19442];
            readonly HyperdriveBase: readonly [14381];
            readonly IHyperdrive: readonly [11076];
            readonly IRocketDepositPool: readonly [12416];
            readonly IRocketStorage: readonly [12705];
            readonly IRocketTokenRETH: readonly [12759];
            readonly ONE: readonly [18676];
            readonly RETHBase: readonly [9526];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:6051:65";
        readonly nodes: readonly [{
            readonly id: 9266;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:65";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 9269;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 19443;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9267;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19442;
                    readonly src: "73:14:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 9268;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18676;
                    readonly src: "89:3:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9271;
            readonly nodeType: "ImportDirective";
            readonly src: "138:67:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "../../internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 14382;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9270;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14381;
                    readonly src: "147:14:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9273;
            readonly nodeType: "ImportDirective";
            readonly src: "206:63:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9272;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "215:11:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9275;
            readonly nodeType: "ImportDirective";
            readonly src: "270:77:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IRocketDepositPool.sol";
            readonly file: "../../interfaces/IRocketDepositPool.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 12417;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9274;
                    readonly name: "IRocketDepositPool";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12416;
                    readonly src: "279:18:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9277;
            readonly nodeType: "ImportDirective";
            readonly src: "348:69:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IRocketStorage.sol";
            readonly file: "../../interfaces/IRocketStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 12706;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9276;
                    readonly name: "IRocketStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12705;
                    readonly src: "357:14:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9279;
            readonly nodeType: "ImportDirective";
            readonly src: "418:73:65";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IRocketTokenRETH.sol";
            readonly file: "../../interfaces/IRocketTokenRETH.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9527;
            readonly sourceUnit: 12760;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9278;
                    readonly name: "IRocketTokenRETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12759;
                    readonly src: "427:16:65";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9526;
            readonly nodeType: "ContractDefinition";
            readonly src: "1101:4988:65";
            readonly nodes: readonly [{
                readonly id: 9285;
                readonly nodeType: "UsingForDirective";
                readonly src: "1152:33:65";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 9283;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1158:14:65"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19442;
                    readonly src: "1158:14:65";
                };
                readonly typeName: {
                    readonly id: 9284;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1177:7:65";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 9289;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1238:48:65";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 9286;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1191:42:65";
                    readonly text: "@dev The Rocket Pool storage contract.";
                };
                readonly mutability: "immutable";
                readonly name: "_rocketStorage";
                readonly nameLocation: "1272:14:65";
                readonly scope: 9526;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                    readonly typeString: "contract IRocketStorage";
                };
                readonly typeName: {
                    readonly id: 9288;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 9287;
                        readonly name: "IRocketStorage";
                        readonly nameLocations: readonly ["1238:14:65"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 12705;
                        readonly src: "1238:14:65";
                    };
                    readonly referencedDeclaration: 12705;
                    readonly src: "1238:14:65";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                        readonly typeString: "contract IRocketStorage";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 9293;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1338:52:65";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 9290;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1293:40:65";
                    readonly text: "@dev The Rocket Token rETH contract.";
                };
                readonly mutability: "immutable";
                readonly name: "_rocketTokenReth";
                readonly nameLocation: "1374:16:65";
                readonly scope: 9526;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                    readonly typeString: "contract IRocketTokenRETH";
                };
                readonly typeName: {
                    readonly id: 9292;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 9291;
                        readonly name: "IRocketTokenRETH";
                        readonly nameLocations: readonly ["1338:16:65"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 12759;
                        readonly src: "1338:16:65";
                    };
                    readonly referencedDeclaration: 12759;
                    readonly src: "1338:16:65";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                        readonly typeString: "contract IRocketTokenRETH";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 9324;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1526:391:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9323;
                    readonly nodeType: "Block";
                    readonly src: "1570:347:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9302;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9300;
                                readonly name: "_rocketStorage";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9289;
                                readonly src: "1580:14:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                                    readonly typeString: "contract IRocketStorage";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 9301;
                                readonly name: "__rocketStorage";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9297;
                                readonly src: "1597:15:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                                    readonly typeString: "contract IRocketStorage";
                                };
                            };
                            readonly src: "1580:32:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                                readonly typeString: "contract IRocketStorage";
                            };
                        };
                        readonly id: 9303;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1580:32:65";
                    }, {
                        readonly assignments: readonly [9305];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9305;
                            readonly mutability: "mutable";
                            readonly name: "rocketTokenRethAddress";
                            readonly nameLocation: "1701:22:65";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9323;
                            readonly src: "1693:30:65";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly typeName: {
                                readonly id: 9304;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1693:7:65";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9316;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "636f6e74726163742e61646472657373";
                                        readonly id: 9311;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1792:18:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_b86ec11852586a041fafc4775b679e5f136167d6f6d0dec7dace53c72fdac064";
                                            readonly typeString: "literal_string \"contract.address\"";
                                        };
                                        readonly value: "contract.address";
                                    }, {
                                        readonly hexValue: "726f636b6574546f6b656e52455448";
                                        readonly id: 9312;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1812:17:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_534c1e9422d98074ec1a8ae55484e36d8bcc96dc848661f3ebd3103d04d269a5";
                                            readonly typeString: "literal_string \"rocketTokenRETH\"";
                                        };
                                        readonly value: "rocketTokenRETH";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_b86ec11852586a041fafc4775b679e5f136167d6f6d0dec7dace53c72fdac064";
                                            readonly typeString: "literal_string \"contract.address\"";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_534c1e9422d98074ec1a8ae55484e36d8bcc96dc848661f3ebd3103d04d269a5";
                                            readonly typeString: "literal_string \"rocketTokenRETH\"";
                                        }];
                                        readonly expression: {
                                            readonly id: 9309;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "1775:3:65";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 9310;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1779:12:65";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1775:16:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 9313;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1775:55:65";
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
                                    readonly id: 9308;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "1765:9:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 9314;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1765:66:65";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }];
                                readonly expression: {
                                    readonly id: 9306;
                                    readonly name: "_rocketStorage";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9289;
                                    readonly src: "1726:14:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                                        readonly typeString: "contract IRocketStorage";
                                    };
                                };
                                readonly id: 9307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1741:10:65";
                                readonly memberName: "getAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 12536;
                                readonly src: "1726:25:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32) view external returns (address)";
                                };
                            };
                            readonly id: 9315;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1726:115:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1693:148:65";
                    }, {
                        readonly expression: {
                            readonly id: 9321;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9317;
                                readonly name: "_rocketTokenReth";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9293;
                                readonly src: "1851:16:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                    readonly typeString: "contract IRocketTokenRETH";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9319;
                                    readonly name: "rocketTokenRethAddress";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9305;
                                    readonly src: "1887:22:65";
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
                                    readonly id: 9318;
                                    readonly name: "IRocketTokenRETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 12759;
                                    readonly src: "1870:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IRocketTokenRETH_$12759_$";
                                        readonly typeString: "type(contract IRocketTokenRETH)";
                                    };
                                };
                                readonly id: 9320;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1870:40:65";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                    readonly typeString: "contract IRocketTokenRETH";
                                };
                            };
                            readonly src: "1851:59:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                readonly typeString: "contract IRocketTokenRETH";
                            };
                        };
                        readonly id: 9322;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1851:59:65";
                    }];
                };
                readonly documentation: {
                    readonly id: 9294;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1397:124:65";
                    readonly text: "@notice Instantiates the rETH Hyperdrive base contract.\n @param __rocketStorage The Rocket Pool storage contract.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 9298;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9297;
                        readonly mutability: "mutable";
                        readonly name: "__rocketStorage";
                        readonly nameLocation: "1553:15:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9324;
                        readonly src: "1538:30:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                            readonly typeString: "contract IRocketStorage";
                        };
                        readonly typeName: {
                            readonly id: 9296;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9295;
                                readonly name: "IRocketStorage";
                                readonly nameLocations: readonly ["1538:14:65"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 12705;
                                readonly src: "1538:14:65";
                            };
                            readonly referencedDeclaration: 12705;
                            readonly src: "1538:14:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IRocketStorage_$12705";
                                readonly typeString: "contract IRocketStorage";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1537:32:65";
                };
                readonly returnParameters: {
                    readonly id: 9299;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1570:0:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9343;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1949:319:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9342;
                    readonly nodeType: "Block";
                    readonly src: "2092:176:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly errorCall: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly expression: {
                                    readonly id: 9337;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 11076;
                                    readonly src: "2231:11:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 9339;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2243:16:65";
                                readonly memberName: "UnsupportedToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 11042;
                                readonly src: "2231:28:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                    readonly typeString: "function () pure";
                                };
                            };
                            readonly id: 9340;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2231:30:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 9341;
                        readonly nodeType: "RevertStatement";
                        readonly src: "2224:37:65";
                    }];
                };
                readonly baseFunctions: readonly [13412];
                readonly documentation: {
                    readonly id: 9325;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1923:21:65";
                    readonly text: "Yield Source ///";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "1958:16:65";
                readonly overrides: {
                    readonly id: 9331;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2056:8:65";
                };
                readonly parameters: {
                    readonly id: 9330;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9327;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9343;
                        readonly src: "1984:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9326;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1984:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9329;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9343;
                        readonly src: "2011:14:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 9328;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2011:5:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1974:67:65";
                };
                readonly returnParameters: {
                    readonly id: 9336;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9333;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9343;
                        readonly src: "2074:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9332;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2074:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9335;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9343;
                        readonly src: "2083:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9334;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2083:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2073:18:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9365;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2386:254:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9364;
                    readonly nodeType: "Block";
                    readonly src: "2502:138:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 9355;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2593:3:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 9356;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2597:6:65";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2593:10:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 9359;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2613:4:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                        readonly typeString: "contract RETHBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                        readonly typeString: "contract RETHBase";
                                    }];
                                    readonly id: 9358;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2605:7:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 9357;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2605:7:65";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 9360;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2605:13:65";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 9361;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9346;
                                readonly src: "2620:12:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9352;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "2563:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2580:12:65";
                                readonly memberName: "transferFrom";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10315;
                                readonly src: "2563:29:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,address,uint256) external returns (bool)";
                                };
                            };
                            readonly id: 9362;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2563:70:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9363;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2563:70:65";
                    }];
                };
                readonly baseFunctions: readonly [13420];
                readonly documentation: {
                    readonly id: 9344;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2274:107:65";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "2395:18:65";
                readonly overrides: {
                    readonly id: 9350;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2493:8:65";
                };
                readonly parameters: {
                    readonly id: 9349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9346;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "2431:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9365;
                        readonly src: "2423:20:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9345;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2423:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9348;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9365;
                        readonly src: "2453:14:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 9347;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2453:5:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2413:70:65";
                };
                readonly returnParameters: {
                    readonly id: 9351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2502:0:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9414;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2936:759:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9413;
                    readonly nodeType: "Block";
                    readonly src: "3115:580:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 9381;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9368;
                                readonly src: "3258:12:65";
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
                                    readonly id: 9378;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "3236:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9380;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3253:4:65";
                                readonly memberName: "burn";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 12758;
                                readonly src: "3236:21:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256) external";
                                };
                            };
                            readonly id: 9382;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3236:35:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 9383;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3236:35:65";
                    }, {
                        readonly expression: {
                            readonly id: 9390;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9384;
                                readonly name: "amountWithdrawn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9376;
                                readonly src: "3404:15:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9387;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "3430:4:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                            readonly typeString: "contract RETHBase";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                            readonly typeString: "contract RETHBase";
                                        }];
                                        readonly id: 9386;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "3422:7:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 9385;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "3422:7:65";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 9388;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3422:13:65";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 9389;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3436:7:65";
                                readonly memberName: "balance";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3422:21:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3404:39:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9391;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3404:39:65";
                    }, {
                        readonly assignments: readonly [9393, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9393;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3514:7:65";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9413;
                            readonly src: "3509:12:65";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 9392;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3509:4:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 9403;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "";
                                readonly id: 9401;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3593:2:65";
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
                                            readonly id: 9396;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9370;
                                            readonly src: "3535:12:65";
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
                                            readonly id: 9395;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3527:8:65";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                readonly typeString: "type(address payable)";
                                            };
                                            readonly typeName: {
                                                readonly id: 9394;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3527:8:65";
                                                readonly stateMutability: "payable";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 9397;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3527:21:65";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address_payable";
                                            readonly typeString: "address payable";
                                        };
                                    };
                                    readonly id: 9398;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3549:4:65";
                                    readonly memberName: "call";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3527:26:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                    };
                                };
                                readonly id: 9400;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly names: readonly ["value"];
                                readonly nodeType: "FunctionCallOptions";
                                readonly options: readonly [{
                                    readonly id: 9399;
                                    readonly name: "amountWithdrawn";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9376;
                                    readonly src: "3562:15:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly src: "3527:52:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 9402;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3527:78:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3508:97:65";
                    }, {
                        readonly condition: {
                            readonly id: 9405;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3619:8:65";
                            readonly subExpression: {
                                readonly id: 9404;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9393;
                                readonly src: "3620:7:65";
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
                        readonly id: 9412;
                        readonly nodeType: "IfStatement";
                        readonly src: "3615:74:65";
                        readonly trueBody: {
                            readonly id: 9411;
                            readonly nodeType: "Block";
                            readonly src: "3629:60:65";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 9406;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "3650:11:65";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 9408;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3662:14:65";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11021;
                                        readonly src: "3650:26:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 9409;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3650:28:65";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 9410;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3643:35:65";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13432];
                readonly documentation: {
                    readonly id: 9366;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2646:285:65";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "2945:17:65";
                readonly overrides: {
                    readonly id: 9374;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3072:8:65";
                };
                readonly parameters: {
                    readonly id: 9373;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9368;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "2980:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9414;
                        readonly src: "2972:20:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9367;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2972:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9370;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "3010:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9414;
                        readonly src: "3002:20:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9369;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3002:7:65";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9372;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9414;
                        readonly src: "3032:14:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 9371;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3032:5:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2962:100:65";
                };
                readonly returnParameters: {
                    readonly id: 9377;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9376;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "3098:15:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9414;
                        readonly src: "3090:23:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9375;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3090:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3089:25:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9433;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3937:273:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9432;
                    readonly nodeType: "Block";
                    readonly src: "4084:126:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 9428;
                                readonly name: "_destination";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9419;
                                readonly src: "4176:12:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 9429;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9417;
                                readonly src: "4190:12:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9425;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "4150:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9427;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4167:8:65";
                                readonly memberName: "transfer";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10303;
                                readonly src: "4150:25:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            };
                            readonly id: 9430;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4150:53:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9431;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4150:53:65";
                    }];
                };
                readonly baseFunctions: readonly [13442];
                readonly documentation: {
                    readonly id: 9415;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3701:231:65";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "3946:19:65";
                readonly overrides: {
                    readonly id: 9423;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "4075:8:65";
                };
                readonly parameters: {
                    readonly id: 9422;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9417;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3983:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9433;
                        readonly src: "3975:20:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9416;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3975:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9419;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "4013:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9433;
                        readonly src: "4005:20:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9418;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4005:7:65";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9421;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9433;
                        readonly src: "4035:14:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 9420;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4035:5:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3965:100:65";
                };
                readonly returnParameters: {
                    readonly id: 9424;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4084:0:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9448;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4382:167:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9447;
                    readonly nodeType: "Block";
                    readonly src: "4483:66:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 9444;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9436;
                                readonly src: "4529:12:65";
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
                                    readonly id: 9442;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "4500:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9443;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4517:11:65";
                                readonly memberName: "getEthValue";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 12718;
                                readonly src: "4500:28:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view external returns (uint256)";
                                };
                            };
                            readonly id: 9445;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4500:42:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9441;
                        readonly id: 9446;
                        readonly nodeType: "Return";
                        readonly src: "4493:49:65";
                    }];
                };
                readonly baseFunctions: readonly [13476];
                readonly documentation: {
                    readonly id: 9434;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4216:161:65";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return baseAmount The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "4391:14:65";
                readonly overrides: {
                    readonly id: 9438;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "4456:8:65";
                };
                readonly parameters: {
                    readonly id: 9437;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9436;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "4423:12:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9448;
                        readonly src: "4415:20:65";
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
                            readonly src: "4415:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4405:36:65";
                };
                readonly returnParameters: {
                    readonly id: 9441;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9440;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9448;
                        readonly src: "4474:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9439;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4474:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4473:9:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9463;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4721:168:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9462;
                    readonly nodeType: "Block";
                    readonly src: "4823:66:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 9459;
                                readonly name: "_baseAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9451;
                                readonly src: "4870:11:65";
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
                                    readonly id: 9457;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "4840:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9458;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4857:12:65";
                                readonly memberName: "getRethValue";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 12725;
                                readonly src: "4840:29:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view external returns (uint256)";
                                };
                            };
                            readonly id: 9460;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4840:42:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9456;
                        readonly id: 9461;
                        readonly nodeType: "Return";
                        readonly src: "4833:49:65";
                    }];
                };
                readonly baseFunctions: readonly [13484];
                readonly documentation: {
                    readonly id: 9449;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4555:161:65";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return shareAmount The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "4730:16:65";
                readonly overrides: {
                    readonly id: 9453;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "4796:8:65";
                };
                readonly parameters: {
                    readonly id: 9452;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9451;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "4764:11:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9463;
                        readonly src: "4756:19:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9450;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4756:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4746:35:65";
                };
                readonly returnParameters: {
                    readonly id: 9456;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9455;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9463;
                        readonly src: "4814:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9454;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4814:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4813:9:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9473;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5009:191:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9472;
                    readonly nodeType: "Block";
                    readonly src: "5072:128:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 9470;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "5192:1:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 9469;
                        readonly id: 9471;
                        readonly nodeType: "Return";
                        readonly src: "5185:8:65";
                    }];
                };
                readonly baseFunctions: readonly [13490];
                readonly documentation: {
                    readonly id: 9464;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4895:109:65";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "5018:10:65";
                readonly overrides: {
                    readonly id: 9466;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5045:8:65";
                };
                readonly parameters: {
                    readonly id: 9465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5028:2:65";
                };
                readonly returnParameters: {
                    readonly id: 9469;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9468;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9473;
                        readonly src: "5063:7:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9467;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5063:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5062:9:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9489;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5358:178:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9488;
                    readonly nodeType: "Block";
                    readonly src: "5471:65:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 9484;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "5523:4:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                        readonly typeString: "contract RETHBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_RETHBase_$9526";
                                        readonly typeString: "contract RETHBase";
                                    }];
                                    readonly id: 9483;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5515:7:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 9482;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5515:7:65";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 9485;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5515:13:65";
                                readonly tryCall: false;
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
                                readonly expression: {
                                    readonly id: 9480;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "5488:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                };
                                readonly id: 9481;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5505:9:65";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10357;
                                readonly src: "5488:26:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 9486;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5488:41:65";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9479;
                        readonly id: 9487;
                        readonly nodeType: "Return";
                        readonly src: "5481:48:65";
                    }];
                };
                readonly baseFunctions: readonly [13496];
                readonly documentation: {
                    readonly id: 9474;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5206:147:65";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "5367:12:65";
                readonly overrides: {
                    readonly id: 9476;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5420:8:65";
                };
                readonly parameters: {
                    readonly id: 9475;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5379:2:65";
                };
                readonly returnParameters: {
                    readonly id: 9479;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9478;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "5454:11:65";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9489;
                        readonly src: "5446:19:65";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9477;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5446:7:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5445:21:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9506;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5620:144:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9505;
                    readonly nodeType: "Block";
                    readonly src: "5673:91:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9497;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 9494;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "5687:3:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 9495;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5691:5:65";
                                readonly memberName: "value";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5687:9:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 9496;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5699:1:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "5687:13:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9504;
                        readonly nodeType: "IfStatement";
                        readonly src: "5683:75:65";
                        readonly trueBody: {
                            readonly id: 9503;
                            readonly nodeType: "Block";
                            readonly src: "5702:56:65";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 9498;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "5723:11:65";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 9500;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5735:10:65";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10995;
                                        readonly src: "5723:22:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 9501;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5723:24:65";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 9502;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5716:31:65";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13446];
                readonly documentation: {
                    readonly id: 9490;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5542:73:65";
                    readonly text: "@dev Disallows the contract to receive ether, when opening positions.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "5629:18:65";
                readonly overrides: {
                    readonly id: 9492;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5664:8:65";
                };
                readonly parameters: {
                    readonly id: 9491;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5647:2:65";
                };
                readonly returnParameters: {
                    readonly id: 9493;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5673:0:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9525;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5939:148:65";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9524;
                    readonly nodeType: "Block";
                    readonly src: "5966:121:65";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 9516;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 9510;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "5980:3:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 9511;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5984:6:65";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5980:10:65";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 9514;
                                    readonly name: "_rocketTokenReth";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9293;
                                    readonly src: "6002:16:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IRocketTokenRETH_$12759";
                                        readonly typeString: "contract IRocketTokenRETH";
                                    }];
                                    readonly id: 9513;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5994:7:65";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 9512;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5994:7:65";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 9515;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5994:25:65";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5980:39:65";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9523;
                        readonly nodeType: "IfStatement";
                        readonly src: "5976:105:65";
                        readonly trueBody: {
                            readonly id: 9522;
                            readonly nodeType: "Block";
                            readonly src: "6021:60:65";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 9517;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "6042:11:65";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 9519;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6054:14:65";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11021;
                                        readonly src: "6042:26:65";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 9520;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6042:28:65";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 9521;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6035:35:65";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9507;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5770:164:65";
                    readonly text: "@dev Allows ether to be received only from the Rocket Pool rETH\n      token contract. Supports withdrawing as ethers from this\n      yield source.";
                };
                readonly implemented: true;
                readonly kind: "receive";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 9508;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5946:2:65";
                };
                readonly returnParameters: {
                    readonly id: 9509;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5966:0:65";
                };
                readonly scope: 9526;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 9281;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1131:14:65"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14381;
                    readonly src: "1131:14:65";
                };
                readonly id: 9282;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1131:14:65";
            }];
            readonly canonicalName: "RETHBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 9280;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "493:608:65";
                readonly text: "@author DELV\n @title RETHHyperdrive\n @notice The base contract for the rETH Hyperdrive implementation.\n @dev Rocket Pool has it's own notion of shares to account for the accrual of\n      interest on the ether pooled in the Rocket Pool protocol. Instead of\n      maintaining a balance of shares, this integration can simply use Rocket Pool\n      shares directly.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [9526, 14381, 18367, 72043, 11599, 12165];
            readonly name: "RETHBase";
            readonly nameLocation: "1119:8:65";
            readonly scope: 9527;
            readonly usedErrors: readonly [11021, 71988];
            readonly usedEvents: readonly [11419, 11434, 11453, 11468, 11485, 11504, 11523, 11544, 11557, 11564, 11569, 11574, 11579, 11586, 11591, 11598, 12146, 12155, 12164];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 65;
};
//# sourceMappingURL=RETHBase.d.ts.map