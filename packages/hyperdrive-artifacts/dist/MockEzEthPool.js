export const MockEzEthPool = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
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
            "name": "calculateMintAmount",
            "inputs": [
                {
                    "name": "_currentValueInProtocol",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_newValueAdded",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_existingEzETHSupply",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateRedeemAmount",
            "inputs": [
                {
                    "name": "_ezETHBeingBurned",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_existingEzETHSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_currentValueInProtocol",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateTVLs",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[][]",
                    "internalType": "uint256[][]"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
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
            "name": "depositETH",
            "inputs": [],
            "outputs": [],
            "stateMutability": "payable"
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
            "name": "ezETH",
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
            "name": "getBufferedEther",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "getPooledEthByShares",
            "inputs": [
                {
                    "name": "_sharesAmount",
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
            "name": "getSharesByPooledEth",
            "inputs": [
                {
                    "name": "_ethAmount",
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
            "name": "getTotalPooledEther",
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
            "name": "getTotalShares",
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
            "name": "isUnrestricted",
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
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lookupTokenAmountFromValue",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "lookupTokenValue",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "lookupTokenValues",
            "inputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "contract IERC20[]"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
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
            "name": "renzoOracle",
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
            "name": "setMaxMintAmount",
            "inputs": [
                {
                    "name": "_maxMintAmount",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "setUnrestrictedMintStatus",
            "inputs": [
                {
                    "name": "_target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_status",
                    "type": "bool",
                    "internalType": "bool"
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
            "name": "sharesOf",
            "inputs": [
                {
                    "name": "_account",
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
            "name": "submit",
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
            "stateMutability": "payable"
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
            "name": "totalPooledEther",
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
            "name": "totalShares",
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
            "name": "transferShares",
            "inputs": [
                {
                    "name": "_recipient",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_sharesAmount",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferSharesFrom",
            "inputs": [
                {
                    "name": "_sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_recipient",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_sharesAmount",
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
            "type": "error",
            "name": "InvalidTokenAmount",
            "inputs": []
        }
    ],
    bytecode: '0x61010060405234801562000011575f80fd5b5060405162002ab338038062002ab383398101604081905262000034916200020b565b6040518060400160405280600b81526020016a0a4cadcf4de40caf48aa8960ab1b815250604051806040016040528060058152602001640caf48aa8960db1b815250601285858582308181898989825f908162000092919062000302565b506001620000a1838262000302565b5060ff81166080524660a052620000b762000171565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a35050505090151560e052600c55505050600e94909455505042600f5550620004489050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620001a39190620003ce565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f805f80608085870312156200021f575f80fd5b845160208601519094506001600160a01b03811681146200023e575f80fd5b6040860151909350801515811462000254575f80fd5b6060959095015193969295505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200028d57607f821691505b602082108103620002ac57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002fd57805f5260205f20601f840160051c81016020851015620002d95750805b601f840160051c820191505b81811015620002fa575f8155600101620002e5565b50505b505050565b81516001600160401b038111156200031e576200031e62000264565b62000336816200032f845462000278565b84620002b2565b602080601f8311600181146200036c575f8415620003545750858301515b5f19600386901b1c1916600185901b178555620003c6565b5f85815260208120601f198616915b828110156200039c578886015182559484019460019091019084016200037b565b5085821015620003ba57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f808354620003dd8162000278565b60018281168015620003f857600181146200040e576200043c565b60ff19841687528215158302870194506200043c565b875f526020805f205f5b85811015620004335781548a82015290840190820162000418565b50505082870194505b50929695505050505050565b60805160a05160c05160e051612606620004ad5f395f818161072d01528181610b2e01528181610c3a01528181610ed001528181610fa4015281816110410152818161148f01526114f001525f610f6a01525f610f3501525f61054d01526126065ff3fe608060405260043610610370575f3560e01c80637a28fb88116101c8578063b7009613116100fd578063dd62ed3e1161009d578063f2fde38b1161006d578063f2fde38b14610a6a578063f5eb42dc14610a89578063f6326fb314610aa8578063ff9969cd14610ab0575f80fd5b8063dd62ed3e14610986578063e688747b146109bc578063ea7ca276146109fd578063ed0d0efb14610a3f575f80fd5b8063c53a3985116100d8578063c53a398514610900578063c5c83cb014610934578063d5002f2e14610953578063d505accf14610967575f80fd5b8063b7009613146108a8578063ba28a571146108c7578063bf7e214f146108e1575f80fd5b80638fcb4e5b11610168578063a0712d6811610143578063a0712d6814610829578063a1903eab14610848578063a9059cbb1461085b578063aed307771461087a575f80fd5b80638fcb4e5b146107d757806395d89b41146107f65780639dc29fac1461080a575f80fd5b80637ecebe00116101a35780637ecebe001461076e578063892866a4146104ae5780638da5cb5b146107995780638f686e6a146107b8575f80fd5b80637a28fb88146106fd5780637a8c63b51461071c5780637a9e5e4b1461074f575f80fd5b806334fcf437116102a957806347b714e01161024957806369415b861161021957806369415b861461067f5780636d7804591461069457806370a08231146106b3578063728b952b146106de575f80fd5b806347b714e01461061b5780634b5159da1461062d578063679aefce1461064c57806367aff48414610660575f80fd5b806337cfdaca1161028457806337cfdaca146105b45780633a98ef39146105c857806340c10f19146105dd57806342966c68146105fc575f80fd5b806334fcf437146105815780633644e515146105a05780633793362514610374575f80fd5b80630ea9b75b1161031457806319208451116102ef57806319208451146104e9578063239c70ae1461050857806323b872dd1461051d578063313ce5671461053c575f80fd5b80630ea9b75b1461048f57806313a73c78146104ae57806318160ddd146104d4575f80fd5b806306fdde031161034f57806306fdde03146103f2578063088a4ed014610413578063095ea7b3146104325780630bade8a414610461575f80fd5b806252e3fd1461037457806305f05a94146103a657806306a36aee146103c7575b5f80fd5b34801561037f575f80fd5b5061039361038e366004611de7565b610ad3565b6040519081526020015b60405180910390f35b3480156103b1575f80fd5b506103c56103c0366004611e1e565b610b2c565b005b3480156103d2575f80fd5b506103936103e1366004611e55565b60096020525f908152604090205481565b3480156103fd575f80fd5b50610406610bad565b60405161039d9190611e70565b34801561041e575f80fd5b506103c561042d366004611ebc565b610c38565b34801561043d575f80fd5b5061045161044c366004611de7565b610c94565b604051901515815260200161039d565b34801561046c575f80fd5b5061045161047b366004611eef565b600a6020525f908152604090205460ff1681565b34801561049a575f80fd5b506103c56104a9366004611f18565b610d00565b3480156104b9575f80fd5b50305b6040516001600160a01b03909116815260200161039d565b3480156104df575f80fd5b5061039360025481565b3480156104f4575f80fd5b50610393610503366004611ebc565b610dd5565b348015610513575f80fd5b50610393600c5481565b348015610528575f80fd5b50610451610537366004611f5c565b610df2565b348015610547575f80fd5b5061056f7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161039d565b34801561058c575f80fd5b506103c561059b366004611ebc565b610ece565b3480156105ab575f80fd5b50610393610f32565b3480156105bf575f80fd5b50610393610f8c565b3480156105d3575f80fd5b5061039360115481565b3480156105e8575f80fd5b506103c56105f7366004611de7565b610fa2565b348015610607575f80fd5b506103c5610616366004611ebc565b61103f565b348015610626575f80fd5b505f610393565b348015610638575f80fd5b506103c5610647366004611f9a565b6110a3565b348015610657575f80fd5b50600e54610393565b34801561066b575f80fd5b506103c561067a366004611fb4565b611133565b34801561068a575f80fd5b5061039360105481565b34801561069f575f80fd5b506103936106ae366004611f5c565b6111f8565b3480156106be575f80fd5b506103936106cd366004611e55565b60036020525f908152604090205481565b3480156106e9575f80fd5b506103c56106f8366004611fdf565b61122e565b348015610708575f80fd5b50610393610717366004611ebc565b6112b5565b348015610727575f80fd5b506104517f000000000000000000000000000000000000000000000000000000000000000081565b34801561075a575f80fd5b506103c5610769366004611e55565b6112c9565b348015610779575f80fd5b50610393610788366004611e55565b60056020525f908152604090205481565b3480156107a4575f80fd5b506006546104bc906001600160a01b031681565b3480156107c3575f80fd5b506103936107d236600461200b565b6113ae565b3480156107e2575f80fd5b506103936107f1366004611de7565b611457565b348015610801575f80fd5b50610406611480565b348015610815575f80fd5b506103c5610824366004611de7565b61148d565b348015610834575f80fd5b506103c5610843366004611ebc565b6114ee565b610393610856366004611e55565b611587565b348015610866575f80fd5b50610451610875366004611de7565b61160e565b348015610885575f80fd5b50610451610894366004611e55565b600d6020525f908152604090205460ff1681565b3480156108b3575f80fd5b506104516108c2366004612034565b611671565b3480156108d2575f80fd5b5061039361038e36600461214c565b3480156108ec575f80fd5b506007546104bc906001600160a01b031681565b34801561090b575f80fd5b506104bc61091a366004611e55565b60086020525f90815260409020546001600160a01b031681565b34801561093f575f80fd5b5061039361094e36600461200b565b61176a565b34801561095e575f80fd5b50601154610393565b348015610972575f80fd5b506103c5610981366004612208565b6117ab565b348015610991575f80fd5b506103936109a0366004611fdf565b600460209081525f928352604080842090915290825290205481565b3480156109c7575f80fd5b506104516109d6366004612271565b6001600160e01b0319165f908152600b602052604090205460ff919091161c600116151590565b348015610a08575f80fd5b50610451610a173660046122a2565b6001600160a01b03919091165f90815260096020526040902054600160ff9092161c16151590565b348015610a4a575f80fd5b50610393610a59366004611eef565b600b6020525f908152604090205481565b348015610a75575f80fd5b506103c5610a84366004611e55565b6119e9565b348015610a94575f80fd5b50610393610aa3366004611e55565b611a65565b6103c5611a99565b348015610abb575f80fd5b50610ac4611ae1565b60405161039d93929190612306565b60405162461bcd60e51b815260206004820152602160248201527f6c6f6f6b7570546f6b656e56616c75653a204e6f7420496d706c656d656e74656044820152601960fa1b60648201525f906084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000015610b8357610b67335f356001600160e01b031916611b0e565b610b835760405162461bcd60e51b8152600401610b2390612383565b6001600160a01b03919091165f908152600d60205260409020805460ff1916911515919091179055565b5f8054610bb9906123ba565b80601f0160208091040260200160405190810160405280929190818152602001828054610be5906123ba565b8015610c305780601f10610c0757610100808354040283529160200191610c30565b820191905f5260205f20905b815481529060010190602001808311610c1357829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000015610c8f57610c73335f356001600160e01b031916611b0e565b610c8f5760405162461bcd60e51b8152600401610b2390612383565b600c55565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610cee9086815260200190565b60405180910390a35060015b92915050565b610d15335f356001600160e01b031916611b0e565b610d315760405162461bcd60e51b8152600401610b23906123f2565b8015610d60576001600160e01b031982165f908152600b602052604090208054600160ff86161b179055610d86565b6001600160e01b031982165f908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610dc8911515815260200190565b60405180910390a3505050565b5f610cfa610de260115490565b610dea610f8c565b849190611bb4565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f198114610e4b57610e27838261242c565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610e7290849061242c565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716905f805160206125b183398151915290610eb99087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610f2557610f09335f356001600160e01b031916611b0e565b610f255760405162461bcd60e51b8152600401610b2390612383565b610f2d611bcf565b600e55565b5f7f00000000000000000000000000000000000000000000000000000000000000004614610f6757610f62611bfe565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b5f610f95611c96565b601054610f62919061243f565b7f000000000000000000000000000000000000000000000000000000000000000015610ff957610fdd335f356001600160e01b031916611b0e565b610ff95760405162461bcd60e51b8152600401610b2390612383565b335f908152600d602052604090205460ff1661103157600c548111156110315760405162461bcd60e51b8152600401610b2390612452565b61103b8282611cf5565b5050565b7f0000000000000000000000000000000000000000000000000000000000000000156110965761107a335f356001600160e01b031916611b0e565b6110965760405162461bcd60e51b8152600401610b2390612383565b6110a03382611d4c565b50565b6110b8335f356001600160e01b031916611b0e565b6110d45760405162461bcd60e51b8152600401610b23906123f2565b6001600160e01b031982165f818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b611148335f356001600160e01b031916611b0e565b6111645760405162461bcd60e51b8152600401610b23906123f2565b8015611192576001600160a01b0383165f9081526009602052604090208054600160ff85161b1790556111b7565b6001600160a01b0383165f9081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610dc8911515815260200190565b5f611201611bcf565b5f61121861120d610f8c565b601154859190611bb4565b9050611225858583610df2565b50949350505050565b611243335f356001600160e01b031916611b0e565b61125f5760405162461bcd60e51b8152600401610b23906123f2565b6001600160a01b038281165f8181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b5f610cfa6112c1610f8c565b601154610dea565b6006546001600160a01b031633148061135b575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061131c90339030906001600160e01b03195f351690600401612494565b602060405180830381865afa158015611337573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061135b91906124c1565b611363575f80fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b5f8315806113ba575081155b156113c6575081610ec7565b5f6113d1848661243f565b6113e385670de0b6b3a76400006124dc565b6113ed91906124f3565b90505f61140282670de0b6b3a764000061242c565b611414670de0b6b3a7640000866124dc565b61141e91906124f3565b90505f61142b858361242c565b9050805f0361144d57604051632160733960e01b815260040160405180910390fd5b9695505050505050565b5f611460611bcf565b5f61146c61120d610f8c565b9050611478848261160e565b509392505050565b60018054610bb9906123ba565b7f0000000000000000000000000000000000000000000000000000000000000000156114e4576114c8335f356001600160e01b031916611b0e565b6114e45760405162461bcd60e51b8152600401610b2390612383565b61103b8282611d4c565b7f00000000000000000000000000000000000000000000000000000000000000001561154557611529335f356001600160e01b031916611b0e565b6115455760405162461bcd60e51b8152600401610b2390612383565b335f908152600d602052604090205460ff1661157d57600c5481111561157d5760405162461bcd60e51b8152600401610b2390612452565b6110a03382611cf5565b5f611590611bcf565b6011545f036115b65734601181905560108190556115af903390611cf5565b5034919050565b5f6115d36115c360115490565b6115cb610f8c565b349190611bb4565b90503460105f8282546115e6919061243f565b925050819055508060115f8282546115fe919061243f565b90915550610cfa90503334611cf5565b335f9081526003602052604081208054839190839061162e90849061242c565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133905f805160206125b183398151915290610cee9086815260200190565b6001600160a01b038083165f90815260086020526040812054909116801561170a5760405163b700961360e01b81526001600160a01b0382169063b7009613906116c390889088908890600401612494565b602060405180830381865afa1580156116de573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061170291906124c1565b915050610ec7565b6001600160e01b031983165f908152600a602052604090205460ff168061176157506001600160e01b031983165f908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b5f808361177786856124dc565b61178191906124f3565b9050805f036117a357604051632160733960e01b815260040160405180910390fd5b949350505050565b428410156117fb5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610b23565b5f6001611806610f32565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561190e573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906119445750876001600160a01b0316816001600160a01b0316145b6119815760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610b23565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6119fe335f356001600160e01b031916611b0e565b611a1a5760405162461bcd60e51b8152600401610b23906123f2565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a350565b6001600160a01b0381165f90815260036020526040812054610ec7611a8960115490565b611a91610f8c565b839190611bb4565b60405162461bcd60e51b815260206004820152601b60248201527f6465706f7369744554483a204e6f7420496d706c656d656e74656400000000006044820152606401610b23565b6060805f6060805f611b01611af4610f8c565b6011546002549190611bb4565b9296919550919350915050565b6007545f906001600160a01b03168015801590611b95575060405163b700961360e01b81526001600160a01b0382169063b700961390611b5690879030908890600401612494565b602060405180830381865afa158015611b71573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b9591906124c1565b806117a357506006546001600160a01b03858116911614949350505050565b5f825f190484118302158202611bc8575f80fd5b5091020490565b5f611bd8611c96565b90508015611bf7578060105f828254611bf1919061243f565b90915550505b5042600f55565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051611c2e9190612512565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f600e545f03611ca557505f90565b600f54421015611cb457505f90565b5f611cd16301e13380600f5442611ccb919061242c565b90611dab565b90505f610ec7611cec83600e54611dbf90919063ffffffff16565b60105490611dbf565b8060025f828254611d06919061243f565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481525f805160206125b183398151915291015b60405180910390a35050565b6001600160a01b0382165f9081526003602052604081208054839290611d7390849061242c565b90915550506002805482900390556040518181525f906001600160a01b038416905f805160206125b183398151915290602001611d40565b5f610ec783670de0b6b3a764000084611bb4565b5f610ec78383670de0b6b3a7640000611bb4565b6001600160a01b03811681146110a0575f80fd5b5f8060408385031215611df8575f80fd5b8235611e0381611dd3565b946020939093013593505050565b80151581146110a0575f80fd5b5f8060408385031215611e2f575f80fd5b8235611e3a81611dd3565b91506020830135611e4a81611e11565b809150509250929050565b5f60208284031215611e65575f80fd5b8135610ec781611dd3565b5f602080835283518060208501525f5b81811015611e9c57858101830151858201604001528201611e80565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215611ecc575f80fd5b5035919050565b80356001600160e01b031981168114611eea575f80fd5b919050565b5f60208284031215611eff575f80fd5b610ec782611ed3565b803560ff81168114611eea575f80fd5b5f805f60608486031215611f2a575f80fd5b611f3384611f08565b9250611f4160208501611ed3565b91506040840135611f5181611e11565b809150509250925092565b5f805f60608486031215611f6e575f80fd5b8335611f7981611dd3565b92506020840135611f8981611dd3565b929592945050506040919091013590565b5f8060408385031215611fab575f80fd5b611e3a83611ed3565b5f805f60608486031215611fc6575f80fd5b8335611fd181611dd3565b9250611f4160208501611f08565b5f8060408385031215611ff0575f80fd5b8235611ffb81611dd3565b91506020830135611e4a81611dd3565b5f805f6060848603121561201d575f80fd5b505081359360208301359350604090920135919050565b5f805f60608486031215612046575f80fd5b833561205181611dd3565b9250602084013561206181611dd3565b915061206f60408501611ed3565b90509250925092565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff811182821017156120b5576120b5612078565b604052919050565b5f67ffffffffffffffff8211156120d6576120d6612078565b5060051b60200190565b5f82601f8301126120ef575f80fd5b813560206121046120ff836120bd565b61208c565b8083825260208201915060208460051b870101935086841115612125575f80fd5b602086015b84811015612141578035835291830191830161212a565b509695505050505050565b5f806040838503121561215d575f80fd5b823567ffffffffffffffff80821115612174575f80fd5b818501915085601f830112612187575f80fd5b813560206121976120ff836120bd565b82815260059290921b840181019181810190898411156121b5575f80fd5b948201945b838610156121dc5785356121cd81611dd3565b825294820194908201906121ba565b965050860135925050808211156121f1575f80fd5b506121fe858286016120e0565b9150509250929050565b5f805f805f805f60e0888a03121561221e575f80fd5b873561222981611dd3565b9650602088013561223981611dd3565b9550604088013594506060880135935061225560808901611f08565b925060a0880135915060c0880135905092959891949750929550565b5f8060408385031215612282575f80fd5b61228b83611f08565b915061229960208401611ed3565b90509250929050565b5f80604083850312156122b3575f80fd5b82356122be81611dd3565b915061229960208401611f08565b5f815180845260208085019450602084015f5b838110156122fb578151875295820195908201906001016122df565b509495945050505050565b5f606082016060835280865180835260808501915060808160051b860101925060208089015f5b8381101561235b57607f198887030185526123498683516122cc565b9550938201939082019060010161232d565b5050505050828103602084015261237281866122cc565b915050826040830152949350505050565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c908216806123ce57607f821691505b6020821081036123ec57634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610cfa57610cfa612418565b80820180821115610cfa57610cfa612418565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f602082840312156124d1575f80fd5b8151610ec781611e11565b8082028115828204841417610cfa57610cfa612418565b5f8261250d57634e487b7160e01b5f52601260045260245ffd5b500490565b5f8083545f60018260011c9150600183168061252f57607f831692505b6020808410820361254e57634e487b7160e01b5f52602260045260245ffd5b8180156125625760018114612577576125a2565b60ff19861689528415158502890196506125a2565b5f8a8152602090205f5b8681101561259a5781548b820152908501908301612581565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212207154da725d6f461fbef0efcf8b3dc2c552d02fa4a8150398fbbd6cacba65289864736f6c63430008160033',
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
