export declare const IERC4626: {
    readonly abi: readonly [{
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
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "asset";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "convertToAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "convertToShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxAssets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxMint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxShares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxRedeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxShares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxWithdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxAssets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "previewDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "previewMint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "previewRedeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "previewWithdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalAssets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "asset()": "38d52e0f";
        readonly "balanceOf(address)": "70a08231";
        readonly "convertToAssets(uint256)": "07a2d13a";
        readonly "convertToShares(uint256)": "c6e6f592";
        readonly "decimals()": "313ce567";
        readonly "deposit(uint256,address)": "6e553f65";
        readonly "maxDeposit(address)": "402d267d";
        readonly "maxMint(address)": "c63d75b6";
        readonly "maxRedeem(address)": "d905777e";
        readonly "maxWithdraw(address)": "ce96cb77";
        readonly "mint(uint256,address)": "94bf804d";
        readonly "name()": "06fdde03";
        readonly "previewDeposit(uint256)": "ef8b30f7";
        readonly "previewMint(uint256)": "b3d7f6b9";
        readonly "previewRedeem(uint256)": "4cdad506";
        readonly "previewWithdraw(uint256)": "0a28a477";
        readonly "redeem(uint256,address,address)": "ba087652";
        readonly "symbol()": "95d89b41";
        readonly "totalAssets()": "01e1d114";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "withdraw(uint256,address,address)": "b460af94";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"asset()\":{\"returns\":{\"asset\":\"The underlying asset.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"convertToAssets(uint256)\":{\"params\":{\"shares\":\"The amount of shares to convert.\"},\"returns\":{\"assets\":\"The amount of assets that would be received.\"}},\"convertToShares(uint256)\":{\"params\":{\"assets\":\"The amount of assets to convert.\"},\"returns\":{\"shares\":\"The amount of shares that would be minted.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"deposit(uint256,address)\":{\"params\":{\"assets\":\"The amount of assets to deposit.\",\"receiver\":\"The address that will receive the shares.\"},\"returns\":{\"shares\":\"The amount of shares minted.\"}},\"maxDeposit(address)\":{\"params\":{\"owner\":\"The address of the account that would deposit the assets.\"},\"returns\":{\"maxAssets\":\"The maximum amount of assets that can be deposited.\"}},\"maxMint(address)\":{\"params\":{\"owner\":\"The address of the account that would mint the shares.\"},\"returns\":{\"maxShares\":\"The maximum number of shares that can be minted.\"}},\"maxRedeem(address)\":{\"params\":{\"owner\":\"The address of the account that would redeem the shares.\"},\"returns\":{\"maxShares\":\"The maximum number of shares that can be redeemed.\"}},\"maxWithdraw(address)\":{\"params\":{\"owner\":\"The address of the account that would withdraw the assets.\"},\"returns\":{\"maxAssets\":\"The maximum amount of assets that can be withdrawn.\"}},\"mint(uint256,address)\":{\"params\":{\"receiver\":\"The address that will receive the shares.\",\"shares\":\"The amount of shares to mint.\"},\"returns\":{\"assets\":\"The amount of assets required to mint the shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"previewDeposit(uint256)\":{\"params\":{\"assets\":\"The amount of assets to deposit.\"},\"returns\":{\"shares\":\"The amount of shares that would be minted.\"}},\"previewMint(uint256)\":{\"params\":{\"shares\":\"The amount of shares to mint.\"},\"returns\":{\"assets\":\"The amount of assets deposited.\"}},\"previewRedeem(uint256)\":{\"params\":{\"shares\":\"The amount of shares to redeem.\"},\"returns\":{\"assets\":\"The amount of assets received.\"}},\"previewWithdraw(uint256)\":{\"params\":{\"assets\":\"The amount of assets to withdraw.\"},\"returns\":{\"shares\":\"The amount of shares that would be burned.\"}},\"redeem(uint256,address,address)\":{\"params\":{\"owner\":\"The address that owns the shares.\",\"receiver\":\"The address that will receive the assets.\",\"shares\":\"The amount of shares to burn.\"},\"returns\":{\"assets\":\"The amount of assets received for burning the shares.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalAssets()\":{\"returns\":{\"totalAssets\":\"The total number of underlying assets.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"withdraw(uint256,address,address)\":{\"params\":{\"assets\":\"The amount of assets to withdraw.\",\"owner\":\"The address that owns the shares.\",\"receiver\":\"The address that will receive the assets.\"},\"returns\":{\"shares\":\"The amount of shares burned.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"Emitted when funds are deposited into the vault.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"Emitted when funds are withdrawn from the vault.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"asset()\":{\"notice\":\"The underlying asset of the vault.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"convertToAssets(uint256)\":{\"notice\":\"Converts an amount of shares to assets.\"},\"convertToShares(uint256)\":{\"notice\":\"Converts an amount of assets to shares.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"deposit(uint256,address)\":{\"notice\":\"Deposits assets into the vault and mints shares.\"},\"maxDeposit(address)\":{\"notice\":\"The maximum amount of assets that can be deposited into the         vault.\"},\"maxMint(address)\":{\"notice\":\"The maximum number of shares that can be minted by `owner`.\"},\"maxRedeem(address)\":{\"notice\":\"The maximum number of shares that can be redeemed by `owner`.\"},\"maxWithdraw(address)\":{\"notice\":\"The maximum amount of assets that can be withdrawn from the         vault.\"},\"mint(uint256,address)\":{\"notice\":\"Mints a specified amount of shares for a receiver.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"previewDeposit(uint256)\":{\"notice\":\"Previews the amount of shares that would be minted for a         given amount of assets.\"},\"previewMint(uint256)\":{\"notice\":\"Previews the amount of assets that would be minted for a         given amount of shares.\"},\"previewRedeem(uint256)\":{\"notice\":\"Previews the amount of assets that would be received for a         given amount of shares.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Previews the amount of shares that would be burned for a         given amount of assets.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Burns a specified amount of shares for an owner.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalAssets()\":{\"notice\":\"The total number of underlying assets held by the vault.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Withdraws assets from the vault and burns shares.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
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
                    readonly name: "sender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deposit";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
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
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Transfer";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Withdraw";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "asset";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "asset";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxDeposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maxAssets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maxShares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maxShares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maxAssets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewDeposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "redeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "totalAssets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "withdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "allowance(address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The allowance of the spender for the owner.";
                        };
                    };
                    readonly "approve(address,uint256)": {
                        readonly params: {
                            readonly amount: "The new allowance of the spender.";
                            readonly spender: "The account with the allowance.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the approval succeeded.";
                        };
                    };
                    readonly "asset()": {
                        readonly returns: {
                            readonly asset: "The underlying asset.";
                        };
                    };
                    readonly "balanceOf(address)": {
                        readonly params: {
                            readonly account: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The account's balance.";
                        };
                    };
                    readonly "convertToAssets(uint256)": {
                        readonly params: {
                            readonly shares: "The amount of shares to convert.";
                        };
                        readonly returns: {
                            readonly assets: "The amount of assets that would be received.";
                        };
                    };
                    readonly "convertToShares(uint256)": {
                        readonly params: {
                            readonly assets: "The amount of assets to convert.";
                        };
                        readonly returns: {
                            readonly shares: "The amount of shares that would be minted.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The token's decimals.";
                        };
                    };
                    readonly "deposit(uint256,address)": {
                        readonly params: {
                            readonly assets: "The amount of assets to deposit.";
                            readonly receiver: "The address that will receive the shares.";
                        };
                        readonly returns: {
                            readonly shares: "The amount of shares minted.";
                        };
                    };
                    readonly "maxDeposit(address)": {
                        readonly params: {
                            readonly owner: "The address of the account that would deposit the assets.";
                        };
                        readonly returns: {
                            readonly maxAssets: "The maximum amount of assets that can be deposited.";
                        };
                    };
                    readonly "maxMint(address)": {
                        readonly params: {
                            readonly owner: "The address of the account that would mint the shares.";
                        };
                        readonly returns: {
                            readonly maxShares: "The maximum number of shares that can be minted.";
                        };
                    };
                    readonly "maxRedeem(address)": {
                        readonly params: {
                            readonly owner: "The address of the account that would redeem the shares.";
                        };
                        readonly returns: {
                            readonly maxShares: "The maximum number of shares that can be redeemed.";
                        };
                    };
                    readonly "maxWithdraw(address)": {
                        readonly params: {
                            readonly owner: "The address of the account that would withdraw the assets.";
                        };
                        readonly returns: {
                            readonly maxAssets: "The maximum amount of assets that can be withdrawn.";
                        };
                    };
                    readonly "mint(uint256,address)": {
                        readonly params: {
                            readonly receiver: "The address that will receive the shares.";
                            readonly shares: "The amount of shares to mint.";
                        };
                        readonly returns: {
                            readonly assets: "The amount of assets required to mint the shares.";
                        };
                    };
                    readonly "name()": {
                        readonly returns: {
                            readonly _0: "The token's name.";
                        };
                    };
                    readonly "previewDeposit(uint256)": {
                        readonly params: {
                            readonly assets: "The amount of assets to deposit.";
                        };
                        readonly returns: {
                            readonly shares: "The amount of shares that would be minted.";
                        };
                    };
                    readonly "previewMint(uint256)": {
                        readonly params: {
                            readonly shares: "The amount of shares to mint.";
                        };
                        readonly returns: {
                            readonly assets: "The amount of assets deposited.";
                        };
                    };
                    readonly "previewRedeem(uint256)": {
                        readonly params: {
                            readonly shares: "The amount of shares to redeem.";
                        };
                        readonly returns: {
                            readonly assets: "The amount of assets received.";
                        };
                    };
                    readonly "previewWithdraw(uint256)": {
                        readonly params: {
                            readonly assets: "The amount of assets to withdraw.";
                        };
                        readonly returns: {
                            readonly shares: "The amount of shares that would be burned.";
                        };
                    };
                    readonly "redeem(uint256,address,address)": {
                        readonly params: {
                            readonly owner: "The address that owns the shares.";
                            readonly receiver: "The address that will receive the assets.";
                            readonly shares: "The amount of shares to burn.";
                        };
                        readonly returns: {
                            readonly assets: "The amount of assets received for burning the shares.";
                        };
                    };
                    readonly "symbol()": {
                        readonly returns: {
                            readonly _0: "The token's symbol.";
                        };
                    };
                    readonly "totalAssets()": {
                        readonly returns: {
                            readonly totalAssets: "The total number of underlying assets.";
                        };
                    };
                    readonly "totalSupply()": {
                        readonly returns: {
                            readonly _0: "The token's total supply.";
                        };
                    };
                    readonly "transfer(address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of tokens that will be transferred.";
                            readonly to: "The recipient of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the transfer succeeded.";
                        };
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of tokens that will be transferred.";
                            readonly from: "The owner of the tokens.";
                            readonly to: "The recipient of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the transfer succeeded.";
                        };
                    };
                    readonly "withdraw(uint256,address,address)": {
                        readonly params: {
                            readonly assets: "The amount of assets to withdraw.";
                            readonly owner: "The address that owns the shares.";
                            readonly receiver: "The address that will receive the assets.";
                        };
                        readonly returns: {
                            readonly shares: "The amount of shares burned.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "allowance(address,address)": {
                        readonly notice: "Gets the allowance of a spender for an owner.";
                    };
                    readonly "approve(address,uint256)": {
                        readonly notice: "Updates the allowance of a spender on behalf of the sender.";
                    };
                    readonly "asset()": {
                        readonly notice: "The underlying asset of the vault.";
                    };
                    readonly "balanceOf(address)": {
                        readonly notice: "Gets the balance of an account.";
                    };
                    readonly "convertToAssets(uint256)": {
                        readonly notice: "Converts an amount of shares to assets.";
                    };
                    readonly "convertToShares(uint256)": {
                        readonly notice: "Converts an amount of assets to shares.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the token's decimals.";
                    };
                    readonly "deposit(uint256,address)": {
                        readonly notice: "Deposits assets into the vault and mints shares.";
                    };
                    readonly "maxDeposit(address)": {
                        readonly notice: "The maximum amount of assets that can be deposited into the         vault.";
                    };
                    readonly "maxMint(address)": {
                        readonly notice: "The maximum number of shares that can be minted by `owner`.";
                    };
                    readonly "maxRedeem(address)": {
                        readonly notice: "The maximum number of shares that can be redeemed by `owner`.";
                    };
                    readonly "maxWithdraw(address)": {
                        readonly notice: "The maximum amount of assets that can be withdrawn from the         vault.";
                    };
                    readonly "mint(uint256,address)": {
                        readonly notice: "Mints a specified amount of shares for a receiver.";
                    };
                    readonly "name()": {
                        readonly notice: "Gets the token's name.";
                    };
                    readonly "previewDeposit(uint256)": {
                        readonly notice: "Previews the amount of shares that would be minted for a         given amount of assets.";
                    };
                    readonly "previewMint(uint256)": {
                        readonly notice: "Previews the amount of assets that would be minted for a         given amount of shares.";
                    };
                    readonly "previewRedeem(uint256)": {
                        readonly notice: "Previews the amount of assets that would be received for a         given amount of shares.";
                    };
                    readonly "previewWithdraw(uint256)": {
                        readonly notice: "Previews the amount of shares that would be burned for a         given amount of assets.";
                    };
                    readonly "redeem(uint256,address,address)": {
                        readonly notice: "Burns a specified amount of shares for an owner.";
                    };
                    readonly "symbol()": {
                        readonly notice: "Gets the token's symbol.";
                    };
                    readonly "totalAssets()": {
                        readonly notice: "The total number of underlying assets held by the vault.";
                    };
                    readonly "totalSupply()": {
                        readonly notice: "Gets the token's total supply.";
                    };
                    readonly "transfer(address,uint256)": {
                        readonly notice: "Transfers tokens from the sender's account to another account.";
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly notice: "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.";
                    };
                    readonly "withdraw(uint256,address,address)": {
                        readonly notice: "Withdraws assets from the vault and burns shares.";
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
                readonly "contracts/src/interfaces/IERC4626.sol": "IERC4626";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626.sol": {
                readonly keccak256: "0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741";
                readonly urls: readonly ["bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366", "dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
        readonly id: 10093;
        readonly exportedSymbols: {
            readonly IERC20: readonly [9810];
            readonly IERC4626: readonly [10092];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:5833:82";
        readonly nodes: readonly [{
            readonly id: 9929;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:82";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 9931;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:82";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 10093;
            readonly sourceUnit: 9811;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 9930;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9810;
                    readonly src: "73:6:82";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 10092;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:5767:82";
            readonly nodes: readonly [{
                readonly id: 9944;
                readonly nodeType: "EventDefinition";
                readonly src: "212:134:82";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 9934;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "147:60:82";
                    readonly text: "@notice Emitted when funds are deposited into the vault.";
                };
                readonly eventSelector: "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7";
                readonly name: "Deposit";
                readonly nameLocation: "218:7:82";
                readonly parameters: {
                    readonly id: 9943;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9936;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "251:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9944;
                        readonly src: "235:22:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9935;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "235:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9938;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "283:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9944;
                        readonly src: "267:24:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9937;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "267:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9940;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "309:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9944;
                        readonly src: "301:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9939;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "301:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9942;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "333:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9944;
                        readonly src: "325:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9941;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "325:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "225:120:82";
                };
            }, {
                readonly id: 9955;
                readonly nodeType: "EventDefinition";
                readonly src: "417:135:82";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 9945;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "352:60:82";
                    readonly text: "@notice Emitted when funds are withdrawn from the vault.";
                };
                readonly eventSelector: "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567";
                readonly name: "Withdraw";
                readonly nameLocation: "423:8:82";
                readonly parameters: {
                    readonly id: 9954;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9947;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "457:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9955;
                        readonly src: "441:22:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9946;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "441:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9949;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "489:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9955;
                        readonly src: "473:24:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9948;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "473:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9951;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "515:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9955;
                        readonly src: "507:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9950;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "507:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9953;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "539:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9955;
                        readonly src: "531:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9952;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "531:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "431:120:82";
                };
            }, {
                readonly id: 9961;
                readonly nodeType: "FunctionDefinition";
                readonly src: "653:63:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9956;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "558:90:82";
                    readonly text: "@notice The underlying asset of the vault.\n @return asset The underlying asset.";
                };
                readonly functionSelector: "38d52e0f";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "asset";
                readonly nameLocation: "662:5:82";
                readonly parameters: {
                    readonly id: 9957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "667:2:82";
                };
                readonly returnParameters: {
                    readonly id: 9960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9959;
                        readonly mutability: "mutable";
                        readonly name: "asset";
                        readonly nameLocation: "709:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9961;
                        readonly src: "701:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9958;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "701:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "700:15:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 9967;
                readonly nodeType: "FunctionDefinition";
                readonly src: "862:75:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9962;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "722:135:82";
                    readonly text: "@notice The total number of underlying assets held by the vault.\n @return totalAssets The total number of underlying assets.";
                };
                readonly functionSelector: "01e1d114";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalAssets";
                readonly nameLocation: "871:11:82";
                readonly parameters: {
                    readonly id: 9963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "882:2:82";
                };
                readonly returnParameters: {
                    readonly id: 9966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9965;
                        readonly mutability: "mutable";
                        readonly name: "totalAssets";
                        readonly nameLocation: "924:11:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9967;
                        readonly src: "916:19:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9964;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "916:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "915:21:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 9977;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1181:115:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9968;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "943:233:82";
                    readonly text: "@notice Deposits assets into the vault and mints shares.\n @param assets The amount of assets to deposit.\n @param receiver The address that will receive the shares.\n @return shares The amount of shares minted.";
                };
                readonly functionSelector: "6e553f65";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "1190:7:82";
                readonly parameters: {
                    readonly id: 9973;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9970;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "1215:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9977;
                        readonly src: "1207:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9969;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1207:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9972;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1239:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9977;
                        readonly src: "1231:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9971;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1231:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1197:56:82";
                };
                readonly returnParameters: {
                    readonly id: 9976;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9975;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "1288:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9977;
                        readonly src: "1280:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9974;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1280:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1279:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 9987;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1560:112:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9978;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1302:253:82";
                    readonly text: "@notice Mints a specified amount of shares for a receiver.\n @param shares The amount of shares to mint.\n @param receiver The address that will receive the shares.\n @return assets The amount of assets required to mint the shares.";
                };
                readonly functionSelector: "94bf804d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "1569:4:82";
                readonly parameters: {
                    readonly id: 9983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9980;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "1591:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9987;
                        readonly src: "1583:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9979;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1583:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9982;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1615:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9987;
                        readonly src: "1607:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9981;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1607:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1573:56:82";
                };
                readonly returnParameters: {
                    readonly id: 9986;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9985;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "1664:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9987;
                        readonly src: "1656:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9984;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1656:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1655:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 9999;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1973:139:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9988;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1678:290:82";
                    readonly text: "@notice Withdraws assets from the vault and burns shares.\n @param assets The amount of assets to withdraw.\n @param receiver The address that will receive the assets.\n @param owner The address that owns the shares.\n @return shares The amount of shares burned.";
                };
                readonly functionSelector: "b460af94";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "1982:8:82";
                readonly parameters: {
                    readonly id: 9995;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9990;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2008:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9999;
                        readonly src: "2000:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9989;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2000:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9992;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2032:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9999;
                        readonly src: "2024:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9991;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2024:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9994;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2058:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9999;
                        readonly src: "2050:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 9993;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2050:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1990:79:82";
                };
                readonly returnParameters: {
                    readonly id: 9998;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9997;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2104:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9999;
                        readonly src: "2096:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9996;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2096:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2095:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10011;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2433:137:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10000;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2118:310:82";
                    readonly text: "@notice Burns a specified amount of shares for an owner.\n @param shares The amount of shares to burn.\n @param receiver The address that will receive the assets.\n @param owner The address that owns the shares.\n @return assets The amount of assets received for burning the shares.";
                };
                readonly functionSelector: "ba087652";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redeem";
                readonly nameLocation: "2442:6:82";
                readonly parameters: {
                    readonly id: 10007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10002;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2466:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10011;
                        readonly src: "2458:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10001;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2458:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10004;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2490:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10011;
                        readonly src: "2482:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10003;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2482:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10006;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2516:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10011;
                        readonly src: "2508:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10005;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2508:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2448:79:82";
                };
                readonly returnParameters: {
                    readonly id: 10010;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10009;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2562:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10011;
                        readonly src: "2554:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10008;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2553:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10019;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2753:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10012;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2576:172:82";
                    readonly text: "@notice Converts an amount of assets to shares.\n @param assets The amount of assets to convert.\n @return shares The amount of shares that would be minted.";
                };
                readonly functionSelector: "c6e6f592";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToShares";
                readonly nameLocation: "2762:15:82";
                readonly parameters: {
                    readonly id: 10015;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10014;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2795:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10019;
                        readonly src: "2787:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10013;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2787:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2777:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10018;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10017;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2847:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10019;
                        readonly src: "2839:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10016;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2839:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2838:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10027;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3040:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10020;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2861:174:82";
                    readonly text: "@notice Converts an amount of shares to assets.\n @param shares The amount of shares to convert.\n @return assets The amount of assets that would be received.";
                };
                readonly functionSelector: "07a2d13a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToAssets";
                readonly nameLocation: "3049:15:82";
                readonly parameters: {
                    readonly id: 10023;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10022;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "3082:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10027;
                        readonly src: "3074:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10021;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3074:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3064:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10026;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10025;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3134:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10027;
                        readonly src: "3126:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10024;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3126:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3125:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10035;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3404:99:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10028;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3148:251:82";
                    readonly text: "@notice The maximum amount of assets that can be deposited into the\n         vault.\n @param owner The address of the account that would deposit the assets.\n @return maxAssets The maximum amount of assets that can be deposited.";
                };
                readonly functionSelector: "402d267d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxDeposit";
                readonly nameLocation: "3413:10:82";
                readonly parameters: {
                    readonly id: 10031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10030;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3441:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10035;
                        readonly src: "3433:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10029;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3433:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3423:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10034;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10033;
                        readonly mutability: "mutable";
                        readonly name: "maxAssets";
                        readonly nameLocation: "3492:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10035;
                        readonly src: "3484:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10032;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3484:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3483:19:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10043;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3743:101:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10036;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3509:229:82";
                    readonly text: "@notice Previews the amount of shares that would be minted for a\n         given amount of assets.\n @param assets The amount of assets to deposit.\n @return shares The amount of shares that would be minted.";
                };
                readonly functionSelector: "ef8b30f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewDeposit";
                readonly nameLocation: "3752:14:82";
                readonly parameters: {
                    readonly id: 10039;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10038;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3784:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10043;
                        readonly src: "3776:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10037;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3776:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3766:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10042;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10041;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "3836:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10043;
                        readonly src: "3828:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10040;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3828:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3827:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10051;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4077:96:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10044;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3850:222:82";
                    readonly text: "@notice The maximum number of shares that can be minted by `owner`.\n @param owner The address of the account that would mint the shares.\n @return maxShares The maximum number of shares that can be minted.";
                };
                readonly functionSelector: "c63d75b6";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxMint";
                readonly nameLocation: "4086:7:82";
                readonly parameters: {
                    readonly id: 10047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10046;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "4111:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10051;
                        readonly src: "4103:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10045;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4103:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4093:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10050;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10049;
                        readonly mutability: "mutable";
                        readonly name: "maxShares";
                        readonly nameLocation: "4162:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10051;
                        readonly src: "4154:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10048;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4154:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4153:19:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10059;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4399:98:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10052;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4179:215:82";
                    readonly text: "@notice Previews the amount of assets that would be minted for a\n         given amount of shares.\n @param shares The amount of shares to mint.\n @return assets The amount of assets deposited.";
                };
                readonly functionSelector: "b3d7f6b9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewMint";
                readonly nameLocation: "4408:11:82";
                readonly parameters: {
                    readonly id: 10055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10054;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "4437:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10059;
                        readonly src: "4429:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10053;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4429:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4419:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10057;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "4489:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10059;
                        readonly src: "4481:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10056;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4481:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4480:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10067;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4760:100:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10060;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4503:252:82";
                    readonly text: "@notice The maximum amount of assets that can be withdrawn from the\n         vault.\n @param owner The address of the account that would withdraw the assets.\n @return maxAssets The maximum amount of assets that can be withdrawn.";
                };
                readonly functionSelector: "ce96cb77";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxWithdraw";
                readonly nameLocation: "4769:11:82";
                readonly parameters: {
                    readonly id: 10063;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10062;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "4798:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10067;
                        readonly src: "4790:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10061;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4790:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4780:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10066;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10065;
                        readonly mutability: "mutable";
                        readonly name: "maxAssets";
                        readonly nameLocation: "4849:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10067;
                        readonly src: "4841:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10064;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4841:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4840:19:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10075;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5101:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10068;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4866:230:82";
                    readonly text: "@notice Previews the amount of shares that would be burned for a\n         given amount of assets.\n @param assets The amount of assets to withdraw.\n @return shares The amount of shares that would be burned.";
                };
                readonly functionSelector: "0a28a477";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewWithdraw";
                readonly nameLocation: "5110:15:82";
                readonly parameters: {
                    readonly id: 10071;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10070;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "5143:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10075;
                        readonly src: "5135:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10069;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5135:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5125:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10074;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10073;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "5195:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10075;
                        readonly src: "5187:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10072;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5187:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5186:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10083;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5442:98:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10076;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5209:228:82";
                    readonly text: "@notice The maximum number of shares that can be redeemed by `owner`.\n @param owner The address of the account that would redeem the shares.\n @return maxShares The maximum number of shares that can be redeemed.";
                };
                readonly functionSelector: "d905777e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxRedeem";
                readonly nameLocation: "5451:9:82";
                readonly parameters: {
                    readonly id: 10079;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10078;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5478:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10083;
                        readonly src: "5470:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10077;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5470:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5460:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10082;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10081;
                        readonly mutability: "mutable";
                        readonly name: "maxShares";
                        readonly nameLocation: "5529:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10083;
                        readonly src: "5521:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10080;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5521:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5520:19:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10091;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5769:100:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10084;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5546:218:82";
                    readonly text: "@notice Previews the amount of assets that would be received for a\n         given amount of shares.\n @param shares The amount of shares to redeem.\n @return assets The amount of assets received.";
                };
                readonly functionSelector: "4cdad506";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewRedeem";
                readonly nameLocation: "5778:13:82";
                readonly parameters: {
                    readonly id: 10087;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10086;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "5809:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10091;
                        readonly src: "5801:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10085;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5801:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5791:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10090;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10089;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "5861:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10091;
                        readonly src: "5853:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10088;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5853:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5852:16:82";
                };
                readonly scope: 10092;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 9932;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["134:6:82"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 9810;
                    readonly src: "134:6:82";
                };
                readonly id: 9933;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "134:6:82";
            }];
            readonly canonicalName: "IERC4626";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [10092, 9810];
            readonly name: "IERC4626";
            readonly nameLocation: "122:8:82";
            readonly scope: 10093;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [9726, 9735, 9944, 9955];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 82;
};
//# sourceMappingURL=IERC4626.d.ts.map