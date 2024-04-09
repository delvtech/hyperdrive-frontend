export const MockERC4626 = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "contract ERC20Mintable",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_symbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_initialRate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_isCompetitionMode",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxMintAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "AuthorityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "PublicCapabilityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "indexed": true,
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "RoleCapabilityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "contract Authority",
                    "name": "authority",
                    "type": "address"
                }
            ],
            "name": "TargetCustomAuthorityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "UserRoleUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "asset",
            "outputs": [
                {
                    "internalType": "contract ERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "authority",
            "outputs": [
                {
                    "internalType": "contract Authority",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                }
            ],
            "name": "canCall",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "convertToAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "convertToShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_assets",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                }
            ],
            "name": "deposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                }
            ],
            "name": "doesRoleHaveCapability",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                }
            ],
            "name": "doesUserHaveRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "name": "getRolesWithCapability",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "getTargetCustomAuthority",
            "outputs": [
                {
                    "internalType": "contract Authority",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "getUserRoles",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "name": "isCapabilityPublic",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isCompetitionMode",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "maxDeposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "maxMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxMintAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "maxRedeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "maxWithdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shares",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "previewDeposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "previewMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "previewRedeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "previewWithdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shares",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "redeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "setAuthority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setPublicCapability",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate_",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setRoleCapability",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "contract Authority",
                    "name": "customAuthority",
                    "type": "address"
                }
            ],
            "name": "setTargetCustomAuthority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setUserRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_assets",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "withdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6101406040523480156200001257600080fd5b5060405162002b9738038062002b97833981016040819052620000359162000315565b823081818a8a8a8181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003d8565b6000620000b1848262000493565b506001620000c0838262000493565b5060ff81166080524660a052620000d66200019b565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9490945542600d55901515610100526101205250620005dd9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001cf91906200055f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024d57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027857600080fd5b81516001600160401b038082111562000295576200029562000250565b604051601f8301601f19908116603f01168101908282118183101715620002c057620002c062000250565b81604052838152602092508683858801011115620002dd57600080fd5b600091505b83821015620003015785820183015181830184015290820190620002e2565b600093810190920192909252949350505050565b600080600080600080600060e0888a0312156200033157600080fd5b87516200033e8162000237565b60208901519097506001600160401b03808211156200035c57600080fd5b6200036a8b838c0162000266565b975060408a01519150808211156200038157600080fd5b50620003908a828b0162000266565b955050606088015193506080880151620003aa8162000237565b60a08901519093508015158114620003c157600080fd5b8092505060c0880151905092959891949750929550565b600060208284031215620003eb57600080fd5b815160ff81168114620003fd57600080fd5b9392505050565b600181811c908216806200041957607f821691505b6020821081036200043a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200048e57600081815260208120601f850160051c81016020861015620004695750805b601f850160051c820191505b818110156200048a5782815560010162000475565b5050505b505050565b81516001600160401b03811115620004af57620004af62000250565b620004c781620004c0845462000404565b8462000440565b602080601f831160018114620004ff5760008415620004e65750858301515b600019600386901b1c1916600185901b1785556200048a565b600085815260208120601f198616915b8281101562000530578886015182559484019460019091019084016200050f565b50858210156200054f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200056f8162000404565b600182811680156200058a5760018114620005a057620005d1565b60ff1984168752821515830287019450620005d1565b8760005260208060002060005b85811015620005c85781548a820152908401908201620005ad565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051610120516125086200068f600039600081816103d501528181610ca7015261115101526000818161056401528181610b9401528181610c4f01528181610d250152818161109701526110f901526000818161046301528181610807015281816116ee0152818161187c01528181611a9601528181611b2e01528181611c800152611dc201526000610c2b01526000610bfb0152600061040f01526125086000f3fe608060405234801561001057600080fd5b50600436106102f15760003560e01c80637a8c63b51161019d578063bf7e214f116100e9578063d905777e116100a2578063ea7ca2761161007c578063ea7ca2761461076b578063ed0d0efb146107a2578063ef8b30f7146107c2578063f2fde38b146107d557600080fd5b8063d905777e146106e1578063dd62ed3e1461070a578063e688747b1461073557600080fd5b8063bf7e214f1461066c578063c53a39851461067f578063c63d75b61461049d578063c6e6f592146106a8578063ce96cb77146106bb578063d505accf146106ce57600080fd5b80639dc29fac11610156578063b3d7f6b911610130578063b3d7f6b914610620578063b460af9414610633578063b700961314610646578063ba0876521461065957600080fd5b80639dc29fac146105e7578063a0712d68146105fa578063a9059cbb1461060d57600080fd5b80637a8c63b51461055f5780637a9e5e4b146105865780637ecebe00146105995780638da5cb5b146105b957806394bf804d146105cc57806395d89b41146105df57600080fd5b806334fcf4371161025c5780634b5159da1161021557806367aff484116101ef57806367aff484146105065780636e553f651461051957806370a082311461052c578063728b952b1461054c57600080fd5b80634b5159da146104d85780634cdad506146104eb578063679aefce146104fe57600080fd5b806334fcf437146104435780633644e5151461045657806338d52e0f1461045e578063402d267d1461049d57806340c10f19146104b257806342966c68146104c557600080fd5b80630bade8a4116102ae5780630bade8a41461038f5780630ea9b75b146103b257806318160ddd146103c7578063239c70ae146103d057806323b872dd146103f7578063313ce5671461040a57600080fd5b806301e1d114146102f657806306a36aee1461031157806306fdde031461033157806307a2d13a14610346578063095ea7b3146103595780630a28a4771461037c575b600080fd5b6102fe6107e8565b6040519081526020015b60405180910390f35b6102fe61031f366004611f4b565b60096020526000908152604090205481565b610339610889565b6040516103089190611f68565b6102fe610354366004611fb6565b610917565b61036c610367366004611fcf565b610944565b6040519015158152602001610308565b6102fe61038a366004611fb6565b6109b1565b61036c61039d366004612018565b600a6020526000908152604090205460ff1681565b6103c56103c0366004612052565b6109d1565b005b6102fe60025481565b6102fe7f000000000000000000000000000000000000000000000000000000000000000081565b61036c610405366004612099565b610ab2565b6104317f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610308565b6103c5610451366004611fb6565b610b92565b6102fe610bf7565b6104857f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610308565b6102fe6104ab366004611f4b565b5060001990565b6103c56104c0366004611fcf565b610c4d565b6103c56104d3366004611fb6565b610d23565b6103c56104e63660046120da565b610d88565b6102fe6104f9366004611fb6565b610e1a565b600c546102fe565b6103c5610514366004612111565b610e25565b6102fe61052736600461213f565b610eed565b6102fe61053a366004611f4b565b60036020526000908152604090205481565b6103c561055a366004612164565b610f01565b61036c7f000000000000000000000000000000000000000000000000000000000000000081565b6103c5610594366004611f4b565b610f8a565b6102fe6105a7366004611f4b565b60056020526000908152604090205481565b600654610485906001600160a01b031681565b6102fe6105da36600461213f565b611074565b610339611088565b6103c56105f5366004611fcf565b611095565b6103c5610608366004611fb6565b6110f7565b61036c61061b366004611fcf565b6111c9565b6102fe61062e366004611fb6565b61122f565b6102fe610641366004612192565b61124e565b61036c6106543660046121c9565b61126b565b6102fe610667366004612192565b611369565b600754610485906001600160a01b031681565b61048561068d366004611f4b565b6008602052600090815260409020546001600160a01b031681565b6102fe6106b6366004611fb6565b61137e565b6102fe6106c9366004611f4b565b61139e565b6103c56106dc366004612210565b6113c0565b6102fe6106ef366004611f4b565b6001600160a01b031660009081526003602052604090205490565b6102fe610718366004612164565b600460209081526000928352604080842090915290825290205481565b61036c61074336600461227e565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61036c6107793660046122b1565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102fe6107b0366004612018565b600b6020526000908152604090205481565b6102fe6107d0366004611fb6565b611604565b6103c56107e3366004611f4b565b61160f565b60006107f261168d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a91906122dd565b610884919061230c565b905090565b600080546108969061231f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c29061231f565b801561090f5780601f106108e45761010080835404028352916020019161090f565b820191906000526020600020905b8154815290600101906020018083116108f257829003601f168201915b505050505081565b600254600090801561093b5761093661092e6107e8565b849083611767565b61093d565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061099f9086815260200190565b60405180910390a35060015b92915050565b600254600090801561093b57610936816109c96107e8565b859190611785565b6109e7336000356001600160e01b0319166117ab565b610a0c5760405162461bcd60e51b8152600401610a0390612359565b60405180910390fd5b8015610a3c576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a63565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa5911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b0e57610ae9838261237f565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b3690849061237f565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206124b383398151915290610b7f9087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bea57610bce336000356001600160e01b0319166117ab565b610bea5760405162461bcd60e51b8152600401610a0390612392565b610bf2611854565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c28576108846118e8565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610ca557610c89336000356001600160e01b0319166117ab565b610ca55760405162461bcd60e51b8152600401610a0390612392565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d155760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d1f8282611982565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d7b57610d5f336000356001600160e01b0319166117ab565b610d7b5760405162461bcd60e51b8152600401610a0390612392565b610d8533826119dc565b50565b610d9e336000356001600160e01b0319166117ab565b610dba5760405162461bcd60e51b8152600401610a0390612359565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006109ab82610917565b610e3b336000356001600160e01b0319166117ab565b610e575760405162461bcd60e51b8152600401610a0390612359565b8015610e86576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610eac565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa5911515815260200190565b6000610ef7611854565b61093d8383611a3e565b610f17336000356001600160e01b0319166117ab565b610f335760405162461bcd60e51b8152600401610a0390612359565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b031633148061101f575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610fde90339030906001600160e01b031960003516906004016123c9565b602060405180830381865afa158015610ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101f91906123f6565b61102857600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061107e611854565b61093d8383611b14565b600180546108969061231f565b7f0000000000000000000000000000000000000000000000000000000000000000156110ed576110d1336000356001600160e01b0319166117ab565b6110ed5760405162461bcd60e51b8152600401610a0390612392565b610d1f82826119dc565b7f00000000000000000000000000000000000000000000000000000000000000001561114f57611133336000356001600160e01b0319166117ab565b61114f5760405162461bcd60e51b8152600401610a0390612392565b7f00000000000000000000000000000000000000000000000000000000000000008111156111bf5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d853382611982565b336000908152600360205260408120805483919083906111ea90849061237f565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206124b38339815191529061099f9086815260200190565b600254600090801561093b576109366112466107e8565b849083611785565b6000611258611854565b611263848484611ba3565b949350505050565b6001600160a01b0380831660009081526008602052604081205490911680156113075760405163b700961360e01b81526001600160a01b0382169063b7009613906112be908890889088906004016123c9565b602060405180830381865afa1580156112db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ff91906123f6565b91505061093d565b6001600160e01b031983166000908152600a602052604090205460ff168061136057506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b6000611373611854565b611263848484611ca7565b600254600090801561093b57610936816113966107e8565b859190611767565b6001600160a01b0381166000908152600360205260408120546109ab90610917565b428410156114105760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a03565b6000600161141c610bf7565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611528573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061155e5750876001600160a01b0316816001600160a01b0316145b61159b5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a03565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006109ab8261137e565b611625336000356001600160e01b0319166117ab565b6116415760405162461bcd60e51b8152600401610a0390612359565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c5460000361169f5750600090565b60006116bd6301e13380600d54426116b7919061237f565b90611de9565b9050600061093d6116d983600c54611dfe90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561173d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176191906122dd565b90611dfe565b600082600019048411830215820261177e57600080fd5b5091020490565b600082600019048411830215820261179c57600080fd5b50910281810615159190040190565b6007546000906001600160a01b03168015801590611835575060405163b700961360e01b81526001600160a01b0382169063b7009613906117f4908790309088906004016123c9565b602060405180830381865afa158015611811573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183591906123f6565b8061126357506006546001600160a01b03858116911614949350505050565b600061185e61168d565b905080156118e15760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156118c857600080fd5b505af11580156118dc573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161191a9190612413565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254611994919061230c565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206124b383398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611a0490849061237f565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206124b3833981519152906020016119d0565b6000611a4983611604565b905080600003611a895760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610a03565b611abe6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611e13565b611ac88282611982565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36109ab565b6000611b1f8361122f565b9050611b566001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611e13565b611b608284611982565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611b07565b6000611bae846109b1565b9050336001600160a01b03831614611c1e576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611c1c57611bf7828261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611c2882826119dc565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611eaf565b6000336001600160a01b03831614611d17576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611d1557611cf0858261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611d2084610e1a565b905080600003611d605760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610a03565b611d6a82856119dc565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611eaf565b600061093d83670de0b6b3a764000084611767565b600061093d8383670de0b6b3a7640000611767565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ea85760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610a03565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611f305760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610a03565b50505050565b6001600160a01b0381168114610d8557600080fd5b600060208284031215611f5d57600080fd5b813561093d81611f36565b600060208083528351808285015260005b81811015611f9557858101830151858201604001528201611f79565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611fc857600080fd5b5035919050565b60008060408385031215611fe257600080fd5b8235611fed81611f36565b946020939093013593505050565b80356001600160e01b03198116811461201357600080fd5b919050565b60006020828403121561202a57600080fd5b61093d82611ffb565b803560ff8116811461201357600080fd5b8015158114610d8557600080fd5b60008060006060848603121561206757600080fd5b61207084612033565b925061207e60208501611ffb565b9150604084013561208e81612044565b809150509250925092565b6000806000606084860312156120ae57600080fd5b83356120b981611f36565b925060208401356120c981611f36565b929592945050506040919091013590565b600080604083850312156120ed57600080fd5b6120f683611ffb565b9150602083013561210681612044565b809150509250929050565b60008060006060848603121561212657600080fd5b833561213181611f36565b925061207e60208501612033565b6000806040838503121561215257600080fd5b82359150602083013561210681611f36565b6000806040838503121561217757600080fd5b823561218281611f36565b9150602083013561210681611f36565b6000806000606084860312156121a757600080fd5b8335925060208401356121b981611f36565b9150604084013561208e81611f36565b6000806000606084860312156121de57600080fd5b83356121e981611f36565b925060208401356121f981611f36565b915061220760408501611ffb565b90509250925092565b600080600080600080600060e0888a03121561222b57600080fd5b873561223681611f36565b9650602088013561224681611f36565b9550604088013594506060880135935061226260808901612033565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561229157600080fd5b61229a83612033565b91506122a860208401611ffb565b90509250929050565b600080604083850312156122c457600080fd5b82356122cf81611f36565b91506122a860208401612033565b6000602082840312156122ef57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109ab576109ab6122f6565b600181811c9082168061233357607f821691505b60208210810361235357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156109ab576109ab6122f6565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561240857600080fd5b815161093d81612044565b600080835481600182811c91508083168061242f57607f831692505b6020808410820361244e57634e487b7160e01b86526022600452602486fd5b8180156124625760018114612477576124a4565b60ff19861689528415158502890196506124a4565b60008a81526020902060005b8681101561249c5781548b820152908501908301612483565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122030118b599f4dc8817ef0ca3ca6b9437760638f0da0ff71ce68cec8964ddb3bc564736f6c63430008140033",
        "sourceMap": "963:3636:132:-:0;;;1215:514;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1526:6;1552:4;1149:6:171;1157:10;1472:6:132;1482:5;1489:7;1290:5:173;1297:7;1306:6;-1:-1:-1;;;;;1306:15:173;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2094:4:172;:12;2101:5;2094:4;:12;:::i;:::-;-1:-1:-1;2116:6:172;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:172;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;;;;;;;1335:14:173;;::::1;;::::0;-1:-1:-1;;682:5:170;:14;;;;;-1:-1:-1;;;;;;682:14:170;;;;;;;;706:9;:22;;;;;;;;;;;;;;;;744:40;;765:10;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:170;;;816:10;;799:40;;;;;-1:-1:-1;;;1574:5:132::2;:20:::0;;;;1619:15:::2;1604:12;:30:::0;1644:38;::::2;;;::::0;1692:30:::2;::::0;-1:-1:-1;963:3636:132;;-1:-1:-1;;;;963:3636:132;5510:446:172;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;6287:25:234;;;;6328:18;;6321:34;;;;5833:14:172;6371:18:234;;;6364:34;5869:13:172;6414:18:234;;;6407:34;5912:4:172;6457:19:234;;;6450:61;6259:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:146:234:-;-1:-1:-1;;;;;104:31:234;;94:42;;84:70;;150:1;147;140:12;84:70;14:146;:::o;165:127::-;226:10;221:3;217:20;214:1;207:31;257:4;254:1;247:15;281:4;278:1;271:15;297:840;351:5;404:3;397:4;389:6;385:17;381:27;371:55;;422:1;419;412:12;371:55;445:13;;-1:-1:-1;;;;;507:10:234;;;504:36;;;520:18;;:::i;:::-;595:2;589:9;563:2;649:13;;-1:-1:-1;;645:22:234;;;669:2;641:31;637:40;625:53;;;693:18;;;713:22;;;690:46;687:72;;;739:18;;:::i;:::-;779:10;775:2;768:22;814:2;806:6;799:18;836:4;826:14;;881:3;876:2;871;863:6;859:15;855:24;852:33;849:53;;;898:1;895;888:12;849:53;920:1;911:10;;930:133;944:2;941:1;938:9;930:133;;;1032:14;;;1028:23;;1022:30;1001:14;;;997:23;;990:63;955:10;;;;930:133;;;1105:1;1083:15;;;1079:24;;;1072:35;;;;1087:6;297:840;-1:-1:-1;;;;297:840:234:o;1142:1165::-;1306:6;1314;1322;1330;1338;1346;1354;1407:3;1395:9;1386:7;1382:23;1378:33;1375:53;;;1424:1;1421;1414:12;1375:53;1456:9;1450:16;1475:46;1515:5;1475:46;:::i;:::-;1589:2;1574:18;;1568:25;1540:5;;-1:-1:-1;;;;;;1642:14:234;;;1639:34;;;1669:1;1666;1659:12;1639:34;1692:61;1745:7;1736:6;1725:9;1721:22;1692:61;:::i;:::-;1682:71;;1799:2;1788:9;1784:18;1778:25;1762:41;;1828:2;1818:8;1815:16;1812:36;;;1844:1;1841;1834:12;1812:36;;1867:63;1922:7;1911:8;1900:9;1896:24;1867:63;:::i;:::-;1857:73;;;1970:2;1959:9;1955:18;1949:25;1939:35;;2019:3;2008:9;2004:19;1998:26;2033:48;2073:7;2033:48;:::i;:::-;2152:3;2137:19;;2131:26;2100:7;;-1:-1:-1;2195:15:234;;2188:23;2176:36;;2166:64;;2226:1;2223;2216:12;2166:64;2249:7;2239:17;;;2296:3;2285:9;2281:19;2275:26;2265:36;;1142:1165;;;;;;;;;;:::o;2312:273::-;2380:6;2433:2;2421:9;2412:7;2408:23;2404:32;2401:52;;;2449:1;2446;2439:12;2401:52;2481:9;2475:16;2531:4;2524:5;2520:16;2513:5;2510:27;2500:55;;2551:1;2548;2541:12;2500:55;2574:5;2312:273;-1:-1:-1;;;2312:273:234:o;2590:380::-;2669:1;2665:12;;;;2712;;;2733:61;;2787:4;2779:6;2775:17;2765:27;;2733:61;2840:2;2832:6;2829:14;2809:18;2806:38;2803:161;;2886:10;2881:3;2877:20;2874:1;2867:31;2921:4;2918:1;2911:15;2949:4;2946:1;2939:15;2803:161;;2590:380;;;:::o;3101:545::-;3203:2;3198:3;3195:11;3192:448;;;3239:1;3264:5;3260:2;3253:17;3309:4;3305:2;3295:19;3379:2;3367:10;3363:19;3360:1;3356:27;3350:4;3346:38;3415:4;3403:10;3400:20;3397:47;;;-1:-1:-1;3438:4:234;3397:47;3493:2;3488:3;3484:12;3481:1;3477:20;3471:4;3467:31;3457:41;;3548:82;3566:2;3559:5;3556:13;3548:82;;;3611:17;;;3592:1;3581:13;3548:82;;;3552:3;;;3192:448;3101:545;;;:::o;3822:1352::-;3942:10;;-1:-1:-1;;;;;3964:30:234;;3961:56;;;3997:18;;:::i;:::-;4026:97;4116:6;4076:38;4108:4;4102:11;4076:38;:::i;:::-;4070:4;4026:97;:::i;:::-;4178:4;;4242:2;4231:14;;4259:1;4254:663;;;;4961:1;4978:6;4975:89;;;-1:-1:-1;5030:19:234;;;5024:26;4975:89;-1:-1:-1;;3779:1:234;3775:11;;;3771:24;3767:29;3757:40;3803:1;3799:11;;;3754:57;5077:81;;4224:944;;4254:663;3048:1;3041:14;;;3085:4;3072:18;;-1:-1:-1;;4290:20:234;;;4408:236;4422:7;4419:1;4416:14;4408:236;;;4511:19;;;4505:26;4490:42;;4603:27;;;;4571:1;4559:14;;;;4438:19;;4408:236;;;4412:3;4672:6;4663:7;4660:19;4657:201;;;4733:19;;;4727:26;-1:-1:-1;;4816:1:234;4812:14;;;4828:3;4808:24;4804:37;4800:42;4785:58;4770:74;;4657:201;-1:-1:-1;;;;;4904:1:234;4888:14;;;4884:22;4871:36;;-1:-1:-1;3822:1352:234:o;5179:844::-;5309:3;5338:1;5371:6;5365:13;5401:36;5427:9;5401:36;:::i;:::-;5456:1;5473:18;;;5500:133;;;;5647:1;5642:356;;;;5466:532;;5500:133;-1:-1:-1;;5533:24:234;;5521:37;;5606:14;;5599:22;5587:35;;5578:45;;;-1:-1:-1;5500:133:234;;5642:356;5673:6;5670:1;5663:17;5703:4;5748:2;5745:1;5735:16;5773:1;5787:165;5801:6;5798:1;5795:13;5787:165;;;5879:14;;5866:11;;;5859:35;5922:16;;;;5816:10;;5787:165;;;5791:3;;;5981:6;5976:3;5972:16;5965:23;;5466:532;-1:-1:-1;6014:3:234;;5179:844;-1:-1:-1;;;;;;5179:844:234:o;6028:489::-;963:3636:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106102f15760003560e01c80637a8c63b51161019d578063bf7e214f116100e9578063d905777e116100a2578063ea7ca2761161007c578063ea7ca2761461076b578063ed0d0efb146107a2578063ef8b30f7146107c2578063f2fde38b146107d557600080fd5b8063d905777e146106e1578063dd62ed3e1461070a578063e688747b1461073557600080fd5b8063bf7e214f1461066c578063c53a39851461067f578063c63d75b61461049d578063c6e6f592146106a8578063ce96cb77146106bb578063d505accf146106ce57600080fd5b80639dc29fac11610156578063b3d7f6b911610130578063b3d7f6b914610620578063b460af9414610633578063b700961314610646578063ba0876521461065957600080fd5b80639dc29fac146105e7578063a0712d68146105fa578063a9059cbb1461060d57600080fd5b80637a8c63b51461055f5780637a9e5e4b146105865780637ecebe00146105995780638da5cb5b146105b957806394bf804d146105cc57806395d89b41146105df57600080fd5b806334fcf4371161025c5780634b5159da1161021557806367aff484116101ef57806367aff484146105065780636e553f651461051957806370a082311461052c578063728b952b1461054c57600080fd5b80634b5159da146104d85780634cdad506146104eb578063679aefce146104fe57600080fd5b806334fcf437146104435780633644e5151461045657806338d52e0f1461045e578063402d267d1461049d57806340c10f19146104b257806342966c68146104c557600080fd5b80630bade8a4116102ae5780630bade8a41461038f5780630ea9b75b146103b257806318160ddd146103c7578063239c70ae146103d057806323b872dd146103f7578063313ce5671461040a57600080fd5b806301e1d114146102f657806306a36aee1461031157806306fdde031461033157806307a2d13a14610346578063095ea7b3146103595780630a28a4771461037c575b600080fd5b6102fe6107e8565b6040519081526020015b60405180910390f35b6102fe61031f366004611f4b565b60096020526000908152604090205481565b610339610889565b6040516103089190611f68565b6102fe610354366004611fb6565b610917565b61036c610367366004611fcf565b610944565b6040519015158152602001610308565b6102fe61038a366004611fb6565b6109b1565b61036c61039d366004612018565b600a6020526000908152604090205460ff1681565b6103c56103c0366004612052565b6109d1565b005b6102fe60025481565b6102fe7f000000000000000000000000000000000000000000000000000000000000000081565b61036c610405366004612099565b610ab2565b6104317f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610308565b6103c5610451366004611fb6565b610b92565b6102fe610bf7565b6104857f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610308565b6102fe6104ab366004611f4b565b5060001990565b6103c56104c0366004611fcf565b610c4d565b6103c56104d3366004611fb6565b610d23565b6103c56104e63660046120da565b610d88565b6102fe6104f9366004611fb6565b610e1a565b600c546102fe565b6103c5610514366004612111565b610e25565b6102fe61052736600461213f565b610eed565b6102fe61053a366004611f4b565b60036020526000908152604090205481565b6103c561055a366004612164565b610f01565b61036c7f000000000000000000000000000000000000000000000000000000000000000081565b6103c5610594366004611f4b565b610f8a565b6102fe6105a7366004611f4b565b60056020526000908152604090205481565b600654610485906001600160a01b031681565b6102fe6105da36600461213f565b611074565b610339611088565b6103c56105f5366004611fcf565b611095565b6103c5610608366004611fb6565b6110f7565b61036c61061b366004611fcf565b6111c9565b6102fe61062e366004611fb6565b61122f565b6102fe610641366004612192565b61124e565b61036c6106543660046121c9565b61126b565b6102fe610667366004612192565b611369565b600754610485906001600160a01b031681565b61048561068d366004611f4b565b6008602052600090815260409020546001600160a01b031681565b6102fe6106b6366004611fb6565b61137e565b6102fe6106c9366004611f4b565b61139e565b6103c56106dc366004612210565b6113c0565b6102fe6106ef366004611f4b565b6001600160a01b031660009081526003602052604090205490565b6102fe610718366004612164565b600460209081526000928352604080842090915290825290205481565b61036c61074336600461227e565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61036c6107793660046122b1565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102fe6107b0366004612018565b600b6020526000908152604090205481565b6102fe6107d0366004611fb6565b611604565b6103c56107e3366004611f4b565b61160f565b60006107f261168d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a91906122dd565b610884919061230c565b905090565b600080546108969061231f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c29061231f565b801561090f5780601f106108e45761010080835404028352916020019161090f565b820191906000526020600020905b8154815290600101906020018083116108f257829003601f168201915b505050505081565b600254600090801561093b5761093661092e6107e8565b849083611767565b61093d565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061099f9086815260200190565b60405180910390a35060015b92915050565b600254600090801561093b57610936816109c96107e8565b859190611785565b6109e7336000356001600160e01b0319166117ab565b610a0c5760405162461bcd60e51b8152600401610a0390612359565b60405180910390fd5b8015610a3c576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a63565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa5911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b0e57610ae9838261237f565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b3690849061237f565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206124b383398151915290610b7f9087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bea57610bce336000356001600160e01b0319166117ab565b610bea5760405162461bcd60e51b8152600401610a0390612392565b610bf2611854565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c28576108846118e8565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610ca557610c89336000356001600160e01b0319166117ab565b610ca55760405162461bcd60e51b8152600401610a0390612392565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d155760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d1f8282611982565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d7b57610d5f336000356001600160e01b0319166117ab565b610d7b5760405162461bcd60e51b8152600401610a0390612392565b610d8533826119dc565b50565b610d9e336000356001600160e01b0319166117ab565b610dba5760405162461bcd60e51b8152600401610a0390612359565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006109ab82610917565b610e3b336000356001600160e01b0319166117ab565b610e575760405162461bcd60e51b8152600401610a0390612359565b8015610e86576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610eac565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa5911515815260200190565b6000610ef7611854565b61093d8383611a3e565b610f17336000356001600160e01b0319166117ab565b610f335760405162461bcd60e51b8152600401610a0390612359565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b031633148061101f575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610fde90339030906001600160e01b031960003516906004016123c9565b602060405180830381865afa158015610ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101f91906123f6565b61102857600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061107e611854565b61093d8383611b14565b600180546108969061231f565b7f0000000000000000000000000000000000000000000000000000000000000000156110ed576110d1336000356001600160e01b0319166117ab565b6110ed5760405162461bcd60e51b8152600401610a0390612392565b610d1f82826119dc565b7f00000000000000000000000000000000000000000000000000000000000000001561114f57611133336000356001600160e01b0319166117ab565b61114f5760405162461bcd60e51b8152600401610a0390612392565b7f00000000000000000000000000000000000000000000000000000000000000008111156111bf5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a03565b610d853382611982565b336000908152600360205260408120805483919083906111ea90849061237f565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206124b38339815191529061099f9086815260200190565b600254600090801561093b576109366112466107e8565b849083611785565b6000611258611854565b611263848484611ba3565b949350505050565b6001600160a01b0380831660009081526008602052604081205490911680156113075760405163b700961360e01b81526001600160a01b0382169063b7009613906112be908890889088906004016123c9565b602060405180830381865afa1580156112db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ff91906123f6565b91505061093d565b6001600160e01b031983166000908152600a602052604090205460ff168061136057506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b6000611373611854565b611263848484611ca7565b600254600090801561093b57610936816113966107e8565b859190611767565b6001600160a01b0381166000908152600360205260408120546109ab90610917565b428410156114105760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a03565b6000600161141c610bf7565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611528573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061155e5750876001600160a01b0316816001600160a01b0316145b61159b5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a03565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006109ab8261137e565b611625336000356001600160e01b0319166117ab565b6116415760405162461bcd60e51b8152600401610a0390612359565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c5460000361169f5750600090565b60006116bd6301e13380600d54426116b7919061237f565b90611de9565b9050600061093d6116d983600c54611dfe90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561173d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176191906122dd565b90611dfe565b600082600019048411830215820261177e57600080fd5b5091020490565b600082600019048411830215820261179c57600080fd5b50910281810615159190040190565b6007546000906001600160a01b03168015801590611835575060405163b700961360e01b81526001600160a01b0382169063b7009613906117f4908790309088906004016123c9565b602060405180830381865afa158015611811573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183591906123f6565b8061126357506006546001600160a01b03858116911614949350505050565b600061185e61168d565b905080156118e15760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156118c857600080fd5b505af11580156118dc573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161191a9190612413565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254611994919061230c565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206124b383398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611a0490849061237f565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206124b3833981519152906020016119d0565b6000611a4983611604565b905080600003611a895760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610a03565b611abe6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611e13565b611ac88282611982565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36109ab565b6000611b1f8361122f565b9050611b566001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611e13565b611b608284611982565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611b07565b6000611bae846109b1565b9050336001600160a01b03831614611c1e576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611c1c57611bf7828261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611c2882826119dc565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611eaf565b6000336001600160a01b03831614611d17576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611d1557611cf0858261237f565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611d2084610e1a565b905080600003611d605760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610a03565b611d6a82856119dc565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a461093d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611eaf565b600061093d83670de0b6b3a764000084611767565b600061093d8383670de0b6b3a7640000611767565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ea85760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610a03565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611f305760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610a03565b50505050565b6001600160a01b0381168114610d8557600080fd5b600060208284031215611f5d57600080fd5b813561093d81611f36565b600060208083528351808285015260005b81811015611f9557858101830151858201604001528201611f79565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611fc857600080fd5b5035919050565b60008060408385031215611fe257600080fd5b8235611fed81611f36565b946020939093013593505050565b80356001600160e01b03198116811461201357600080fd5b919050565b60006020828403121561202a57600080fd5b61093d82611ffb565b803560ff8116811461201357600080fd5b8015158114610d8557600080fd5b60008060006060848603121561206757600080fd5b61207084612033565b925061207e60208501611ffb565b9150604084013561208e81612044565b809150509250925092565b6000806000606084860312156120ae57600080fd5b83356120b981611f36565b925060208401356120c981611f36565b929592945050506040919091013590565b600080604083850312156120ed57600080fd5b6120f683611ffb565b9150602083013561210681612044565b809150509250929050565b60008060006060848603121561212657600080fd5b833561213181611f36565b925061207e60208501612033565b6000806040838503121561215257600080fd5b82359150602083013561210681611f36565b6000806040838503121561217757600080fd5b823561218281611f36565b9150602083013561210681611f36565b6000806000606084860312156121a757600080fd5b8335925060208401356121b981611f36565b9150604084013561208e81611f36565b6000806000606084860312156121de57600080fd5b83356121e981611f36565b925060208401356121f981611f36565b915061220760408501611ffb565b90509250925092565b600080600080600080600060e0888a03121561222b57600080fd5b873561223681611f36565b9650602088013561224681611f36565b9550604088013594506060880135935061226260808901612033565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561229157600080fd5b61229a83612033565b91506122a860208401611ffb565b90509250929050565b600080604083850312156122c457600080fd5b82356122cf81611f36565b91506122a860208401612033565b6000602082840312156122ef57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109ab576109ab6122f6565b600181811c9082168061233357607f821691505b60208210810361235357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156109ab576109ab6122f6565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561240857600080fd5b815161093d81612044565b600080835481600182811c91508083168061242f57607f831692505b6020808410820361244e57634e487b7160e01b86526022600452602486fd5b8180156124625760018114612477576124a4565b60ff19861689528415158502890196506124a4565b60008a81526020902060005b8681101561249c5781548b820152908501908301612483565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122030118b599f4dc8817ef0ca3ca6b9437760638f0da0ff71ce68cec8964ddb3bc564736f6c63430008140033",
        "sourceMap": "963:3636:132:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3566:140;;;:::i;:::-;;;160:25:234;;;148:2;133:18;3566:140:132;;;;;;;;1622:47:171;;;;;;:::i;:::-;;;;;;;;;;;;;;1031:18:172;;;:::i;:::-;;;;;;;:::i;4463:257:173:-;;;;;;:::i;:::-;;:::i;2461:211:172:-;;;;;;:::i;:::-;;:::i;:::-;;;1989:14:234;;1982:22;1964:41;;1952:2;1937:18;2461:211:172;1824:187:234;5114:255:173;;;;;;:::i;:::-;;:::i;1676:49:171:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:172;;;;;;1170:38:132;;;;;3057:592:172;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3688:4:234;3676:17;;;3658:36;;3646:2;3631:18;1083:31:172;3516:184:234;3730:122:132;;;;;;:::i;:::-;;:::i;5327:177:172:-;;;:::i;1149:28:173:-;;;;;;;;-1:-1:-1;;;;;3884:32:234;;;3866:51;;3854:2;3839:18;1149:28:173;3705:218:234;5696:108:173;;;;;;:::i;:::-;-1:-1:-1;;;5780:17:173;5696:108;2204:233:132;;;;;;:::i;:::-;;:::i;2443:111::-;;;;;;:::i;:::-;;:::i;3448:210:171:-;;;;;;:::i;:::-;;:::i;5375:124:173:-;;;;;;:::i;:::-;;:::i;3858:80:132:-;3926:5;;3858:80;;3853:337:171;;;;;;:::i;:::-;;:::i;2744:185:132:-;;;;;;:::i;:::-;;:::i;1337:44:172:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:171;;;;;;:::i;:::-;;:::i;1125:39:132:-;;;;;1523:434:170;;;;;;:::i;:::-;;:::i;1751:41:172:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:170;;;;;-1:-1:-1;;;;;562:20:170;;;2935:179:132;;;;;;:::i;:::-;;:::i;1056:20:172:-;;;:::i;2560:155:132:-;;;;;;:::i;:::-;;:::i;2009:189::-;;;;;;:::i;:::-;;:::i;2678:373:172:-;;;;;;:::i;:::-;;:::i;4857:251:173:-;;;;;;:::i;:::-;;:::i;3120:219:132:-;;;;;;:::i;:::-;;:::i;2336:465:171:-;;;;;;:::i;:::-;;:::i;3345:215:132:-;;;;;;:::i;:::-;;:::i;589:26:170:-;;;;;-1:-1:-1;;;;;589:26:170;;;1369:61:171;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:171;;;4200:257:173;;;;;;:::i;:::-;;:::i;5921:131::-;;;;;;:::i;:::-;;:::i;3838:1483:172:-;;;;;;:::i;:::-;;:::i;6058:112:173:-;;;;;;:::i;:::-;-1:-1:-1;;;;;6147:16:173;6121:7;6147:16;;;:9;:16;;;;;;;6058:112;1388:64:172;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:171;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:171;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:171;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;4726:125:173;;;;;;:::i;:::-;;:::i;1963:164:170:-;;;;;;:::i;:::-;;:::i;3566:140:132:-;3619:7;3678:21;:19;:21::i;:::-;3645:30;;-1:-1:-1;;;3645:30:132;;3669:4;3645:30;;;3866:51:234;3645:5:132;-1:-1:-1;;;;;3645:15:132;;;;3839:18:234;;3645:30:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:54;;;;:::i;:::-;3638:61;;3566:140;:::o;1031:18:172:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4463:257:173:-;4569:11;;4533:7;;4650:11;;:63;;4673:40;4691:13;:11;:13::i;:::-;4673:6;;4706;4673:17;:40::i;:::-;4650:63;;;4664:6;4650:63;4643:70;4463:257;-1:-1:-1;;;4463:257:173:o;2461:211:172:-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:172;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;160:25:234;;148:2;133:18;;14:177;2606:37:172;;;;;;;;-1:-1:-1;2661:4:172;2461:211;;;;;:::o;5114:255:173:-;5220:11;;5184:7;;5301:11;;:61;;5324:38;5340:6;5348:13;:11;:13::i;:::-;5324:6;;:38;:15;:38::i;4390:396:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;;;;;;;;;4535:7:171::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:171;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:171;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:171::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1989:14:234::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;4730:49:171::1;;;;;;;;4390:396:::0;;;:::o;3057:592:172:-;-1:-1:-1;;;;;3209:15:172;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:172;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:172;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:172;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:172;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:172;;;3562:6;160:25:234;;148:2;133:18;;14:177;3594:26:172;;;;;;;;-1:-1:-1;3638:4:172;;3057:592;-1:-1:-1;;;;3057:592:172:o;3730:122:132:-;1790:17;1786:167;;;1848:33;1861:10;1873:7;;-1:-1:-1;;;;;;1873:7:132;1848:12;:33::i;:::-;1823:119;;;;-1:-1:-1;;;1823:119:132;;;;;;;:::i;:::-;3812:9:::1;:7;:9::i;:::-;3831:5;:14:::0;3730:122::o;5327:177:172:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;5410:87::-;-1:-1:-1;5446:24:172;;5327:177::o;2204:233:132:-;1790:17;1786:167;;;1848:33;1861:10;1873:7;;-1:-1:-1;;;;;;1873:7:132;1848:12;:33::i;:::-;1823:119;;;;-1:-1:-1;;;1823:119:132;;;;;;;:::i;:::-;2344:13:::1;2334:6;:23;;2326:68;;;::::0;-1:-1:-1;;;2326:68:132;;10648:2:234;2326:68:132::1;::::0;::::1;10630:21:234::0;;;10667:18;;;10660:30;10726:34;10706:18;;;10699:62;10778:18;;2326:68:132::1;10446:356:234::0;2326:68:132::1;2404:26;2410:11;2423:6;2404:5;:26::i;:::-;2204:233:::0;;:::o;2443:111::-;1790:17;1786:167;;;1848:33;1861:10;1873:7;;-1:-1:-1;;;;;;1873:7:132;1848:12;:33::i;:::-;1823:119;;;;-1:-1:-1;;;1823:119:132;;;;;;;:::i;:::-;2522:25:::1;2528:10;2540:6;2522:5;:25::i;:::-;2443:111:::0;:::o;3448:210:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:171;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:171::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1964:41:234;;;3606:45:171::1;::::0;1937:18:234;3606:45:171::1;;;;;;;3448:210:::0;;:::o;5375:124:173:-;5443:7;5469:23;5485:6;5469:15;:23::i;3853:337:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;3986:7:171::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:171;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:171;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:171::1;;4175:7;4147:36;;;;1989:14:234::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;2744:185:132;2844:7;2863:9;:7;:9::i;:::-;2889:33;2903:7;2912:9;2889:13;:33::i;3006:241:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:171;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:171::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:170:-;1794:5;;-1:-1:-1;;;;;1794:5:170;1780:10;:19;;:76;;-1:-1:-1;1803:9:170;;:53;;-1:-1:-1;;;1803:53:170;;-1:-1:-1;;;;;1803:9:170;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:170;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:170;-1:-1:-1;;;;;1868:24:170;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:170;1523:434;:::o;2935:179:132:-;3032:7;3051:9;:7;:9::i;:::-;3077:30;3088:7;3097:9;3077:10;:30::i;1056:20:172:-;;;;;;;:::i;2560:155:132:-;1790:17;1786:167;;;1848:33;1861:10;1873:7;;-1:-1:-1;;;;;;1873:7:132;1848:12;:33::i;:::-;1823:119;;;;-1:-1:-1;;;1823:119:132;;;;;;;:::i;:::-;2682:26:::1;2688:11;2701:6;2682:5;:26::i;2009:189::-:0;1790:17;1786:167;;;1848:33;1861:10;1873:7;;-1:-1:-1;;;;;;1873:7:132;1848:12;:33::i;:::-;1823:119;;;;-1:-1:-1;;;1823:119:132;;;;;;;:::i;:::-;2106:13:::1;2096:6;:23;;2088:68;;;::::0;-1:-1:-1;;;2088:68:132;;10648:2:234;2088:68:132::1;::::0;::::1;10630:21:234::0;;;10667:18;;;10660:30;10726:34;10706:18;;;10699:62;10778:18;;2088:68:132::1;10446:356:234::0;2088:68:132::1;2166:25;2172:10;2184:6;2166:5;:25::i;2678:373:172:-:0;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:172;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:172;;;2958:6;160:25:234;;148:2;133:18;;14:177;4857:251:173;4959:11;;4923:7;;5040:11;;:61;;5063:38;5079:13;:11;:13::i;:::-;5063:6;;5094;5063:15;:38::i;3120:219:132:-;3245:7;3264:9;:7;:9::i;:::-;3290:42;3305:7;3314:9;3325:6;3290:14;:42::i;:::-;3283:49;3120:219;-1:-1:-1;;;;3120:219:132:o;2336:465:171:-;-1:-1:-1;;;;;2515:32:171;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:171;;-1:-1:-1;;;;;2609:23:171;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:171;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:171;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:171;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:171:o;3345:215:132:-;3468:7;3487:9;:7;:9::i;:::-;3513:40;3526:7;3535:9;3546:6;3513:12;:40::i;4200:257:173:-;4306:11;;4270:7;;4387:11;;:63;;4410:40;4428:6;4436:13;:11;:13::i;:::-;4410:6;;:40;:17;:40::i;5921:131::-;-1:-1:-1;;;;;6028:16:173;;5986:7;6028:16;;;:9;:16;;;;;;6012:33;;:15;:33::i;3838:1483:172:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:172;;11664:2:234;4037:63:172;;;11646:21:234;11703:2;11683:18;;;11676:30;11742:25;11722:18;;;11715:53;11785:18;;4037:63:172;11462:347:234;4037:63:172;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:172;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;12101:25:234;12180:18;;;12173:43;;;;12252:15;;;12232:18;;;12225:43;12284:18;;;12277:34;;;12327:19;;;12320:35;;;;12371:19;;;;12364:35;;;4511:449:172;;;;;;;;;;12073:19:234;;;4511:449:172;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:172;;;12668:27:234;12711:11;;;12704:27;;;;12747:12;;;12740:28;;;;12784:12;;4350:658:172;;;-1:-1:-1;;4350:658:172;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;13034:25:234;13107:4;13095:17;;13075:18;;;13068:45;13129:18;;;13122:34;;;13172:18;;;13165:34;;;13006:19;;4292:805:172;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:172;;-1:-1:-1;;4292:805:172;;;-1:-1:-1;;;;;;;5120:30:172;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:172;:16;-1:-1:-1;;;;;5154:25:172;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:172;;13412:2:234;5112:86:172;;;13394:21:234;13451:2;13431:18;;;13424:30;-1:-1:-1;;;13470:18:234;;;13463:44;13524:18;;5112:86:172;13210:338:234;5112:86:172;-1:-1:-1;;;;;5213:27:172;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;160:25:234;;;5213:36:172;;5283:31;;;;;133:18:234;5283:31:172;;;;;;;3838:1483;;;;;;;:::o;4726:125:173:-;4795:7;4821:23;4837:6;4821:15;:23::i;1963:164:170:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:170::1;-1:-1:-1::0;;;;;2046:16:170;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:170::1;1963:164:::0;:::o;4171:426:132:-;4225:7;4248:5;;4257:1;4248:10;4244:49;;-1:-1:-1;4281:1:132;;4171:426::o;4244:49::-;4356:19;4378:72;4432:8;4397:12;;4379:15;:30;;;;:::i;:::-;4378:40;;:72::i;:::-;4356:94;;4460:15;4478:88;4530:26;4544:11;4530:5;;:13;;:26;;;;:::i;:::-;4478:30;;-1:-1:-1;;;4478:30:132;;4502:4;4478:30;;;3866:51:234;4478:5:132;-1:-1:-1;;;;;4478:15:132;;;;3839:18:234;;4478:30:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:38;;:88::i;1564:526:174:-;1680:9;1928:1;-1:-1:-1;;1911:19:174;1908:1;1905:26;1902:1;1898:34;1891:42;1878:11;1874:60;1864:116;;1964:1;1961;1954:12;1864:116;-1:-1:-1;2051:9:174;;2047:27;;1564:526::o;2096:672::-;2210:9;2458:1;-1:-1:-1;;2441:19:174;2438:1;2435:26;2432:1;2428:34;2421:42;2408:11;2404:60;2394:116;;2494:1;2491;2484:12;2394:116;-1:-1:-1;2728:9:174;;2691:27;;;2688:34;;2724:27;;;2684:68;;2096:672::o;977:540:170:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:170;1415:27;;;;;:77;;-1:-1:-1;1446:46:170;;-1:-1:-1;;;1446:46:170;;-1:-1:-1;;;;;1446:12:170;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:170;;-1:-1:-1;;;;;1497:13:170;;;1505:5;;1497:13;1407:103;977:540;-1:-1:-1;;;;977:540:170:o;3944:221:132:-;3982:16;4001:21;:19;:21::i;:::-;3982:40;-1:-1:-1;4036:12:132;;4032:87;;4064:44;;-1:-1:-1;;;4064:44:132;;;;;160:25:234;;;4086:5:132;-1:-1:-1;;;;;4064:34:132;;;;133:18:234;;4064:44:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4032:87;-1:-1:-1;4143:15:132;4128:12;:30;3944:221::o;5510:446:172:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;15079:25:234;;;;15120:18;;15113:34;;;;5833:14:172;15163:18:234;;;15156:34;5869:13:172;15206:18:234;;;15199:34;5912:4:172;15249:19:234;;;15242:61;15051:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;6150:325::-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:172;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;160:25:234;;;-1:-1:-1;;;;;;;;;;;6436:32:172;133:18:234;6436:32:172;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:172;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:172;:21;;;;;;;6768:34;;160:25:234;;;-1:-1:-1;;;;;;;6768:34:172;;;-1:-1:-1;;;;;;;;;;;6768:34:172;148:2:234;133:18;6768:34:172;14:177:234;1550:516:173;1625:14;1744:22;1759:6;1744:14;:22::i;:::-;1735:31;;;1771:1;1734:38;1726:62;;;;-1:-1:-1;;;1726:62:173;;15516:2:234;1726:62:173;;;15498:21:234;15555:2;15535:18;;;15528:30;-1:-1:-1;;;15574:18:234;;;15567:41;15625:18;;1726:62:173;15314:335:234;1726:62:173;1868:57;-1:-1:-1;;;;;1868:5:173;:22;1891:10;1911:4;1918:6;1868:22;:57::i;:::-;1936:23;1942:8;1952:6;1936:5;:23::i;:::-;1975:45;;;15828:25:234;;;15884:2;15869:18;;15862:34;;;-1:-1:-1;;;;;1975:45:173;;;1983:10;;1975:45;;15801:18:234;1975:45:173;;;;;;;;2031:28;2204:233:132;2072:467:173;2144:14;2179:19;2191:6;2179:11;:19::i;:::-;2170:28;-1:-1:-1;2341:57:173;-1:-1:-1;;;;;2341:5:173;:22;2364:10;2384:4;2170:28;2341:22;:57::i;:::-;2409:23;2415:8;2425:6;2409:5;:23::i;:::-;2448:45;;;15828:25:234;;;15884:2;15869:18;;15862:34;;;-1:-1:-1;;;;;2448:45:173;;;2456:10;;2448:45;;15801:18:234;2448:45:173;15654:248:234;2545:679:173;2666:14;2701:23;2717:6;2701:15;:23::i;:::-;2692:32;-1:-1:-1;2806:10:173;-1:-1:-1;;;;;2806:19:173;;;2802:228;;-1:-1:-1;;;;;2859:16:173;;2841:15;2859:16;;;:9;:16;;;;;;;;2876:10;2859:28;;;;;;;;-1:-1:-1;;2942:28:173;;2938:81;;3003:16;3013:6;3003:7;:16;:::i;:::-;-1:-1:-1;;;;;2972:16:173;;;;;;:9;:16;;;;;;;;2989:10;2972:28;;;;;;;:47;2938:81;2827:203;2802:228;3081:20;3087:5;3094:6;3081:5;:20::i;:::-;3117:53;;;15828:25:234;;;15884:2;15869:18;;15862:34;;;-1:-1:-1;;;;;3117:53:173;;;;;;;;3126:10;;3117:53;;15801:18:234;3117:53:173;;;;;;;3181:36;-1:-1:-1;;;;;3181:5:173;:18;3200:8;3210:6;3181:18;:36::i;3230:713::-;3349:14;3379:10;-1:-1:-1;;;;;3379:19:173;;;3375:228;;-1:-1:-1;;;;;3432:16:173;;3414:15;3432:16;;;:9;:16;;;;;;;;3449:10;3432:28;;;;;;;;-1:-1:-1;;3515:28:173;;3511:81;;3576:16;3586:6;3576:7;:16;:::i;:::-;-1:-1:-1;;;;;3545:16:173;;;;;;:9;:16;;;;;;;;3562:10;3545:28;;;;;;;:47;3511:81;3400:203;3375:228;3705:21;3719:6;3705:13;:21::i;:::-;3696:30;;;3731:1;3695:37;3687:61;;;;-1:-1:-1;;;3687:61:173;;16109:2:234;3687:61:173;;;16091:21:234;16148:2;16128:18;;;16121:30;-1:-1:-1;;;16167:18:234;;;16160:41;16218:18;;3687:61:173;15907:335:234;3687:61:173;3800:20;3806:5;3813:6;3800:5;:20::i;:::-;3836:53;;;15828:25:234;;;15884:2;15869:18;;15862:34;;;-1:-1:-1;;;;;3836:53:173;;;;;;;;3845:10;;3836:53;;15801:18:234;3836:53:173;;;;;;;3900:36;-1:-1:-1;;;;;3900:5:173;:18;3919:8;3929:6;3900:18;:36::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1328:1782:175:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:175;1752:93;-1:-1:-1;;;;;1896:4:175;1892:53;1888:1;1869:17;1865:25;1858:88;-1:-1:-1;;;;;2038:2:175;2034:51;2029:2;2010:17;2006:26;1999:87;2172:6;2167:2;2148:17;2144:26;2137:42;3026:2;3023:1;3018:3;2999:17;2996:1;2989:5;2982;2977:52;2545:16;2538:24;2532:2;2514:16;2511:24;2507:1;2503;2497:8;2494:15;2490:46;2487:76;2287:756;2276:767;;;3071:7;3063:40;;;;-1:-1:-1;;;3063:40:175;;16449:2:234;3063:40:175;;;16431:21:234;16488:2;16468:18;;;16461:30;-1:-1:-1;;;16507:18:234;;;16500:50;16567:18;;3063:40:175;16247:344:234;3063:40:175;1456:1654;1328:1782;;;;:::o;3116:1607::-;3228:12;3398:4;3392:11;-1:-1:-1;;;3521:17:175;3514:93;-1:-1:-1;;;;;3658:2:175;3654:51;3650:1;3631:17;3627:25;3620:86;3792:6;3787:2;3768:17;3764:26;3757:42;4644:2;4641:1;4637:2;4618:17;4615:1;4608:5;4601;4596:51;4165:16;4158:24;4152:2;4134:16;4131:24;4127:1;4123;4117:8;4114:15;4110:46;4107:76;3907:754;3896:765;;;4689:7;4681:35;;;;-1:-1:-1;;;4681:35:175;;16798:2:234;4681:35:175;;;16780:21:234;16837:2;16817:18;;;16810:30;-1:-1:-1;;;16856:18:234;;;16849:45;16911:18;;4681:35:175;16596:339:234;4681:35:175;3218:1505;3116:1607;;;:::o;196:131:234:-;-1:-1:-1;;;;;271:31:234;;261:42;;251:70;;317:1;314;307:12;332:247;391:6;444:2;432:9;423:7;419:23;415:32;412:52;;;460:1;457;450:12;412:52;499:9;486:23;518:31;543:5;518:31;:::i;766:548::-;878:4;907:2;936;925:9;918:21;968:6;962:13;1011:6;1006:2;995:9;991:18;984:34;1036:1;1046:140;1060:6;1057:1;1054:13;1046:140;;;1155:14;;;1151:23;;1145:30;1121:17;;;1140:2;1117:26;1110:66;1075:10;;1046:140;;;1050:3;1235:1;1230:2;1221:6;1210:9;1206:22;1202:31;1195:42;1305:2;1298;1294:7;1289:2;1281:6;1277:15;1273:29;1262:9;1258:45;1254:54;1246:62;;;;766:548;;;;:::o;1319:180::-;1378:6;1431:2;1419:9;1410:7;1406:23;1402:32;1399:52;;;1447:1;1444;1437:12;1399:52;-1:-1:-1;1470:23:234;;1319:180;-1:-1:-1;1319:180:234:o;1504:315::-;1572:6;1580;1633:2;1621:9;1612:7;1608:23;1604:32;1601:52;;;1649:1;1646;1639:12;1601:52;1688:9;1675:23;1707:31;1732:5;1707:31;:::i;:::-;1757:5;1809:2;1794:18;;;;1781:32;;-1:-1:-1;;;1504:315:234:o;2016:173::-;2083:20;;-1:-1:-1;;;;;;2132:32:234;;2122:43;;2112:71;;2179:1;2176;2169:12;2112:71;2016:173;;;:::o;2194:184::-;2252:6;2305:2;2293:9;2284:7;2280:23;2276:32;2273:52;;;2321:1;2318;2311:12;2273:52;2344:28;2362:9;2344:28;:::i;2383:156::-;2449:20;;2509:4;2498:16;;2488:27;;2478:55;;2529:1;2526;2519:12;2544:118;2630:5;2623:13;2616:21;2609:5;2606:32;2596:60;;2652:1;2649;2642:12;2667:383;2738:6;2746;2754;2807:2;2795:9;2786:7;2782:23;2778:32;2775:52;;;2823:1;2820;2813:12;2775:52;2846:27;2863:9;2846:27;:::i;:::-;2836:37;;2892;2925:2;2914:9;2910:18;2892:37;:::i;:::-;2882:47;;2979:2;2968:9;2964:18;2951:32;2992:28;3014:5;2992:28;:::i;:::-;3039:5;3029:15;;;2667:383;;;;;:::o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:234;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:234;3486:18;;;;3473:32;;3055:456::o;3928:313::-;3992:6;4000;4053:2;4041:9;4032:7;4028:23;4024:32;4021:52;;;4069:1;4066;4059:12;4021:52;4092:28;4110:9;4092:28;:::i;:::-;4082:38;;4170:2;4159:9;4155:18;4142:32;4183:28;4205:5;4183:28;:::i;:::-;4230:5;4220:15;;;3928:313;;;;;:::o;4246:452::-;4318:6;4326;4334;4387:2;4375:9;4366:7;4362:23;4358:32;4355:52;;;4403:1;4400;4393:12;4355:52;4442:9;4429:23;4461:31;4486:5;4461:31;:::i;:::-;4511:5;-1:-1:-1;4535:36:234;4567:2;4552:18;;4535:36;:::i;4703:315::-;4771:6;4779;4832:2;4820:9;4811:7;4807:23;4803:32;4800:52;;;4848:1;4845;4838:12;4800:52;4884:9;4871:23;4861:33;;4944:2;4933:9;4929:18;4916:32;4957:31;4982:5;4957:31;:::i;5023:407::-;5110:6;5118;5171:2;5159:9;5150:7;5146:23;5142:32;5139:52;;;5187:1;5184;5177:12;5139:52;5226:9;5213:23;5245:31;5270:5;5245:31;:::i;:::-;5295:5;-1:-1:-1;5352:2:234;5337:18;;5324:32;5365:33;5324:32;5365:33;:::i;5914:456::-;5991:6;5999;6007;6060:2;6048:9;6039:7;6035:23;6031:32;6028:52;;;6076:1;6073;6066:12;6028:52;6112:9;6099:23;6089:33;;6172:2;6161:9;6157:18;6144:32;6185:31;6210:5;6185:31;:::i;:::-;6235:5;-1:-1:-1;6292:2:234;6277:18;;6264:32;6305:33;6264:32;6305:33;:::i;6375:460::-;6451:6;6459;6467;6520:2;6508:9;6499:7;6495:23;6491:32;6488:52;;;6536:1;6533;6526:12;6488:52;6575:9;6562:23;6594:31;6619:5;6594:31;:::i;:::-;6644:5;-1:-1:-1;6701:2:234;6686:18;;6673:32;6714:33;6673:32;6714:33;:::i;:::-;6766:7;-1:-1:-1;6792:37:234;6825:2;6810:18;;6792:37;:::i;:::-;6782:47;;6375:460;;;;;:::o;7067:734::-;7178:6;7186;7194;7202;7210;7218;7226;7279:3;7267:9;7258:7;7254:23;7250:33;7247:53;;;7296:1;7293;7286:12;7247:53;7335:9;7322:23;7354:31;7379:5;7354:31;:::i;:::-;7404:5;-1:-1:-1;7461:2:234;7446:18;;7433:32;7474:33;7433:32;7474:33;:::i;:::-;7526:7;-1:-1:-1;7580:2:234;7565:18;;7552:32;;-1:-1:-1;7631:2:234;7616:18;;7603:32;;-1:-1:-1;7654:37:234;7686:3;7671:19;;7654:37;:::i;:::-;7644:47;;7738:3;7727:9;7723:19;7710:33;7700:43;;7790:3;7779:9;7775:19;7762:33;7752:43;;7067:734;;;;;;;;;;:::o;8199:254::-;8264:6;8272;8325:2;8313:9;8304:7;8300:23;8296:32;8293:52;;;8341:1;8338;8331:12;8293:52;8364:27;8381:9;8364:27;:::i;:::-;8354:37;;8410;8443:2;8432:9;8428:18;8410:37;:::i;:::-;8400:47;;8199:254;;;;;:::o;8458:317::-;8524:6;8532;8585:2;8573:9;8564:7;8560:23;8556:32;8553:52;;;8601:1;8598;8591:12;8553:52;8640:9;8627:23;8659:31;8684:5;8659:31;:::i;:::-;8709:5;-1:-1:-1;8733:36:234;8765:2;8750:18;;8733:36;:::i;8780:184::-;8850:6;8903:2;8891:9;8882:7;8878:23;8874:32;8871:52;;;8919:1;8916;8909:12;8871:52;-1:-1:-1;8942:16:234;;8780:184;-1:-1:-1;8780:184:234:o;8969:127::-;9030:10;9025:3;9021:20;9018:1;9011:31;9061:4;9058:1;9051:15;9085:4;9082:1;9075:15;9101:125;9166:9;;;9187:10;;;9184:36;;;9200:18;;:::i;9231:380::-;9310:1;9306:12;;;;9353;;;9374:61;;9428:4;9420:6;9416:17;9406:27;;9374:61;9481:2;9473:6;9470:14;9450:18;9447:38;9444:161;;9527:10;9522:3;9518:20;9515:1;9508:31;9562:4;9559:1;9552:15;9590:4;9587:1;9580:15;9444:161;;9231:380;;;:::o;9616:336::-;9818:2;9800:21;;;9857:2;9837:18;;;9830:30;-1:-1:-1;;;9891:2:234;9876:18;;9869:42;9943:2;9928:18;;9616:336::o;9957:128::-;10024:9;;;10045:11;;;10042:37;;;10059:18;;:::i;10090:351::-;10292:2;10274:21;;;10331:2;10311:18;;;10304:30;10370:29;10365:2;10350:18;;10343:57;10432:2;10417:18;;10090:351::o;10807:400::-;-1:-1:-1;;;;;11063:15:234;;;11045:34;;11115:15;;;;11110:2;11095:18;;11088:43;-1:-1:-1;;;;;;11167:33:234;;;11162:2;11147:18;;11140:61;10995:2;10980:18;;10807:400::o;11212:245::-;11279:6;11332:2;11320:9;11311:7;11307:23;11303:32;11300:52;;;11348:1;11345;11338:12;11300:52;11380:9;11374:16;11399:28;11421:5;11399:28;:::i;13682:1133::-;13812:3;13841:1;13874:6;13868:13;13904:3;13926:1;13954:9;13950:2;13946:18;13936:28;;14014:2;14003:9;13999:18;14036;14026:61;;14080:4;14072:6;14068:17;14058:27;;14026:61;14106:2;14154;14146:6;14143:14;14123:18;14120:38;14117:165;;-1:-1:-1;;;14181:33:234;;14237:4;14234:1;14227:15;14267:4;14188:3;14255:17;14117:165;14298:18;14325:133;;;;14472:1;14467:323;;;;14291:499;;14325:133;-1:-1:-1;;14358:24:234;;14346:37;;14431:14;;14424:22;14412:35;;14403:45;;;-1:-1:-1;14325:133:234;;14467:323;13629:1;13622:14;;;13666:4;13653:18;;14565:1;14579:165;14593:6;14590:1;14587:13;14579:165;;;14671:14;;14658:11;;;14651:35;14714:16;;;;14608:10;;14579:165;;;14583:3;;14773:6;14768:3;14764:16;14757:23;;14291:499;-1:-1:-1;14806:3:234;;13682:1133;-1:-1:-1;;;;;;;;13682:1133:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "23647": [
                {
                    "start": 1380,
                    "length": 32
                },
                {
                    "start": 2964,
                    "length": 32
                },
                {
                    "start": 3151,
                    "length": 32
                },
                {
                    "start": 3365,
                    "length": 32
                },
                {
                    "start": 4247,
                    "length": 32
                },
                {
                    "start": 4345,
                    "length": 32
                }
            ],
            "23649": [
                {
                    "start": 981,
                    "length": 32
                },
                {
                    "start": 3239,
                    "length": 32
                },
                {
                    "start": 4433,
                    "length": 32
                }
            ],
            "72247": [
                {
                    "start": 1039,
                    "length": 32
                }
            ],
            "72261": [
                {
                    "start": 3067,
                    "length": 32
                }
            ],
            "72263": [
                {
                    "start": 3115,
                    "length": 32
                }
            ],
            "72653": [
                {
                    "start": 1123,
                    "length": 32
                },
                {
                    "start": 2055,
                    "length": 32
                },
                {
                    "start": 5870,
                    "length": 32
                },
                {
                    "start": 6268,
                    "length": 32
                },
                {
                    "start": 6806,
                    "length": 32
                },
                {
                    "start": 6958,
                    "length": 32
                },
                {
                    "start": 7296,
                    "length": 32
                },
                {
                    "start": 7618,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
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
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ERC20Mintable\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_maxMintAmount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMintAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockERC4626\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit(uint256,address)\":{\"notice\":\"Overrides ///\"},\"mint(uint256)\":{\"notice\":\"Minting and Burning ///\"},\"setRate(uint256)\":{\"notice\":\"Mock ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626.sol\":\"MockERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"contracts/test/MockERC4626.sol\":{\"keccak256\":\"0xa4fd10513d4248ef8b807d1f0748c6395ecb8c91762cdf27c9ea64d857602bb4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f3f5deaf2735f9c8c7f34826e0ef4202164c15d0ad5202c45f729bb77ac99f\",\"dweb:/ipfs/QmZuo2zf4Fpu79sxRKRmREH83kGiw5X2VSAXwzN9izpnm7\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/tokens/ERC4626.sol\":{\"keccak256\":\"0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431\",\"dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "contract ERC20Mintable",
                            "name": "_asset",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_symbol",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_initialRate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_admin",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "_isCompetitionMode",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_maxMintAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "contract Authority",
                            "name": "newAuthority",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "AuthorityUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assets",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Deposit",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "OwnershipTransferred",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PublicCapabilityUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8",
                            "indexed": true
                        },
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RoleCapabilityUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "contract Authority",
                            "name": "authority",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "TargetCustomAuthorityUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "UserRoleUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assets",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Withdraw",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "allowance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "asset",
                    "outputs": [
                        {
                            "internalType": "contract ERC20",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "authority",
                    "outputs": [
                        {
                            "internalType": "contract Authority",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "burn"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "burn"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "canCall",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "convertToAssets",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "assets",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "convertToShares",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_assets",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_receiver",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deposit",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "doesRoleHaveCapability",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "doesUserHaveRole",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getRate",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getRolesWithCapability",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getTargetCustomAuthority",
                    "outputs": [
                        {
                            "internalType": "contract Authority",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getUserRoles",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isCapabilityPublic",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isCompetitionMode",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxDeposit",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxMint",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxMintAmount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxRedeem",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxWithdraw",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_shares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_receiver",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "nonces",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owner",
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
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permit"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "assets",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "previewDeposit",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "previewMint",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "shares",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "previewRedeem",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "assets",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "previewWithdraw",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_shares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "redeem",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "contract Authority",
                            "name": "newAuthority",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setAuthority"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4"
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPublicCapability"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_rate_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setRate"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4"
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setRoleCapability"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "contract Authority",
                            "name": "customAuthority",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setTargetCustomAuthority"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint8",
                            "name": "role",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "enabled",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setUserRole"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalAssets",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferOwnership"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_assets",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "withdraw",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "deposit(uint256,address)": {
                        "notice": "Overrides ///"
                    },
                    "mint(uint256)": {
                        "notice": "Minting and Burning ///"
                    },
                    "setRate(uint256)": {
                        "notice": "Mock ///"
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
                "contracts/test/MockERC4626.sol": "MockERC4626"
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
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/ERC20Mintable.sol": {
                "keccak256": "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5",
                "urls": [
                    "bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48",
                    "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockERC4626.sol": {
                "keccak256": "0xa4fd10513d4248ef8b807d1f0748c6395ecb8c91762cdf27c9ea64d857602bb4",
                "urls": [
                    "bzz-raw://d8f3f5deaf2735f9c8c7f34826e0ef4202164c15d0ad5202c45f729bb77ac99f",
                    "dweb:/ipfs/QmZuo2zf4Fpu79sxRKRmREH83kGiw5X2VSAXwzN9izpnm7"
                ],
                "license": "Apache-2.0"
            },
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
                "urls": [
                    "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
                    "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC4626.sol": {
                "keccak256": "0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483",
                "urls": [
                    "bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431",
                    "dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/utils/FixedPointMathLib.sol": {
                "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
                "urls": [
                    "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
                    "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/utils/SafeTransferLib.sol": {
                "keccak256": "0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b",
                "urls": [
                    "bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060",
                    "dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv"
                ],
                "license": "AGPL-3.0-only"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockERC4626.sol",
        "id": 23996,
        "exportedSymbols": {
            "Authority": [
                71917
            ],
            "ERC20": [
                72610
            ],
            "ERC20Mintable": [
                23490
            ],
            "ERC4626": [
                73131
            ],
            "FixedPointMath": [
                18822
            ],
            "MockERC4626": [
                23995
            ],
            "MultiRolesAuthority": [
                72222
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:4561:132",
        "nodes": [
            {
                "id": 23621,
                "nodeType": "PragmaDirective",
                "src": "39:23:132",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 23623,
                "nodeType": "ImportDirective",
                "src": "64:50:132",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/Auth.sol",
                "file": "solmate/auth/Auth.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 71918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23622,
                            "name": "Authority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71917,
                            "src": "73:9:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23625,
                "nodeType": "ImportDirective",
                "src": "115:87:132",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
                "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 72223,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23624,
                            "name": "MultiRolesAuthority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72222,
                            "src": "124:19:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23627,
                "nodeType": "ImportDirective",
                "src": "203:49:132",
                "nodes": [],
                "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
                "file": "solmate/tokens/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 72611,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23626,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72610,
                            "src": "212:5:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23629,
                "nodeType": "ImportDirective",
                "src": "253:53:132",
                "nodes": [],
                "absolutePath": "lib/solmate/src/tokens/ERC4626.sol",
                "file": "solmate/tokens/ERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 73132,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23628,
                            "name": "ERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73131,
                            "src": "262:7:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23631,
                "nodeType": "ImportDirective",
                "src": "307:69:132",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23630,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "316:14:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23633,
                "nodeType": "ImportDirective",
                "src": "377:52:132",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "./ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23996,
                "sourceUnit": 23491,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23632,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23490,
                            "src": "386:13:132",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23995,
                "nodeType": "ContractDefinition",
                "src": "963:3636:132",
                "nodes": [
                    {
                        "id": 23641,
                        "nodeType": "UsingForDirective",
                        "src": "1022:33:132",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 23639,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1028:14:132"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "1028:14:132"
                        },
                        "typeName": {
                            "id": 23640,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1047:7:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 23643,
                        "nodeType": "VariableDeclaration",
                        "src": "1061:22:132",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_rate",
                        "nameLocation": "1078:5:132",
                        "scope": 23995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 23642,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1061:7:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23645,
                        "nodeType": "VariableDeclaration",
                        "src": "1089:29:132",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_lastUpdated",
                        "nameLocation": "1106:12:132",
                        "scope": 23995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 23644,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1089:7:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23647,
                        "nodeType": "VariableDeclaration",
                        "src": "1125:39:132",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "7a8c63b5",
                        "mutability": "immutable",
                        "name": "isCompetitionMode",
                        "nameLocation": "1147:17:132",
                        "scope": 23995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 23646,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "1125:4:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 23649,
                        "nodeType": "VariableDeclaration",
                        "src": "1170:38:132",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "239c70ae",
                        "mutability": "immutable",
                        "name": "maxMintAmount",
                        "nameLocation": "1195:13:132",
                        "scope": 23995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 23648,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1170:7:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 23704,
                        "nodeType": "FunctionDefinition",
                        "src": "1215:514:132",
                        "nodes": [],
                        "body": {
                            "id": 23703,
                            "nodeType": "Block",
                            "src": "1564:165:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23688,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23686,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23643,
                                            "src": "1574:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23687,
                                            "name": "_initialRate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23658,
                                            "src": "1582:12:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1574:20:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23689,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1574:20:132"
                                },
                                {
                                    "expression": {
                                        "id": 23693,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23690,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23645,
                                            "src": "1604:12:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 23691,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "1619:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 23692,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1625:9:132",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "1619:15:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1604:30:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23694,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1604:30:132"
                                },
                                {
                                    "expression": {
                                        "id": 23697,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23695,
                                            "name": "isCompetitionMode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23647,
                                            "src": "1644:17:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23696,
                                            "name": "_isCompetitionMode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23662,
                                            "src": "1664:18:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1644:38:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23698,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1644:38:132"
                                },
                                {
                                    "expression": {
                                        "id": 23701,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23699,
                                            "name": "maxMintAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23649,
                                            "src": "1692:13:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23700,
                                            "name": "_maxMintAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23664,
                                            "src": "1708:14:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1692:30:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23702,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1692:30:132"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 23670,
                                                        "name": "_asset",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23652,
                                                        "src": "1472:6:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                                            "typeString": "contract ERC20Mintable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                                            "typeString": "contract ERC20Mintable"
                                                        }
                                                    ],
                                                    "id": 23669,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1464:7:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 23668,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1464:7:132",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 23671,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1464:15:132",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 23667,
                                            "name": "ERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72610,
                                            "src": "1458:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_ERC20_$72610_$",
                                                "typeString": "type(contract ERC20)"
                                            }
                                        },
                                        "id": 23672,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1458:22:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20_$72610",
                                            "typeString": "contract ERC20"
                                        }
                                    },
                                    {
                                        "id": 23673,
                                        "name": "_name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23654,
                                        "src": "1482:5:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    {
                                        "id": 23674,
                                        "name": "_symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23656,
                                        "src": "1489:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    }
                                ],
                                "id": 23675,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 23666,
                                    "name": "ERC4626",
                                    "nameLocations": [
                                        "1450:7:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 73131,
                                    "src": "1450:7:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1450:47:132"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 23677,
                                        "name": "_admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23660,
                                        "src": "1526:6:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 23681,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1552:4:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                            "typeString": "contract MockERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                            "typeString": "contract MockERC4626"
                                                        }
                                                    ],
                                                    "id": 23680,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1544:7:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 23679,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1544:7:132",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 23682,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1544:13:132",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 23678,
                                            "name": "Authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71917,
                                            "src": "1534:9:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_Authority_$71917_$",
                                                "typeString": "type(contract Authority)"
                                            }
                                        },
                                        "id": 23683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1534:24:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71917",
                                            "typeString": "contract Authority"
                                        }
                                    }
                                ],
                                "id": 23684,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 23676,
                                    "name": "MultiRolesAuthority",
                                    "nameLocations": [
                                        "1506:19:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 72222,
                                    "src": "1506:19:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1506:53:132"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 23665,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23652,
                                    "mutability": "mutable",
                                    "name": "_asset",
                                    "nameLocation": "1250:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1236:20:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                        "typeString": "contract ERC20Mintable"
                                    },
                                    "typeName": {
                                        "id": 23651,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 23650,
                                            "name": "ERC20Mintable",
                                            "nameLocations": [
                                                "1236:13:132"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 23490,
                                            "src": "1236:13:132"
                                        },
                                        "referencedDeclaration": 23490,
                                        "src": "1236:13:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                            "typeString": "contract ERC20Mintable"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23654,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1280:5:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1266:19:132",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 23653,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1266:6:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23656,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "1309:7:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1295:21:132",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 23655,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1295:6:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23658,
                                    "mutability": "mutable",
                                    "name": "_initialRate",
                                    "nameLocation": "1334:12:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1326:20:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23657,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1326:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23660,
                                    "mutability": "mutable",
                                    "name": "_admin",
                                    "nameLocation": "1364:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1356:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23659,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1356:7:132",
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
                                    "id": 23662,
                                    "mutability": "mutable",
                                    "name": "_isCompetitionMode",
                                    "nameLocation": "1385:18:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1380:23:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 23661,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1380:4:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23664,
                                    "mutability": "mutable",
                                    "name": "_maxMintAmount",
                                    "nameLocation": "1421:14:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23704,
                                    "src": "1413:22:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23663,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1413:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1226:215:132"
                        },
                        "returnParameters": {
                            "id": 23685,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1564:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23721,
                        "nodeType": "ModifierDefinition",
                        "src": "1735:235:132",
                        "nodes": [],
                        "body": {
                            "id": 23720,
                            "nodeType": "Block",
                            "src": "1776:194:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 23706,
                                        "name": "isCompetitionMode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23647,
                                        "src": "1790:17:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23718,
                                    "nodeType": "IfStatement",
                                    "src": "1786:167:132",
                                    "trueBody": {
                                        "id": 23717,
                                        "nodeType": "Block",
                                        "src": "1809:144:132",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 23709,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "1861:3:132",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 23710,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "1865:6:132",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1861:10:132",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "expression": {
                                                                        "id": 23711,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "1873:3:132",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 23712,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "1877:3:132",
                                                                    "memberName": "sig",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1873:7:132",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes4",
                                                                        "typeString": "bytes4"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes4",
                                                                        "typeString": "bytes4"
                                                                    }
                                                                ],
                                                                "id": 23708,
                                                                "name": "isAuthorized",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71849,
                                                                "src": "1848:12:132",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                    "typeString": "function (address,bytes4) view returns (bool)"
                                                                }
                                                            },
                                                            "id": 23713,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1848:33:132",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "4d6f636b455243343632363a206e6f7420617574686f72697a6564",
                                                            "id": 23714,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "1899:29:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                                                "typeString": "literal_string \"MockERC4626: not authorized\""
                                                            },
                                                            "value": "MockERC4626: not authorized"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                                                "typeString": "literal_string \"MockERC4626: not authorized\""
                                                            }
                                                        ],
                                                        "id": 23707,
                                                        "name": "require",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            -18,
                                                            -18
                                                        ],
                                                        "referencedDeclaration": -18,
                                                        "src": "1823:7:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                            "typeString": "function (bool,string memory) pure"
                                                        }
                                                    },
                                                    "id": 23715,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1823:119:132",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 23716,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1823:119:132"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 23719,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1962:1:132"
                                }
                            ]
                        },
                        "name": "requiresAuthDuringCompetition",
                        "nameLocation": "1744:29:132",
                        "parameters": {
                            "id": 23705,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1773:2:132"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23743,
                        "nodeType": "FunctionDefinition",
                        "src": "2009:189:132",
                        "nodes": [],
                        "body": {
                            "id": 23742,
                            "nodeType": "Block",
                            "src": "2078:120:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 23732,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 23730,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23724,
                                                    "src": "2096:6:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 23731,
                                                    "name": "maxMintAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23649,
                                                    "src": "2106:13:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2096:23:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74",
                                                "id": 23733,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2121:34:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc",
                                                    "typeString": "literal_string \"MockERC4626: Invalid mint amount\""
                                                },
                                                "value": "MockERC4626: Invalid mint amount"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc",
                                                    "typeString": "literal_string \"MockERC4626: Invalid mint amount\""
                                                }
                                            ],
                                            "id": 23729,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2088:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 23734,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2088:68:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23735,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2088:68:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 23737,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2172:3:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 23738,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2176:6:132",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2172:10:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23739,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23724,
                                                "src": "2184:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 23736,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72581,
                                            "src": "2166:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 23740,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2166:25:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23741,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2166:25:132"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 23722,
                            "nodeType": "StructuredDocumentation",
                            "src": "1976:28:132",
                            "text": "Minting and Burning ///"
                        },
                        "functionSelector": "a0712d68",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 23727,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 23726,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "2048:29:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23721,
                                    "src": "2048:29:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2048:29:132"
                            }
                        ],
                        "name": "mint",
                        "nameLocation": "2018:4:132",
                        "parameters": {
                            "id": 23725,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23724,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2031:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23743,
                                    "src": "2023:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23723,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2023:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2022:16:132"
                        },
                        "returnParameters": {
                            "id": 23728,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2078:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23765,
                        "nodeType": "FunctionDefinition",
                        "src": "2204:233:132",
                        "nodes": [],
                        "body": {
                            "id": 23764,
                            "nodeType": "Block",
                            "src": "2316:121:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 23755,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 23753,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23747,
                                                    "src": "2334:6:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 23754,
                                                    "name": "maxMintAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23649,
                                                    "src": "2344:13:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2334:23:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74",
                                                "id": 23756,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2359:34:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc",
                                                    "typeString": "literal_string \"MockERC4626: Invalid mint amount\""
                                                },
                                                "value": "MockERC4626: Invalid mint amount"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc",
                                                    "typeString": "literal_string \"MockERC4626: Invalid mint amount\""
                                                }
                                            ],
                                            "id": 23752,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2326:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 23757,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2326:68:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23758,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2326:68:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23760,
                                                "name": "destination",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23745,
                                                "src": "2410:11:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23761,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23747,
                                                "src": "2423:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 23759,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72581,
                                            "src": "2404:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 23762,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2404:26:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23763,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2404:26:132"
                                }
                            ]
                        },
                        "functionSelector": "40c10f19",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 23750,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 23749,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "2286:29:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23721,
                                    "src": "2286:29:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2286:29:132"
                            }
                        ],
                        "name": "mint",
                        "nameLocation": "2213:4:132",
                        "parameters": {
                            "id": 23748,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23745,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2235:11:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23765,
                                    "src": "2227:19:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23744,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2227:7:132",
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
                                    "id": 23747,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2264:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23765,
                                    "src": "2256:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23746,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2256:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2217:59:132"
                        },
                        "returnParameters": {
                            "id": 23751,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2316:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23779,
                        "nodeType": "FunctionDefinition",
                        "src": "2443:111:132",
                        "nodes": [],
                        "body": {
                            "id": 23778,
                            "nodeType": "Block",
                            "src": "2512:42:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 23773,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2528:3:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 23774,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2532:6:132",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2528:10:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23775,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23767,
                                                "src": "2540:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 23772,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72609,
                                            "src": "2522:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 23776,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2522:25:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23777,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2522:25:132"
                                }
                            ]
                        },
                        "functionSelector": "42966c68",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 23770,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 23769,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "2482:29:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23721,
                                    "src": "2482:29:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2482:29:132"
                            }
                        ],
                        "name": "burn",
                        "nameLocation": "2452:4:132",
                        "parameters": {
                            "id": 23768,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23767,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2465:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23779,
                                    "src": "2457:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23766,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2457:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2456:16:132"
                        },
                        "returnParameters": {
                            "id": 23771,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2512:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23794,
                        "nodeType": "FunctionDefinition",
                        "src": "2560:155:132",
                        "nodes": [],
                        "body": {
                            "id": 23793,
                            "nodeType": "Block",
                            "src": "2672:43:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23789,
                                                "name": "destination",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23781,
                                                "src": "2688:11:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23790,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23783,
                                                "src": "2701:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 23788,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72609,
                                            "src": "2682:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 23791,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2682:26:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23792,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2682:26:132"
                                }
                            ]
                        },
                        "functionSelector": "9dc29fac",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 23786,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 23785,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "2642:29:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23721,
                                    "src": "2642:29:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2642:29:132"
                            }
                        ],
                        "name": "burn",
                        "nameLocation": "2569:4:132",
                        "parameters": {
                            "id": 23784,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23781,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2591:11:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23794,
                                    "src": "2583:19:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23780,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2583:7:132",
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
                                    "id": 23783,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2620:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23794,
                                    "src": "2612:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23782,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2612:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2573:59:132"
                        },
                        "returnParameters": {
                            "id": 23787,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2672:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23815,
                        "nodeType": "FunctionDefinition",
                        "src": "2744:185:132",
                        "nodes": [],
                        "body": {
                            "id": 23814,
                            "nodeType": "Block",
                            "src": "2853:76:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23805,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23952,
                                            "src": "2863:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 23806,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2863:9:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23807,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2863:9:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23810,
                                                "name": "_assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23797,
                                                "src": "2903:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23811,
                                                "name": "_receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23799,
                                                "src": "2912:9:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23808,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -25,
                                                "src": "2889:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_MockERC4626_$23995_$",
                                                    "typeString": "type(contract super MockERC4626)"
                                                }
                                            },
                                            "id": 23809,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2895:7:132",
                                            "memberName": "deposit",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 72727,
                                            "src": "2889:13:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,address) returns (uint256)"
                                            }
                                        },
                                        "id": 23812,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2889:33:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23804,
                                    "id": 23813,
                                    "nodeType": "Return",
                                    "src": "2882:40:132"
                                }
                            ]
                        },
                        "baseFunctions": [
                            72727
                        ],
                        "documentation": {
                            "id": 23795,
                            "nodeType": "StructuredDocumentation",
                            "src": "2721:18:132",
                            "text": "Overrides ///"
                        },
                        "functionSelector": "6e553f65",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "2753:7:132",
                        "overrides": {
                            "id": 23801,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2826:8:132"
                        },
                        "parameters": {
                            "id": 23800,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23797,
                                    "mutability": "mutable",
                                    "name": "_assets",
                                    "nameLocation": "2778:7:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23815,
                                    "src": "2770:15:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23796,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2770:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23799,
                                    "mutability": "mutable",
                                    "name": "_receiver",
                                    "nameLocation": "2803:9:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23815,
                                    "src": "2795:17:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23798,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2795:7:132",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2760:58:132"
                        },
                        "returnParameters": {
                            "id": 23804,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23803,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23815,
                                    "src": "2844:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23802,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2844:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2843:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23835,
                        "nodeType": "FunctionDefinition",
                        "src": "2935:179:132",
                        "nodes": [],
                        "body": {
                            "id": 23834,
                            "nodeType": "Block",
                            "src": "3041:73:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23825,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23952,
                                            "src": "3051:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 23826,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3051:9:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23827,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3051:9:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23830,
                                                "name": "_shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23817,
                                                "src": "3088:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23831,
                                                "name": "_receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23819,
                                                "src": "3097:9:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23828,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -25,
                                                "src": "3077:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_MockERC4626_$23995_$",
                                                    "typeString": "type(contract super MockERC4626)"
                                                }
                                            },
                                            "id": 23829,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3083:4:132",
                                            "memberName": "mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 72773,
                                            "src": "3077:10:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,address) returns (uint256)"
                                            }
                                        },
                                        "id": 23832,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3077:30:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23824,
                                    "id": 23833,
                                    "nodeType": "Return",
                                    "src": "3070:37:132"
                                }
                            ]
                        },
                        "baseFunctions": [
                            72773
                        ],
                        "functionSelector": "94bf804d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "2944:4:132",
                        "overrides": {
                            "id": 23821,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3014:8:132"
                        },
                        "parameters": {
                            "id": 23820,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23817,
                                    "mutability": "mutable",
                                    "name": "_shares",
                                    "nameLocation": "2966:7:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23835,
                                    "src": "2958:15:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23816,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2958:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23819,
                                    "mutability": "mutable",
                                    "name": "_receiver",
                                    "nameLocation": "2991:9:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23835,
                                    "src": "2983:17:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23818,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2983:7:132",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2948:58:132"
                        },
                        "returnParameters": {
                            "id": 23824,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23823,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23835,
                                    "src": "3032:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23822,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3032:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3031:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23858,
                        "nodeType": "FunctionDefinition",
                        "src": "3120:219:132",
                        "nodes": [],
                        "body": {
                            "id": 23857,
                            "nodeType": "Block",
                            "src": "3254:85:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23847,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23952,
                                            "src": "3264:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 23848,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3264:9:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23849,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3264:9:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23852,
                                                "name": "_assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23837,
                                                "src": "3305:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23853,
                                                "name": "_receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23839,
                                                "src": "3314:9:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23854,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23841,
                                                "src": "3325:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23850,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -25,
                                                "src": "3290:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_MockERC4626_$23995_$",
                                                    "typeString": "type(contract super MockERC4626)"
                                                }
                                            },
                                            "id": 23851,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3296:8:132",
                                            "memberName": "withdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 72851,
                                            "src": "3290:14:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,address,address) returns (uint256)"
                                            }
                                        },
                                        "id": 23855,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3290:42:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23846,
                                    "id": 23856,
                                    "nodeType": "Return",
                                    "src": "3283:49:132"
                                }
                            ]
                        },
                        "baseFunctions": [
                            72851
                        ],
                        "functionSelector": "b460af94",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdraw",
                        "nameLocation": "3129:8:132",
                        "overrides": {
                            "id": 23843,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3227:8:132"
                        },
                        "parameters": {
                            "id": 23842,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23837,
                                    "mutability": "mutable",
                                    "name": "_assets",
                                    "nameLocation": "3155:7:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23858,
                                    "src": "3147:15:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23836,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3147:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23839,
                                    "mutability": "mutable",
                                    "name": "_receiver",
                                    "nameLocation": "3180:9:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23858,
                                    "src": "3172:17:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23838,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3172:7:132",
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
                                    "id": 23841,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "3207:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23858,
                                    "src": "3199:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23840,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3199:7:132",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3137:82:132"
                        },
                        "returnParameters": {
                            "id": 23846,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23845,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23858,
                                    "src": "3245:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23844,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3245:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3244:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23881,
                        "nodeType": "FunctionDefinition",
                        "src": "3345:215:132",
                        "nodes": [],
                        "body": {
                            "id": 23880,
                            "nodeType": "Block",
                            "src": "3477:83:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23870,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23952,
                                            "src": "3487:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 23871,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3487:9:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23872,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3487:9:132"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 23875,
                                                "name": "_shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23860,
                                                "src": "3526:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23876,
                                                "name": "_receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23862,
                                                "src": "3535:9:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 23877,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23864,
                                                "src": "3546:6:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23873,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -25,
                                                "src": "3513:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_super$_MockERC4626_$23995_$",
                                                    "typeString": "type(contract super MockERC4626)"
                                                }
                                            },
                                            "id": 23874,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3519:6:132",
                                            "memberName": "redeem",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 72935,
                                            "src": "3513:12:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,address,address) returns (uint256)"
                                            }
                                        },
                                        "id": 23878,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3513:40:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23869,
                                    "id": 23879,
                                    "nodeType": "Return",
                                    "src": "3506:47:132"
                                }
                            ]
                        },
                        "baseFunctions": [
                            72935
                        ],
                        "functionSelector": "ba087652",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nameLocation": "3354:6:132",
                        "overrides": {
                            "id": 23866,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3450:8:132"
                        },
                        "parameters": {
                            "id": 23865,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23860,
                                    "mutability": "mutable",
                                    "name": "_shares",
                                    "nameLocation": "3378:7:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23881,
                                    "src": "3370:15:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23859,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3370:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23862,
                                    "mutability": "mutable",
                                    "name": "_receiver",
                                    "nameLocation": "3403:9:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23881,
                                    "src": "3395:17:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23861,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3395:7:132",
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
                                    "id": 23864,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "3430:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23881,
                                    "src": "3422:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23863,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3422:7:132",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3360:82:132"
                        },
                        "returnParameters": {
                            "id": 23869,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23868,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23881,
                                    "src": "3468:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23867,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3468:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3467:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23899,
                        "nodeType": "FunctionDefinition",
                        "src": "3566:140:132",
                        "nodes": [],
                        "body": {
                            "id": 23898,
                            "nodeType": "Block",
                            "src": "3628:78:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23896,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 23891,
                                                            "name": "this",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -28,
                                                            "src": "3669:4:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                                "typeString": "contract MockERC4626"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                                "typeString": "contract MockERC4626"
                                                            }
                                                        ],
                                                        "id": 23890,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3661:7:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 23889,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3661:7:132",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 23892,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3661:13:132",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 23887,
                                                    "name": "asset",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72653,
                                                    "src": "3645:5:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ERC20_$72610",
                                                        "typeString": "contract ERC20"
                                                    }
                                                },
                                                "id": 23888,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3651:9:132",
                                                "memberName": "balanceOf",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 72253,
                                                "src": "3645:15:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                    "typeString": "function (address) view external returns (uint256)"
                                                }
                                            },
                                            "id": 23893,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3645:30:132",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 23894,
                                                "name": "_getAccruedInterest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23994,
                                                "src": "3678:19:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 23895,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3678:21:132",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3645:54:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23886,
                                    "id": 23897,
                                    "nodeType": "Return",
                                    "src": "3638:61:132"
                                }
                            ]
                        },
                        "baseFunctions": [
                            72940
                        ],
                        "functionSelector": "01e1d114",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalAssets",
                        "nameLocation": "3575:11:132",
                        "overrides": {
                            "id": 23883,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3601:8:132"
                        },
                        "parameters": {
                            "id": 23882,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3586:2:132"
                        },
                        "returnParameters": {
                            "id": 23886,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23885,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23899,
                                    "src": "3619:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23884,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3619:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3618:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23915,
                        "nodeType": "FunctionDefinition",
                        "src": "3730:122:132",
                        "nodes": [],
                        "body": {
                            "id": 23914,
                            "nodeType": "Block",
                            "src": "3802:50:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23907,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23952,
                                            "src": "3812:7:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 23908,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3812:9:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 23909,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3812:9:132"
                                },
                                {
                                    "expression": {
                                        "id": 23912,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23910,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23643,
                                            "src": "3831:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23911,
                                            "name": "_rate_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23902,
                                            "src": "3839:6:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3831:14:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23913,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3831:14:132"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 23900,
                            "nodeType": "StructuredDocumentation",
                            "src": "3712:13:132",
                            "text": "Mock ///"
                        },
                        "functionSelector": "34fcf437",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 23905,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 23904,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "3772:29:132"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23721,
                                    "src": "3772:29:132"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3772:29:132"
                            }
                        ],
                        "name": "setRate",
                        "nameLocation": "3739:7:132",
                        "parameters": {
                            "id": 23903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23902,
                                    "mutability": "mutable",
                                    "name": "_rate_",
                                    "nameLocation": "3755:6:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23915,
                                    "src": "3747:14:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23901,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3747:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3746:16:132"
                        },
                        "returnParameters": {
                            "id": 23906,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3802:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23923,
                        "nodeType": "FunctionDefinition",
                        "src": "3858:80:132",
                        "nodes": [],
                        "body": {
                            "id": 23922,
                            "nodeType": "Block",
                            "src": "3909:29:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23920,
                                        "name": "_rate",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23643,
                                        "src": "3926:5:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23919,
                                    "id": 23921,
                                    "nodeType": "Return",
                                    "src": "3919:12:132"
                                }
                            ]
                        },
                        "functionSelector": "679aefce",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getRate",
                        "nameLocation": "3867:7:132",
                        "parameters": {
                            "id": 23916,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3874:2:132"
                        },
                        "returnParameters": {
                            "id": 23919,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23918,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23923,
                                    "src": "3900:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23917,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3900:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3899:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23952,
                        "nodeType": "FunctionDefinition",
                        "src": "3944:221:132",
                        "nodes": [],
                        "body": {
                            "id": 23951,
                            "nodeType": "Block",
                            "src": "3972:193:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23927
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23927,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "3990:8:132",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23951,
                                            "src": "3982:16:132",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23926,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3982:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23930,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 23928,
                                            "name": "_getAccruedInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23994,
                                            "src": "4001:19:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 23929,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4001:21:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3982:40:132"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23933,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23931,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23927,
                                            "src": "4036:8:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 23932,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4047:1:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4036:12:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23945,
                                    "nodeType": "IfStatement",
                                    "src": "4032:87:132",
                                    "trueBody": {
                                        "id": 23944,
                                        "nodeType": "Block",
                                        "src": "4050:69:132",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 23941,
                                                            "name": "interest",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23927,
                                                            "src": "4099:8:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 23937,
                                                                            "name": "asset",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 72653,
                                                                            "src": "4086:5:132",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_ERC20_$72610",
                                                                                "typeString": "contract ERC20"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_contract$_ERC20_$72610",
                                                                                "typeString": "contract ERC20"
                                                                            }
                                                                        ],
                                                                        "id": 23936,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "4078:7:132",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 23935,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "4078:7:132",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 23938,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "4078:14:132",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "id": 23934,
                                                                "name": "ERC20Mintable",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23490,
                                                                "src": "4064:13:132",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$23490_$",
                                                                    "typeString": "type(contract ERC20Mintable)"
                                                                }
                                                            },
                                                            "id": 23939,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4064:29:132",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                                                "typeString": "contract ERC20Mintable"
                                                            }
                                                        },
                                                        "id": 23940,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4094:4:132",
                                                        "memberName": "mint",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 23438,
                                                        "src": "4064:34:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256) external"
                                                        }
                                                    },
                                                    "id": 23942,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4064:44:132",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 23943,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4064:44:132"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 23949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23946,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23645,
                                            "src": "4128:12:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 23947,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "4143:5:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 23948,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4149:9:132",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "4143:15:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4128:30:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23950,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4128:30:132"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_accrue",
                        "nameLocation": "3953:7:132",
                        "parameters": {
                            "id": 23924,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3960:2:132"
                        },
                        "returnParameters": {
                            "id": 23925,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3972:0:132"
                        },
                        "scope": 23995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23994,
                        "nodeType": "FunctionDefinition",
                        "src": "4171:426:132",
                        "nodes": [],
                        "body": {
                            "id": 23993,
                            "nodeType": "Block",
                            "src": "4234:363:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23959,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23957,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23643,
                                            "src": "4248:5:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 23958,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4257:1:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4248:10:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23963,
                                    "nodeType": "IfStatement",
                                    "src": "4244:49:132",
                                    "trueBody": {
                                        "id": 23962,
                                        "nodeType": "Block",
                                        "src": "4260:33:132",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 23960,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4281:1:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 23956,
                                                "id": 23961,
                                                "nodeType": "Return",
                                                "src": "4274:8:132"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        23965
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23965,
                                            "mutability": "mutable",
                                            "name": "timeElapsed",
                                            "nameLocation": "4364:11:132",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23993,
                                            "src": "4356:19:132",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23964,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4356:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23974,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "333635",
                                                "id": 23972,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4432:8:132",
                                                "subdenomination": "days",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_31536000_by_1",
                                                    "typeString": "int_const 31536000"
                                                },
                                                "value": "365"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_rational_31536000_by_1",
                                                    "typeString": "int_const 31536000"
                                                }
                                            ],
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 23969,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 23966,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4379:5:132",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 23967,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4385:9:132",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4379:15:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 23968,
                                                            "name": "_lastUpdated",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23645,
                                                            "src": "4397:12:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4379:30:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 23970,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4378:32:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 23971,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4411:7:132",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18103,
                                            "src": "4378:40:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23973,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4378:72:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4356:94:132"
                                },
                                {
                                    "assignments": [
                                        23976
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23976,
                                            "mutability": "mutable",
                                            "name": "accrued",
                                            "nameLocation": "4468:7:132",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23993,
                                            "src": "4460:15:132",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23975,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4460:7:132",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23990,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 23987,
                                                        "name": "timeElapsed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23965,
                                                        "src": "4544:11:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 23985,
                                                        "name": "_rate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23643,
                                                        "src": "4530:5:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 23986,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4536:7:132",
                                                    "memberName": "mulDown",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18085,
                                                    "src": "4530:13:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 23988,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4530:26:132",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 23981,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "4502:4:132",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                                    "typeString": "contract MockERC4626"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_MockERC4626_$23995",
                                                                    "typeString": "contract MockERC4626"
                                                                }
                                                            ],
                                                            "id": 23980,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4494:7:132",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 23979,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4494:7:132",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 23982,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4494:13:132",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 23977,
                                                        "name": "asset",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72653,
                                                        "src": "4478:5:132",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC20_$72610",
                                                            "typeString": "contract ERC20"
                                                        }
                                                    },
                                                    "id": 23978,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4484:9:132",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 72253,
                                                    "src": "4478:15:132",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 23983,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4478:30:132",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 23984,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4509:7:132",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18085,
                                            "src": "4478:38:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23989,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4478:88:132",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4460:106:132"
                                },
                                {
                                    "expression": {
                                        "id": 23991,
                                        "name": "accrued",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23976,
                                        "src": "4583:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23956,
                                    "id": 23992,
                                    "nodeType": "Return",
                                    "src": "4576:14:132"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getAccruedInterest",
                        "nameLocation": "4180:19:132",
                        "parameters": {
                            "id": 23953,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4199:2:132"
                        },
                        "returnParameters": {
                            "id": 23956,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23955,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23994,
                                    "src": "4225:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23954,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4225:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4224:9:132"
                        },
                        "scope": 23995,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 23635,
                            "name": "ERC4626",
                            "nameLocations": [
                                "987:7:132"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 73131,
                            "src": "987:7:132"
                        },
                        "id": 23636,
                        "nodeType": "InheritanceSpecifier",
                        "src": "987:7:132"
                    },
                    {
                        "baseName": {
                            "id": 23637,
                            "name": "MultiRolesAuthority",
                            "nameLocations": [
                                "996:19:132"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 72222,
                            "src": "996:19:132"
                        },
                        "id": 23638,
                        "nodeType": "InheritanceSpecifier",
                        "src": "996:19:132"
                    }
                ],
                "canonicalName": "MockERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 23634,
                    "nodeType": "StructuredDocumentation",
                    "src": "431:532:132",
                    "text": "@author DELV\n @title MockERC4626\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    23995,
                    72222,
                    71917,
                    71904,
                    73131,
                    72610
                ],
                "name": "MockERC4626",
                "nameLocation": "972:11:132",
                "scope": 23996,
                "usedErrors": [],
                "usedEvents": [
                    71754,
                    71761,
                    71935,
                    71941,
                    71949,
                    71956,
                    72233,
                    72241,
                    72638,
                    72650
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 132
};
