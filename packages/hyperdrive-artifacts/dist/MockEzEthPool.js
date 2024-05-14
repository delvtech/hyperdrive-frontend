export const MockEzEthPool = {
    abi: [
        {
            "inputs": [
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
            "inputs": [],
            "name": "InvalidTokenAmount",
            "type": "error"
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
                    "internalType": "uint256",
                    "name": "_currentValueInProtocol",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_newValueAdded",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_existingEzETHSupply",
                    "type": "uint256"
                }
            ],
            "name": "calculateMintAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_ezETHBeingBurned",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_existingEzETHSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentValueInProtocol",
                    "type": "uint256"
                }
            ],
            "name": "calculateRedeemAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "calculateTVLs",
            "outputs": [
                {
                    "internalType": "uint256[][]",
                    "name": "",
                    "type": "uint256[][]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
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
            "inputs": [],
            "name": "depositETH",
            "outputs": [],
            "stateMutability": "payable",
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
            "name": "ezETH",
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
            "inputs": [],
            "name": "getBufferedEther",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "getPooledEthByShares",
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
                    "internalType": "uint256",
                    "name": "_ethAmount",
                    "type": "uint256"
                }
            ],
            "name": "getSharesByPooledEth",
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
            "inputs": [],
            "name": "getTotalPooledEther",
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
            "name": "getTotalShares",
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
            "name": "isUnrestricted",
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
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "lookupTokenAmountFromValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "lookupTokenValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20[]",
                    "name": "",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "name": "lookupTokenValues",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
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
            "inputs": [],
            "name": "renzoOracle",
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
                    "internalType": "uint256",
                    "name": "_maxMintAmount",
                    "type": "uint256"
                }
            ],
            "name": "setMaxMintAmount",
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
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "setUnrestrictedMintStatus",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "sharesOf",
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
            "name": "submit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
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
            "name": "totalPooledEther",
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
            "name": "totalShares",
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
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferShares",
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
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferSharesFrom",
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
    bytecode: '0x6101006040523480156200001257600080fd5b5060405162002bb438038062002bb4833981016040819052620000359162000211565b6040518060400160405280600b81526020016a0a4cadcf4de40caf48aa8960ab1b815250604051806040016040528060058152602001640caf48aa8960db1b815250601285858582308181898989826000908162000094919062000314565b506001620000a3838262000314565b5060ff81166080524660a052620000b962000175565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e052600c55505050600e94909455505042600f55506200045e9050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001a99190620003e0565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080600080608085870312156200022857600080fd5b845160208601519094506001600160a01b03811681146200024857600080fd5b604086015190935080151581146200025f57600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029a57607f821691505b602082108103620002bb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030f57600081815260208120601f850160051c81016020861015620002ea5750805b601f850160051c820191505b818110156200030b57828155600101620002f6565b5050505b505050565b81516001600160401b038111156200033057620003306200026f565b620003488162000341845462000285565b84620002c1565b602080601f831160018114620003805760008415620003675750858301515b600019600386901b1c1916600185901b1785556200030b565b600085815260208120601f198616915b82811015620003b15788860151825594840194600190910190840162000390565b5085821015620003d05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003f08162000285565b600182811680156200040b5760018114620004215762000452565b60ff198416875282151583028701945062000452565b8760005260208060002060005b85811015620004495781548a8201529084019082016200042e565b50505082870194505b50929695505050505050565b60805160a05160c05160e0516126eb620004c96000396000818161076001528181610b8101528181610c9201528181610f340152818161100b015281816110aa0152818161150f015261157101526000610fd001526000610f9b0152600061056e01526126eb6000f3fe6080604052600436106103805760003560e01c80637a28fb88116101d1578063b700961311610102578063dd62ed3e116100a0578063f2fde38b1161006f578063f2fde38b14610ab9578063f5eb42dc14610ad9578063f6326fb314610af9578063ff9969cd14610b0157600080fd5b8063dd62ed3e146109cd578063e688747b14610a05578063ea7ca27614610a48578063ed0d0efb14610a8c57600080fd5b8063c53a3985116100dc578063c53a398514610942578063c5c83cb014610978578063d5002f2e14610998578063d505accf146109ad57600080fd5b8063b7009613146108e7578063ba28a57114610907578063bf7e214f1461092257600080fd5b80638fcb4e5b1161016f578063a0712d6811610149578063a0712d6814610864578063a1903eab14610884578063a9059cbb14610897578063aed30777146108b757600080fd5b80638fcb4e5b1461080f57806395d89b411461082f5780639dc29fac1461084457600080fd5b80637ecebe00116101ab5780637ecebe00146107a2578063892866a4146104c95780638da5cb5b146107cf5780638f686e6a146107ef57600080fd5b80637a28fb881461072e5780637a8c63b51461074e5780637a9e5e4b1461078257600080fd5b806334fcf437116102b657806347b714e01161025457806369415b861161022357806369415b86146106ab5780636d780459146106c157806370a08231146106e1578063728b952b1461070e57600080fd5b806347b714e0146106425780634b5159da14610656578063679aefce1461067657806367aff4841461068b57600080fd5b806337cfdaca1161029057806337cfdaca146105d75780633a98ef39146105ec57806340c10f191461060257806342966c681461062257600080fd5b806334fcf437146105a25780633644e515146105c2578063379336251461038557600080fd5b80630ea9b75b1161032357806319208451116102fd5780631920845114610506578063239c70ae1461052657806323b872dd1461053c578063313ce5671461055c57600080fd5b80630ea9b75b146104a957806313a73c78146104c957806318160ddd146104f057600080fd5b806306fdde031161035f57806306fdde0314610407578063088a4ed014610429578063095ea7b3146104495780630bade8a41461047957600080fd5b806252e3fd1461038557806305f05a94146103b857806306a36aee146103da575b600080fd5b34801561039157600080fd5b506103a56103a0366004611e8d565b610b25565b6040519081526020015b60405180910390f35b3480156103c457600080fd5b506103d86103d3366004611ec7565b610b7f565b005b3480156103e657600080fd5b506103a56103f5366004611f00565b60096020526000908152604090205481565b34801561041357600080fd5b5061041c610c02565b6040516103af9190611f1d565b34801561043557600080fd5b506103d8610444366004611f6b565b610c90565b34801561045557600080fd5b50610469610464366004611e8d565b610ced565b60405190151581526020016103af565b34801561048557600080fd5b50610469610494366004611fa1565b600a6020526000908152604090205460ff1681565b3480156104b557600080fd5b506103d86104c4366004611fcd565b610d5a565b3480156104d557600080fd5b50305b6040516001600160a01b0390911681526020016103af565b3480156104fc57600080fd5b506103a560025481565b34801561051257600080fd5b506103a5610521366004611f6b565b610e32565b34801561053257600080fd5b506103a5600c5481565b34801561054857600080fd5b50610469610557366004612014565b610e50565b34801561056857600080fd5b506105907f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016103af565b3480156105ae57600080fd5b506103d86105bd366004611f6b565b610f32565b3480156105ce57600080fd5b506103a5610f97565b3480156105e357600080fd5b506103a5610ff2565b3480156105f857600080fd5b506103a560115481565b34801561060e57600080fd5b506103d861061d366004611e8d565b611009565b34801561062e57600080fd5b506103d861063d366004611f6b565b6110a8565b34801561064e57600080fd5b5060006103a5565b34801561066257600080fd5b506103d8610671366004612055565b61110d565b34801561068257600080fd5b50600e546103a5565b34801561069757600080fd5b506103d86106a6366004612071565b61119f565b3480156106b757600080fd5b506103a560105481565b3480156106cd57600080fd5b506103a56106dc366004612014565b611267565b3480156106ed57600080fd5b506103a56106fc366004611f00565b60036020526000908152604090205481565b34801561071a57600080fd5b506103d861072936600461209f565b61129f565b34801561073a57600080fd5b506103a5610749366004611f6b565b611328565b34801561075a57600080fd5b506104697f000000000000000000000000000000000000000000000000000000000000000081565b34801561078e57600080fd5b506103d861079d366004611f00565b61133d565b3480156107ae57600080fd5b506103a56107bd366004611f00565b60056020526000908152604090205481565b3480156107db57600080fd5b506006546104d8906001600160a01b031681565b3480156107fb57600080fd5b506103a561080a3660046120cd565b611427565b34801561081b57600080fd5b506103a561082a366004611e8d565b6114d5565b34801561083b57600080fd5b5061041c611500565b34801561085057600080fd5b506103d861085f366004611e8d565b61150d565b34801561087057600080fd5b506103d861087f366004611f6b565b61156f565b6103a5610892366004611f00565b61160a565b3480156108a357600080fd5b506104696108b2366004611e8d565b611696565b3480156108c357600080fd5b506104696108d2366004611f00565b600d6020526000908152604090205460ff1681565b3480156108f357600080fd5b506104696109023660046120f9565b6116fc565b34801561091357600080fd5b506103a56103a0366004612216565b34801561092e57600080fd5b506007546104d8906001600160a01b031681565b34801561094e57600080fd5b506104d861095d366004611f00565b6008602052600090815260409020546001600160a01b031681565b34801561098457600080fd5b506103a56109933660046120cd565b6117fa565b3480156109a457600080fd5b506011546103a5565b3480156109b957600080fd5b506103d86109c83660046122d8565b61183d565b3480156109d957600080fd5b506103a56109e836600461209f565b600460209081526000928352604080842090915290825290205481565b348015610a1157600080fd5b50610469610a20366004612346565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b348015610a5457600080fd5b50610469610a63366004612379565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b348015610a9857600080fd5b506103a5610aa7366004611fa1565b600b6020526000908152604090205481565b348015610ac557600080fd5b506103d8610ad4366004611f00565b611a81565b348015610ae557600080fd5b506103a5610af4366004611f00565b611aff565b6103d8611b34565b348015610b0d57600080fd5b50610b16611b7c565b6040516103af939291906123e0565b60405162461bcd60e51b815260206004820152602160248201527f6c6f6f6b7570546f6b656e56616c75653a204e6f7420496d706c656d656e74656044820152601960fa1b60648201526000906084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000015610bd757610bbb336000356001600160e01b031916611bab565b610bd75760405162461bcd60e51b8152600401610b769061245e565b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b60008054610c0f90612495565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3b90612495565b8015610c885780601f10610c5d57610100808354040283529160200191610c88565b820191906000526020600020905b815481529060010190602001808311610c6b57829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000015610ce857610ccc336000356001600160e01b031916611bab565b610ce85760405162461bcd60e51b8152600401610b769061245e565b600c55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610d489086815260200190565b60405180910390a35060015b92915050565b610d70336000356001600160e01b031916611bab565b610d8c5760405162461bcd60e51b8152600401610b76906124cf565b8015610dbc576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610de3565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610e25911515815260200190565b60405180910390a3505050565b6000610d54610e4060115490565b610e48610ff2565b849190611c54565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610eac57610e87838261250b565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610ed490849061250b565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061269683398151915290610f1d9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610f8a57610f6e336000356001600160e01b031916611bab565b610f8a5760405162461bcd60e51b8152600401610b769061245e565b610f92611c72565b600e55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610fcd57610fc8611ca3565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610ffc611d3d565b601054610fc8919061251e565b7f00000000000000000000000000000000000000000000000000000000000000001561106157611045336000356001600160e01b031916611bab565b6110615760405162461bcd60e51b8152600401610b769061245e565b336000908152600d602052604090205460ff1661109a57600c5481111561109a5760405162461bcd60e51b8152600401610b7690612531565b6110a48282611d92565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015611100576110e4336000356001600160e01b031916611bab565b6111005760405162461bcd60e51b8152600401610b769061245e565b61110a3382611dec565b50565b611123336000356001600160e01b031916611bab565b61113f5760405162461bcd60e51b8152600401610b76906124cf565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6111b5336000356001600160e01b031916611bab565b6111d15760405162461bcd60e51b8152600401610b76906124cf565b8015611200576001600160a01b03831660009081526009602052604090208054600160ff85161b179055611226565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610e25911515815260200190565b6000611271611c72565b600061128961127e610ff2565b601154859190611c54565b9050611296858583610e50565b50949350505050565b6112b5336000356001600160e01b031916611bab565b6112d15760405162461bcd60e51b8152600401610b76906124cf565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000610d54611335610ff2565b601154610e48565b6006546001600160a01b03163314806113d2575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061139190339030906001600160e01b03196000351690600401612573565b602060405180830381865afa1580156113ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d291906125a0565b6113db57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000831580611434575081155b15611440575081610f2b565b600061144c848661251e565b61145e85670de0b6b3a76400006125bd565b61146891906125d4565b9050600061147e82670de0b6b3a764000061250b565b611490670de0b6b3a7640000866125bd565b61149a91906125d4565b905060006114a8858361250b565b9050806000036114cb57604051632160733960e01b815260040160405180910390fd5b9695505050505050565b60006114df611c72565b60006114ec61127e610ff2565b90506114f88482611696565b509392505050565b60018054610c0f90612495565b7f00000000000000000000000000000000000000000000000000000000000000001561156557611549336000356001600160e01b031916611bab565b6115655760405162461bcd60e51b8152600401610b769061245e565b6110a48282611dec565b7f0000000000000000000000000000000000000000000000000000000000000000156115c7576115ab336000356001600160e01b031916611bab565b6115c75760405162461bcd60e51b8152600401610b769061245e565b336000908152600d602052604090205460ff1661160057600c548111156116005760405162461bcd60e51b8152600401610b7690612531565b61110a3382611d92565b6000611614611c72565b60115460000361163b573460118190556010819055611634903390611d92565b5034919050565b600061165961164960115490565b611651610ff2565b349190611c54565b9050346010600082825461166d919061251e565b925050819055508060116000828254611686919061251e565b90915550610d5490503334611d92565b336000908152600360205260408120805483919083906116b790849061250b565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061269683398151915290610d489086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156117985760405163b700961360e01b81526001600160a01b0382169063b70096139061174f90889088908890600401612573565b602060405180830381865afa15801561176c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179091906125a0565b915050610f2b565b6001600160e01b031983166000908152600a602052604090205460ff16806117f157506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b6000808361180886856125bd565b61181291906125d4565b90508060000361183557604051632160733960e01b815260040160405180910390fd5b949350505050565b4284101561188d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610b76565b60006001611899610f97565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156119a5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906119db5750876001600160a01b0316816001600160a01b0316145b611a185760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610b76565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611a97336000356001600160e01b031916611bab565b611ab35760405162461bcd60e51b8152600401610b76906124cf565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610f2b611b2460115490565b611b2c610ff2565b839190611c54565b60405162461bcd60e51b815260206004820152601b60248201527f6465706f7369744554483a204e6f7420496d706c656d656e74656400000000006044820152606401610b76565b60608060006060806000611b9e611b91610ff2565b6011546002549190611c54565b9296919550919350915050565b6007546000906001600160a01b03168015801590611c35575060405163b700961360e01b81526001600160a01b0382169063b700961390611bf490879030908890600401612573565b602060405180830381865afa158015611c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3591906125a0565b8061183557506006546001600160a01b03858116911614949350505050565b6000826000190484118302158202611c6b57600080fd5b5091020490565b6000611c7c611d3d565b90508015611c9c578060106000828254611c96919061251e565b90915550505b5042600f55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051611cd591906125f6565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600e54600003611d4f5750600090565b6000611d6d6301e13380600f5442611d67919061250b565b90611e4e565b90506000610f2b611d8983600e54611e6390919063ffffffff16565b60105490611e63565b8060026000828254611da4919061251e565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061269683398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611e1490849061250b565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061269683398151915290602001611de0565b6000610f2b83670de0b6b3a764000084611c54565b6000610f2b8383670de0b6b3a7640000611c54565b6001600160a01b038116811461110a57600080fd5b60008060408385031215611ea057600080fd5b8235611eab81611e78565b946020939093013593505050565b801515811461110a57600080fd5b60008060408385031215611eda57600080fd5b8235611ee581611e78565b91506020830135611ef581611eb9565b809150509250929050565b600060208284031215611f1257600080fd5b8135610f2b81611e78565b600060208083528351808285015260005b81811015611f4a57858101830151858201604001528201611f2e565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611f7d57600080fd5b5035919050565b80356001600160e01b031981168114611f9c57600080fd5b919050565b600060208284031215611fb357600080fd5b610f2b82611f84565b803560ff81168114611f9c57600080fd5b600080600060608486031215611fe257600080fd5b611feb84611fbc565b9250611ff960208501611f84565b9150604084013561200981611eb9565b809150509250925092565b60008060006060848603121561202957600080fd5b833561203481611e78565b9250602084013561204481611e78565b929592945050506040919091013590565b6000806040838503121561206857600080fd5b611ee583611f84565b60008060006060848603121561208657600080fd5b833561209181611e78565b9250611ff960208501611fbc565b600080604083850312156120b257600080fd5b82356120bd81611e78565b91506020830135611ef581611e78565b6000806000606084860312156120e257600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561210e57600080fd5b833561211981611e78565b9250602084013561212981611e78565b915061213760408501611f84565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561217f5761217f612140565b604052919050565b600067ffffffffffffffff8211156121a1576121a1612140565b5060051b60200190565b600082601f8301126121bc57600080fd5b813560206121d16121cc83612187565b612156565b82815260059290921b840181019181810190868411156121f057600080fd5b8286015b8481101561220b57803583529183019183016121f4565b509695505050505050565b6000806040838503121561222957600080fd5b823567ffffffffffffffff8082111561224157600080fd5b818501915085601f83011261225557600080fd5b813560206122656121cc83612187565b82815260059290921b8401810191818101908984111561228457600080fd5b948201945b838610156122ab57853561229c81611e78565b82529482019490820190612289565b965050860135925050808211156122c157600080fd5b506122ce858286016121ab565b9150509250929050565b600080600080600080600060e0888a0312156122f357600080fd5b87356122fe81611e78565b9650602088013561230e81611e78565b9550604088013594506060880135935061232a60808901611fbc565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561235957600080fd5b61236283611fbc565b915061237060208401611f84565b90509250929050565b6000806040838503121561238c57600080fd5b823561239781611e78565b915061237060208401611fbc565b600081518084526020808501945080840160005b838110156123d5578151875295820195908201906001016123b9565b509495945050505050565b6000606082016060835280865180835260808501915060808160051b8601019250602080890160005b8381101561243757607f198887030185526124258683516123a5565b95509382019390820190600101612409565b50508584038187015250505061244d81866123a5565b915050826040830152949350505050565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c908216806124a957607f821691505b6020821081036124c957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d5457610d546124f5565b80820180821115610d5457610d546124f5565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156125b257600080fd5b8151610f2b81611eb9565b8082028115828204841417610d5457610d546124f5565b6000826125f157634e487b7160e01b600052601260045260246000fd5b500490565b600080835481600182811c91508083168061261257607f831692505b6020808410820361263157634e487b7160e01b86526022600452602486fd5b818015612645576001811461265a57612687565b60ff1986168952841515850289019650612687565b60008a81526020902060005b8681101561267f5781548b820152908501908301612666565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b947239c96dcee5dcd78bef2e0874c1d9429301ce9cbcc30093daa681165a51d64736f6c63430008140033',
    methodIdentifiers: {
        "DOMAIN_SEPARATOR()": "3644e515",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "authority()": "bf7e214f",
        "balanceOf(address)": "70a08231",
        "burn(address,uint256)": "9dc29fac",
        "burn(uint256)": "42966c68",
        "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a",
        "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0",
        "calculateTVLs()": "ff9969cd",
        "canCall(address,address,bytes4)": "b7009613",
        "decimals()": "313ce567",
        "depositETH()": "f6326fb3",
        "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
        "doesUserHaveRole(address,uint8)": "ea7ca276",
        "ezETH()": "13a73c78",
        "getBufferedEther()": "47b714e0",
        "getPooledEthByShares(uint256)": "7a28fb88",
        "getRate()": "679aefce",
        "getRolesWithCapability(bytes4)": "ed0d0efb",
        "getSharesByPooledEth(uint256)": "19208451",
        "getTargetCustomAuthority(address)": "c53a3985",
        "getTotalPooledEther()": "37cfdaca",
        "getTotalShares()": "d5002f2e",
        "getUserRoles(address)": "06a36aee",
        "isCapabilityPublic(bytes4)": "0bade8a4",
        "isCompetitionMode()": "7a8c63b5",
        "isUnrestricted(address)": "aed30777",
        "lookupTokenAmountFromValue(address,uint256)": "37933625",
        "lookupTokenValue(address,uint256)": "0052e3fd",
        "lookupTokenValues(address[],uint256[])": "ba28a571",
        "maxMintAmount()": "239c70ae",
        "mint(address,uint256)": "40c10f19",
        "mint(uint256)": "a0712d68",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "owner()": "8da5cb5b",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "renzoOracle()": "892866a4",
        "setAuthority(address)": "7a9e5e4b",
        "setMaxMintAmount(uint256)": "088a4ed0",
        "setPublicCapability(bytes4,bool)": "4b5159da",
        "setRate(uint256)": "34fcf437",
        "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
        "setTargetCustomAuthority(address,address)": "728b952b",
        "setUnrestrictedMintStatus(address,bool)": "05f05a94",
        "setUserRole(address,uint8,bool)": "67aff484",
        "sharesOf(address)": "f5eb42dc",
        "submit(address)": "a1903eab",
        "symbol()": "95d89b41",
        "totalPooledEther()": "69415b86",
        "totalShares()": "3a98ef39",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b",
        "transferShares(address,uint256)": "8fcb4e5b",
        "transferSharesFrom(address,address,uint256)": "6d780459"
    }
};
