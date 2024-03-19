export declare const IERC4626: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "maxDeposit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxMint";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewDeposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewMint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewRedeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewWithdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "totalAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
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
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]}},\"version\":1}";
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
                    readonly "balanceOf(address)": {
                        readonly params: {
                            readonly account: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The account's balance.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The token's decimals.";
                        };
                    };
                    readonly "name()": {
                        readonly returns: {
                            readonly _0: "The token's name.";
                        };
                    };
                    readonly "symbol()": {
                        readonly returns: {
                            readonly _0: "The token's symbol.";
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
                        readonly notice: "The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.";
                    };
                    readonly "balanceOf(address)": {
                        readonly notice: "Gets the balance of an account.";
                    };
                    readonly "convertToAssets(uint256)": {
                        readonly notice: "The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.";
                    };
                    readonly "convertToShares(uint256)": {
                        readonly notice: "The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the token's decimals.";
                    };
                    readonly "deposit(uint256,address)": {
                        readonly notice: "Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.";
                    };
                    readonly "maxDeposit(address)": {
                        readonly notice: "Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.";
                    };
                    readonly "maxMint(address)": {
                        readonly notice: "Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.";
                    };
                    readonly "maxRedeem(address)": {
                        readonly notice: "Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.";
                    };
                    readonly "maxWithdraw(address)": {
                        readonly notice: "Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.";
                    };
                    readonly "mint(uint256,address)": {
                        readonly notice: "Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.";
                    };
                    readonly "name()": {
                        readonly notice: "Gets the token's name.";
                    };
                    readonly "previewDeposit(uint256)": {
                        readonly notice: "Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.";
                    };
                    readonly "previewMint(uint256)": {
                        readonly notice: "Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.";
                    };
                    readonly "previewRedeem(uint256)": {
                        readonly notice: "Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.";
                    };
                    readonly "previewWithdraw(uint256)": {
                        readonly notice: "Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.";
                    };
                    readonly "redeem(uint256,address,address)": {
                        readonly notice: "Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.";
                    };
                    readonly "symbol()": {
                        readonly notice: "Gets the token's symbol.";
                    };
                    readonly "totalAssets()": {
                        readonly notice: "Total amount of the underlying asset that is \"managed\" by Vault.";
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
                        readonly notice: "Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.";
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
                readonly keccak256: "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e";
                readonly urls: readonly ["bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3", "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"];
                readonly license: "GPL-2.0-or-later";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
        readonly id: 10642;
        readonly exportedSymbols: {
            readonly IERC20: readonly [10358];
            readonly IERC4626: readonly [10641];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "152:5540:82";
        readonly nodes: readonly [{
            readonly id: 10477;
            readonly nodeType: "PragmaDirective";
            readonly src: "152:23:82";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 10479;
            readonly nodeType: "ImportDirective";
            readonly src: "177:38:82";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 10642;
            readonly sourceUnit: 10359;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10478;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10358;
                    readonly src: "186:6:82";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 10641;
            readonly nodeType: "ContractDefinition";
            readonly src: "295:5396:82";
            readonly nodes: readonly [{
                readonly id: 10493;
                readonly nodeType: "EventDefinition";
                readonly src: "610:134:82";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10483;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "494:111:82";
                    readonly text: "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`.";
                };
                readonly eventSelector: "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7";
                readonly name: "Deposit";
                readonly nameLocation: "616:7:82";
                readonly parameters: {
                    readonly id: 10492;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10485;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "649:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10493;
                        readonly src: "633:22:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10484;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "633:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10487;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "681:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10493;
                        readonly src: "665:24:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10486;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "665:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10489;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "707:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10493;
                        readonly src: "699:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10488;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "699:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10491;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "731:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10493;
                        readonly src: "723:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10490;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "723:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "623:120:82";
                };
            }, {
                readonly id: 10504;
                readonly nodeType: "EventDefinition";
                readonly src: "866:135:82";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10494;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "750:111:82";
                    readonly text: "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`.";
                };
                readonly eventSelector: "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567";
                readonly name: "Withdraw";
                readonly nameLocation: "872:8:82";
                readonly parameters: {
                    readonly id: 10503;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10496;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "906:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10504;
                        readonly src: "890:22:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10495;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "890:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10498;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "938:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10504;
                        readonly src: "922:24:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10497;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "922:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10500;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "964:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10504;
                        readonly src: "956:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10499;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "956:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10502;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "988:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10504;
                        readonly src: "980:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10501;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "980:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "880:120:82";
                };
            }, {
                readonly id: 10510;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:63:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10505;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1173:125:82";
                    readonly text: "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing.";
                };
                readonly functionSelector: "38d52e0f";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "asset";
                readonly nameLocation: "1312:5:82";
                readonly parameters: {
                    readonly id: 10506;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1317:2:82";
                };
                readonly returnParameters: {
                    readonly id: 10509;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10508;
                        readonly mutability: "mutable";
                        readonly name: "asset";
                        readonly nameLocation: "1359:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10510;
                        readonly src: "1351:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10507;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1350:15:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10516;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1461:75:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10511;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1372:84:82";
                    readonly text: "@notice Total amount of the underlying asset that\n is \"managed\" by Vault.";
                };
                readonly functionSelector: "01e1d114";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalAssets";
                readonly nameLocation: "1470:11:82";
                readonly parameters: {
                    readonly id: 10512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1481:2:82";
                };
                readonly returnParameters: {
                    readonly id: 10515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10514;
                        readonly mutability: "mutable";
                        readonly name: "totalAssets";
                        readonly nameLocation: "1523:11:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10516;
                        readonly src: "1515:19:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10513;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1515:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1514:21:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10526;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1835:115:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10517;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1716:114:82";
                    readonly text: "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens.";
                };
                readonly functionSelector: "6e553f65";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "1844:7:82";
                readonly parameters: {
                    readonly id: 10522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10519;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "1869:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10526;
                        readonly src: "1861:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10518;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1861:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10521;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1893:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10526;
                        readonly src: "1885:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10520;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1885:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1851:56:82";
                };
                readonly returnParameters: {
                    readonly id: 10525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10524;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "1942:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10526;
                        readonly src: "1934:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10523;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1934:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1933:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10536;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2075:112:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10527;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1956:114:82";
                    readonly text: "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens.";
                };
                readonly functionSelector: "94bf804d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "2084:4:82";
                readonly parameters: {
                    readonly id: 10532;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10529;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2106:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10536;
                        readonly src: "2098:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10528;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2098:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10531;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2130:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10536;
                        readonly src: "2122:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10530;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2122:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2088:56:82";
                };
                readonly returnParameters: {
                    readonly id: 10535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10534;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2179:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10536;
                        readonly src: "2171:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10533;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2171:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2170:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10548;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2302:139:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10537;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2193:104:82";
                    readonly text: "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`.";
                };
                readonly functionSelector: "b460af94";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "2311:8:82";
                readonly parameters: {
                    readonly id: 10544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10539;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2337:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10548;
                        readonly src: "2329:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10538;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2329:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10541;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2361:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10548;
                        readonly src: "2353:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10540;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2353:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10543;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2387:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10548;
                        readonly src: "2379:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10542;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2379:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2319:79:82";
                };
                readonly returnParameters: {
                    readonly id: 10547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10546;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2433:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10548;
                        readonly src: "2425:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10545;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2425:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2424:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10560;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2556:137:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10549;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2447:104:82";
                    readonly text: "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`.";
                };
                readonly functionSelector: "ba087652";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redeem";
                readonly nameLocation: "2565:6:82";
                readonly parameters: {
                    readonly id: 10556;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10551;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2589:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10560;
                        readonly src: "2581:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10550;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2581:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10553;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2613:8:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10560;
                        readonly src: "2605:16:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10552;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2605:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10555;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2639:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10560;
                        readonly src: "2631:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10554;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2631:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2571:79:82";
                };
                readonly returnParameters: {
                    readonly id: 10559;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10558;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2685:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10560;
                        readonly src: "2677:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10557;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2677:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2676:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10568;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3044:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10561;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2871:168:82";
                    readonly text: "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met.";
                };
                readonly functionSelector: "c6e6f592";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToShares";
                readonly nameLocation: "3053:15:82";
                readonly parameters: {
                    readonly id: 10564;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10563;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3086:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10568;
                        readonly src: "3078:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10562;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3078:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3068:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10567;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10566;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "3138:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10568;
                        readonly src: "3130:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10565;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3130:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3129:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10576;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3325:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10569;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3152:168:82";
                    readonly text: "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met.";
                };
                readonly functionSelector: "07a2d13a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToAssets";
                readonly nameLocation: "3334:15:82";
                readonly parameters: {
                    readonly id: 10572;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10571;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "3367:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10576;
                        readonly src: "3359:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3359:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3349:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10575;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10574;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3419:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10576;
                        readonly src: "3411:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10573;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3411:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3410:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10584;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3637:99:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10577;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3433:199:82";
                    readonly text: "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call.";
                };
                readonly functionSelector: "402d267d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxDeposit";
                readonly nameLocation: "3646:10:82";
                readonly parameters: {
                    readonly id: 10580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10579;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3674:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10584;
                        readonly src: "3666:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10578;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3666:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3656:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10583;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10582;
                        readonly mutability: "mutable";
                        readonly name: "maxAssets";
                        readonly nameLocation: "3725:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10584;
                        readonly src: "3717:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10581;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3717:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3716:19:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10592;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3909:101:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10585;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3742:162:82";
                    readonly text: "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions.";
                };
                readonly functionSelector: "ef8b30f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewDeposit";
                readonly nameLocation: "3918:14:82";
                readonly parameters: {
                    readonly id: 10588;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10587;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3950:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10592;
                        readonly src: "3942:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10586;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3942:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3932:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10591;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10590;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "4002:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10592;
                        readonly src: "3994:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10589;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3994:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3993:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10600;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4192:96:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10593;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4016:171:82";
                    readonly text: "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call.";
                };
                readonly functionSelector: "c63d75b6";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxMint";
                readonly nameLocation: "4201:7:82";
                readonly parameters: {
                    readonly id: 10596;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10595;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "4226:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10600;
                        readonly src: "4218:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10594;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4218:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4208:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10599;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10598;
                        readonly mutability: "mutable";
                        readonly name: "maxShares";
                        readonly nameLocation: "4277:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10600;
                        readonly src: "4269:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10597;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4269:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4268:19:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4458:98:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10601;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4294:159:82";
                    readonly text: "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions.";
                };
                readonly functionSelector: "b3d7f6b9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewMint";
                readonly nameLocation: "4467:11:82";
                readonly parameters: {
                    readonly id: 10604;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10603;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "4496:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10608;
                        readonly src: "4488:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10602;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4488:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4478:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10607;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10606;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "4548:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10608;
                        readonly src: "4540:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10605;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4540:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4539:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10616;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4748:100:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10609;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4562:181:82";
                    readonly text: "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call.";
                };
                readonly functionSelector: "ce96cb77";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxWithdraw";
                readonly nameLocation: "4757:11:82";
                readonly parameters: {
                    readonly id: 10612;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10611;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "4786:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10616;
                        readonly src: "4778:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10610;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4778:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4768:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10615;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10614;
                        readonly mutability: "mutable";
                        readonly name: "maxAssets";
                        readonly nameLocation: "4837:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10616;
                        readonly src: "4829:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10613;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4829:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4828:19:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10624;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5024:102:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10617;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4854:165:82";
                    readonly text: "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions.";
                };
                readonly functionSelector: "0a28a477";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewWithdraw";
                readonly nameLocation: "5033:15:82";
                readonly parameters: {
                    readonly id: 10620;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10619;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "5066:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10624;
                        readonly src: "5058:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10618;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5058:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5048:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10623;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10622;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "5118:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10624;
                        readonly src: "5110:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10621;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5110:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5109:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10632;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5315:98:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10625;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5132:178:82";
                    readonly text: "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call.";
                };
                readonly functionSelector: "d905777e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxRedeem";
                readonly nameLocation: "5324:9:82";
                readonly parameters: {
                    readonly id: 10628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10627;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5351:5:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10632;
                        readonly src: "5343:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10626;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5343:7:82";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5333:29:82";
                };
                readonly returnParameters: {
                    readonly id: 10631;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10630;
                        readonly mutability: "mutable";
                        readonly name: "maxShares";
                        readonly nameLocation: "5402:9:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10632;
                        readonly src: "5394:17:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5394:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5393:19:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 10640;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5589:100:82";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10633;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5419:165:82";
                    readonly text: "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions.";
                };
                readonly functionSelector: "4cdad506";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewRedeem";
                readonly nameLocation: "5598:13:82";
                readonly parameters: {
                    readonly id: 10636;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10635;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "5629:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10640;
                        readonly src: "5621:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10634;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5621:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5611:30:82";
                };
                readonly returnParameters: {
                    readonly id: 10639;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10638;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "5681:6:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10640;
                        readonly src: "5673:14:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10637;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5673:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5672:16:82";
                };
                readonly scope: 10641;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 10481;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["325:6:82"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 10358;
                    readonly src: "325:6:82";
                };
                readonly id: 10482;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "325:6:82";
            }];
            readonly canonicalName: "IERC4626";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 10480;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "217:78:82";
                readonly text: "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [10641, 10358];
            readonly name: "IERC4626";
            readonly nameLocation: "313:8:82";
            readonly scope: 10642;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [10274, 10283, 10493, 10504];
        }];
        readonly license: "GPL-2.0-or-later";
    };
    readonly id: 82;
};
//# sourceMappingURL=IERC4626.d.ts.map