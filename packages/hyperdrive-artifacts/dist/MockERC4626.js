export const MockERC4626 = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_asset",
                    "type": "address",
                    "internalType": "contract ERC20Mintable"
                },
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_symbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_initialRate",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_admin",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_isCompetitionMode",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "_maxMintAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "asset",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "authority",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "burn",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "burn",
            "inputs": [
                {
                    "name": "destination",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "canCall",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "convertToAssets",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "convertToShares",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "deposit",
            "inputs": [
                {
                    "name": "_assets",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "doesRoleHaveCapability",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "doesUserHaveRole",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRate",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRolesWithCapability",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTargetCustomAuthority",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserRoles",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isCapabilityPublic",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isCompetitionMode",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxDeposit",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxMint",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxMintAmount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxRedeem",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxWithdraw",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "destination",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "_shares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "previewDeposit",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewMint",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewRedeem",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewWithdraw",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "redeem",
            "inputs": [
                {
                    "name": "_shares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setAuthority",
            "inputs": [
                {
                    "name": "newAuthority",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPublicCapability",
            "inputs": [
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRate",
            "inputs": [
                {
                    "name": "_rate_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRoleCapability",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setTargetCustomAuthority",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "customAuthority",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUserRole",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalAssets",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transfer",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "_assets",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "AuthorityUpdated",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newAuthority",
                    "type": "address",
                    "indexed": true,
                    "internalType": "contract Authority"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Deposit",
            "inputs": [
                {
                    "name": "caller",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assets",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "shares",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PublicCapabilityUpdated",
            "inputs": [
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "indexed": true,
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RoleCapabilityUpdated",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "indexed": true,
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "indexed": true,
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TargetCustomAuthorityUpdated",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "authority",
                    "type": "address",
                    "indexed": true,
                    "internalType": "contract Authority"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "UserRoleUpdated",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "indexed": true,
                    "internalType": "uint8"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Withdraw",
            "inputs": [
                {
                    "name": "caller",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assets",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "shares",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x6101406040523480156200001257600080fd5b5060405162002b9738038062002b97833981016040819052620000359162000315565b823081818a8a8a8181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003d8565b6000620000b1848262000493565b506001620000c0838262000493565b5060ff81166080524660a052620000d66200019b565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9490945542600d55901515610100526101205250620005dd9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001cf91906200055f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024d57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027857600080fd5b81516001600160401b038082111562000295576200029562000250565b604051601f8301601f19908116603f01168101908282118183101715620002c057620002c062000250565b81604052838152602092508683858801011115620002dd57600080fd5b600091505b83821015620003015785820183015181830184015290820190620002e2565b600093810190920192909252949350505050565b600080600080600080600060e0888a0312156200033157600080fd5b87516200033e8162000237565b60208901519097506001600160401b03808211156200035c57600080fd5b6200036a8b838c0162000266565b975060408a01519150808211156200038157600080fd5b50620003908a828b0162000266565b955050606088015193506080880151620003aa8162000237565b60a08901519093508015158114620003c157600080fd5b8092505060c0880151905092959891949750929550565b600060208284031215620003eb57600080fd5b815160ff81168114620003fd57600080fd5b9392505050565b600181811c908216806200041957607f821691505b6020821081036200043a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200048e57600081815260208120601f850160051c81016020861015620004695750805b601f850160051c820191505b818110156200048a5782815560010162000475565b5050505b505050565b81516001600160401b03811115620004af57620004af62000250565b620004c781620004c0845462000404565b8462000440565b602080601f831160018114620004ff5760008415620004e65750858301515b600019600386901b1c1916600185901b1785556200048a565b600085815260208120601f198616915b8281101562000530578886015182559484019460019091019084016200050f565b50858210156200054f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200056f8162000404565b600182811680156200058a5760018114620005a057620005d1565b60ff1984168752821515830287019450620005d1565b8760005260208060002060005b85811015620005c85781548a820152908401908201620005ad565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051610120516125086200068f600039600081816103d501528181610ca7015261115101526000818161056401528181610b9401528181610c4f01528181610d250152818161109701526110f901526000818161046301528181610807015281816116ee0152818161187c01528181611a9601528181611b2e01528181611c800152611dc201526000610c2b01526000610bfb0152600061040f01526125086000f3fe608060405234801561001057600080fd5b50600436106102f15760003560e01c80637a8c63b51161019d578063bf7e214f116100e9578063d905777e116100a2578063ea7ca2761161007c578063ea7ca2761461076b578063ed0d0efb146107a2578063ef8b30f7146107c2578063f2fde38b146107d557600080fd5b8063d905777e146106e1578063dd62ed3e1461070a578063e688747b1461073557600080fd5b8063bf7e214f1461066c578063c53a39851461067f578063c63d75b61461049d578063c6e6f592146106a8578063ce96cb77146106bb578063d505accf146106ce57600080fd5b80639dc29fac11610156578063b3d7f6b911610130578063b3d7f6b914610620578063b460af9414610633578063b700961314610646578063ba0876521461065957600080fd5b80639dc29fac146105e7578063a0712d68146105fa578063a9059cbb1461060d57600080fd5b80637a8c63b51461055f5780637a9e5e4b146105865780637ecebe00146105995780638da5cb5b146105b957806394bf804d146105cc57806395d89b41146105df57600080fd5b806334fcf4371161025c5780634b5159da1161021557806367aff484116101ef57806367aff484146105065780636e553f651461051957806370a082311461052c578063728b952b1461054c57600080fd5b80634b5159da146104d85780634cdad506146104eb578063679aefce146104fe57600080fd5b806334fcf437146104435780633644e5151461045657806338d52e0f1461045e578063402d267d1461049d57806340c10f19146104b257806342966c68146104c557600080fd5b80630bade8a4116102ae5780630bade8a41461038f5780630ea9b75b146103b257806318160ddd146103c7578063239c70ae146103d057806323b872dd146103f7578063313ce5671461040a57600080fd5b806301e1d114146102f657806306a36aee1461031157806306fdde031461033157806307a2d13a14610346578063095ea7b3146103595780630a28a4771461037c575b600080fd5b6102fe6107e8565b6040519081526020015b60405180910390f35b6102fe61031f366004611f4b565b60096020526000908152604090205481565b610339610889565b6040516103089190611f68565b6102fe610354366004611fb6565b610917565b61036c610367366004611fcf565b610944565b6040519015158152602001610308565b6102fe61038a366004611fb6565b6109b1565b61036c61039d366004612018565b600a6020526000908152604090205460ff1681565b6103c56103c0366004612052565b6109d1565b005b6102fe60025481565b6102fe7f000000000000000000000000000000000000000000000000000000000000000081565b61036c610405366004612099565b610ab2565b6104317f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610308565b6103c5610451366004611fb6565b610b92565b6102fe610bf7565b6104857f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610308565b6102fe6104ab366004611f4b565b5060001990565b6103c56104c0366004611fcf565b610c4d565b6103c56104d3366004611fb6565b610d23565b6103c56104e63660046120da565b610d88565b6102fe6104f9366004611fb6565b610e1a565b600c546102fe565b6103c5610514366004612111565b610e25565b6102fe61052736600461213f565b610eed565b6102fe61053a366004611f4b565b60036020526000908152604090205481565b6103c561055a366004612164565b610f01565b61036c7f000000000000000000000000000000000000000000000000000000000000000081565b6103c5610594366004611f4b565b610f8a565b6102fe6105a7366004611f4b565b60056020526000908152604090205481565b600654610485906001600160a01b031681565b6102fe6105da36600461213f565b611074565b610339611088565b6103c56105f5366004611fcf565b611095565b6103c5610608366004611fb6565b6110f7565b61036c61061b366004611fcf565b6111c9565b6102fe61062e366004611fb6565b61122f565b6102fe610641366004612192565b61124e565b61036c6106543660046121c9565b61126b565b6102fe610667366004612192565b611369565b600754610485906001600160a01b031681565b61048561068d366004611f4b565b6008602052600090815260409020546001600160a01b031681565b6102fe6106b6366004611fb6565b61137e565b6102fe6106c9366004611f4b565b61139e565b6103c56106dc366004612210565b6113c0565b6102fe6106ef366004611f4b565b6001600160a01b031660009081526003602052604090205490565b6102fe610718366004612164565b600460209081526000928352604080842090915290825290205481565b61036c61074336600461227e565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61036c6107793660046122b1565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102fe6107b0366004612018565b600b6020526000908152604090205481565b6102fe6107d0366004611fb6565b611604565b6103c56107e3366004611f4b565b61160f565b60006107f261168d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a91906122dd565b610884919061230c565b905090565b600080546108969061231f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c29061231f565b801561090f5780601f106108e45761010080835404028352916020019161090f565b820191906000526020600020905b8154815290600101906020018083116108f257829003601f168201915b505050505081565b600254600090801561093b5761093661092e6107e8565b849083611767565b61093d565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061099f9086815260200190565b60405180910390a35060015b92915050565b600254600090801561093b57610936816109c96107e8565b859190611785565b6109e7336000356001600160e01b0319166117ab565b610a0c5760405162461bcd60e51b8152600401610a0390612359565b60405180910390fd5b8015610a3c576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a63565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa5911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b0e57610ae9838261237f565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b3690849061237f565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206124b383398151915290610b7f9087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bea57610bce336000356001600160e01b0319166117ab565b610bea5760405162461bcd60e51b8152600401610a0390612392565b610bf2611854565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c28576108846118e8565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610ca557610c89336000356001600160e01b0319166117ab565b610ca55760405162461bcd60e51b8152600401610a0390612392565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d155760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d1f8282611982565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d7b57610d5f336000356001600160e01b0319166117ab565b610d7b5760405162461bcd60e51b8152600401610a0390612392565b610d8533826119dc565b50565b610d9e336000356001600160e01b0319166117ab565b610dba5760405162461bcd60e51b8152600401610a0390612359565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006109ab82610917565b610e3b336000356001600160e01b0319166117ab565b610e575760405162461bcd60e51b8152600401610a0390612359565b8015610e86576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610eac565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa5911515815260200190565b6000610ef7611854565b61093d8383611a3e565b610f17336000356001600160e01b0319166117ab565b610f335760405162461bcd60e51b8152600401610a0390612359565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b031633148061101f575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610fde90339030906001600160e01b031960003516906004016123c9565b602060405180830381865afa158015610ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101f91906123f6565b61102857600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061107e611854565b61093d8383611b14565b600180546108969061231f565b7f0000000000000000000000000000000000000000000000000000000000000000156110ed576110d1336000356001600160e01b0319166117ab565b6110ed5760405162461bcd60e51b8152600401610a0390612392565b610d1f82826119dc565b7f00000000000000000000000000000000000000000000000000000000000000001561114f57611133336000356001600160e01b0319166117ab565b61114f5760405162461bcd60e51b8152600401610a0390612392565b7f00000000000000000000000000000000000000000000000000000000000000008111156111bf5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d853382611982565b336000908152600360205260408120805483919083906111ea90849061237f565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206124b38339815191529061099f9086815260200190565b600254600090801561093b576109366112466107e8565b849083611785565b6000611258611854565b611263848484611ba3565b949350505050565b6001600160a01b0380831660009081526008602052604081205490911680156113075760405163b700961360e01b81526001600160a01b0382169063b7009613906112be908890889088906004016123c9565b602060405180830381865afa1580156112db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ff91906123f6565b91505061093d565b6001600160e01b031983166000908152600a602052604090205460ff168061136057506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b6000611373611854565b611263848484611ca7565b600254600090801561093b57610936816113966107e8565b859190611767565b6001600160a01b0381166000908152600360205260408120546109ab90610917565b428410156114105760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a03565b6000600161141c610bf7565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611528573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061155e5750876001600160a01b0316816001600160a01b0316145b61159b5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a03565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006109ab8261137e565b611625336000356001600160e01b0319166117ab565b6116415760405162461bcd60e51b8152600401610a0390612359565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c5460000361169f5750600090565b60006116bd6301e13380600d54426116b7919061237f565b90611de9565b9050600061093d6116d983600c54611dfe90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561173d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176191906122dd565b90611dfe565b600082600019048411830215820261177e57600080fd5b5091020490565b600082600019048411830215820261179c57600080fd5b50910281810615159190040190565b6007546000906001600160a01b03168015801590611835575060405163b700961360e01b81526001600160a01b0382169063b7009613906117f4908790309088906004016123c9565b602060405180830381865afa158015611811573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183591906123f6565b8061126357506006546001600160a01b03858116911614949350505050565b600061185e61168d565b905080156118e15760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156118c857600080fd5b505af11580156118dc573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161191a9190612413565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254611994919061230c565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206124b383398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611a0490849061237f565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206124b3833981519152906020016119d0565b6000611a4983611604565b905080600003611a895760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610a03565b611abe6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611e13565b611ac88282611982565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36109ab565b6000611b1f8361122f565b9050611b566001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611e13565b611b608284611982565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611b07565b6000611bae846109b1565b9050336001600160a01b03831614611c1e576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611c1c57611bf7828261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611c2882826119dc565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611eaf565b6000336001600160a01b03831614611d17576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611d1557611cf0858261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611d2084610e1a565b905080600003611d605760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610a03565b611d6a82856119dc565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611eaf565b600061093d83670de0b6b3a764000084611767565b600061093d8383670de0b6b3a7640000611767565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ea85760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610a03565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611f305760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610a03565b50505050565b6001600160a01b0381168114610d8557600080fd5b600060208284031215611f5d57600080fd5b813561093d81611f36565b600060208083528351808285015260005b81811015611f9557858101830151858201604001528201611f79565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611fc857600080fd5b5035919050565b60008060408385031215611fe257600080fd5b8235611fed81611f36565b946020939093013593505050565b80356001600160e01b03198116811461201357600080fd5b919050565b60006020828403121561202a57600080fd5b61093d82611ffb565b803560ff8116811461201357600080fd5b8015158114610d8557600080fd5b60008060006060848603121561206757600080fd5b61207084612033565b925061207e60208501611ffb565b9150604084013561208e81612044565b809150509250925092565b6000806000606084860312156120ae57600080fd5b83356120b981611f36565b925060208401356120c981611f36565b929592945050506040919091013590565b600080604083850312156120ed57600080fd5b6120f683611ffb565b9150602083013561210681612044565b809150509250929050565b60008060006060848603121561212657600080fd5b833561213181611f36565b925061207e60208501612033565b6000806040838503121561215257600080fd5b82359150602083013561210681611f36565b6000806040838503121561217757600080fd5b823561218281611f36565b9150602083013561210681611f36565b6000806000606084860312156121a757600080fd5b8335925060208401356121b981611f36565b9150604084013561208e81611f36565b6000806000606084860312156121de57600080fd5b83356121e981611f36565b925060208401356121f981611f36565b915061220760408501611ffb565b90509250925092565b600080600080600080600060e0888a03121561222b57600080fd5b873561223681611f36565b9650602088013561224681611f36565b9550604088013594506060880135935061226260808901612033565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561229157600080fd5b61229a83612033565b91506122a860208401611ffb565b90509250929050565b600080604083850312156122c457600080fd5b82356122cf81611f36565b91506122a860208401612033565b6000602082840312156122ef57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109ab576109ab6122f6565b600181811c9082168061233357607f821691505b60208210810361235357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156109ab576109ab6122f6565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561240857600080fd5b815161093d81612044565b600080835481600182811c91508083168061242f57607f831692505b6020808410820361244e57634e487b7160e01b86526022600452602486fd5b8180156124625760018114612477576124a4565b60ff19861689528415158502890196506124a4565b60008a81526020902060005b8681101561249c5781548b820152908501908301612483565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122030118b599f4dc8817ef0ca3ca6b9437760638f0da0ff71ce68cec8964ddb3bc564736f6c63430008140033',
    methodIdentifiers: {
        "DOMAIN_SEPARATOR()": "3644e515",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "asset()": "38d52e0f",
        "authority()": "bf7e214f",
        "balanceOf(address)": "70a08231",
        "burn(address,uint256)": "9dc29fac",
        "burn(uint256)": "42966c68",
        "canCall(address,address,bytes4)": "b7009613",
        "convertToAssets(uint256)": "07a2d13a",
        "convertToShares(uint256)": "c6e6f592",
        "decimals()": "313ce567",
        "deposit(uint256,address)": "6e553f65",
        "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
        "doesUserHaveRole(address,uint8)": "ea7ca276",
        "getRate()": "679aefce",
        "getRolesWithCapability(bytes4)": "ed0d0efb",
        "getTargetCustomAuthority(address)": "c53a3985",
        "getUserRoles(address)": "06a36aee",
        "isCapabilityPublic(bytes4)": "0bade8a4",
        "isCompetitionMode()": "7a8c63b5",
        "maxDeposit(address)": "402d267d",
        "maxMint(address)": "c63d75b6",
        "maxMintAmount()": "239c70ae",
        "maxRedeem(address)": "d905777e",
        "maxWithdraw(address)": "ce96cb77",
        "mint(address,uint256)": "40c10f19",
        "mint(uint256)": "a0712d68",
        "mint(uint256,address)": "94bf804d",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "owner()": "8da5cb5b",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "previewDeposit(uint256)": "ef8b30f7",
        "previewMint(uint256)": "b3d7f6b9",
        "previewRedeem(uint256)": "4cdad506",
        "previewWithdraw(uint256)": "0a28a477",
        "redeem(uint256,address,address)": "ba087652",
        "setAuthority(address)": "7a9e5e4b",
        "setPublicCapability(bytes4,bool)": "4b5159da",
        "setRate(uint256)": "34fcf437",
        "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
        "setTargetCustomAuthority(address,address)": "728b952b",
        "setUserRole(address,uint8,bool)": "67aff484",
        "symbol()": "95d89b41",
        "totalAssets()": "01e1d114",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b",
        "withdraw(uint256,address,address)": "b460af94"
    }
};
