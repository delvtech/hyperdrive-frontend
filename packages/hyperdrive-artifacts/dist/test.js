export const test = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "log",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "log_address",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "val",
                    "type": "uint256[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "int256[]",
                    "name": "val",
                    "type": "int256[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "val",
                    "type": "address[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "log_bytes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "log_bytes32",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "name": "log_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "val",
                    "type": "address"
                }
            ],
            "name": "log_named_address",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "val",
                    "type": "uint256[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256[]",
                    "name": "val",
                    "type": "int256[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "val",
                    "type": "address[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "val",
                    "type": "bytes"
                }
            ],
            "name": "log_named_bytes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "val",
                    "type": "bytes32"
                }
            ],
            "name": "log_named_bytes32",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "val",
                    "type": "int256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                }
            ],
            "name": "log_named_decimal_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                }
            ],
            "name": "log_named_decimal_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "val",
                    "type": "int256"
                }
            ],
            "name": "log_named_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "val",
                    "type": "string"
                }
            ],
            "name": "log_named_string",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                }
            ],
            "name": "log_named_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "log_string",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "log_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "logs",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "IS_TEST",
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
            "name": "excludeArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "excludedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedSenders_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "failed",
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
            "name": "targetArtifactSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedArtifactSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "targetedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedSenders_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "IS_TEST()": "fa7626d4",
        "excludeArtifacts()": "b5508aa9",
        "excludeContracts()": "e20c9f71",
        "excludeSenders()": "1ed7831c",
        "failed()": "ba414fa6",
        "targetArtifactSelectors()": "66d9a9a0",
        "targetArtifacts()": "85226c81",
        "targetContracts()": "3f7286f4",
        "targetSelectors()": "916a17c6",
        "targetSenders()": "3e5e3c23"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Test.sol\":\"Test\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdError.sol\":{\"keccak256\":\"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6\",\"dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj\"]},\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Test.sol\":{\"keccak256\":\"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765\",\"dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]}},\"version\":1}",
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
                            "internalType": "string",
                            "name": "",
                            "type": "string",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_address",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "val",
                            "type": "uint256[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256[]",
                            "name": "val",
                            "type": "int256[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address[]",
                            "name": "val",
                            "type": "address[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_bytes",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_bytes32",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_int",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "address",
                            "name": "val",
                            "type": "address",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_address",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "val",
                            "type": "uint256[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "int256[]",
                            "name": "val",
                            "type": "int256[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "address[]",
                            "name": "val",
                            "type": "address[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_array",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "bytes",
                            "name": "val",
                            "type": "bytes",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_bytes",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "bytes32",
                            "name": "val",
                            "type": "bytes32",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_bytes32",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "int256",
                            "name": "val",
                            "type": "int256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_decimal_int",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "val",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_decimal_uint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "int256",
                            "name": "val",
                            "type": "int256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_int",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "string",
                            "name": "val",
                            "type": "string",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_string",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "key",
                            "type": "string",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "val",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_named_uint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_string",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "log_uint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "logs",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "IS_TEST",
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
                    "name": "excludeArtifacts",
                    "outputs": [
                        {
                            "internalType": "string[]",
                            "name": "excludedArtifacts_",
                            "type": "string[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "excludeContracts",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "excludedContracts_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "excludeSenders",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "excludedSenders_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "failed",
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
                    "name": "targetArtifactSelectors",
                    "outputs": [
                        {
                            "internalType": "struct StdInvariant.FuzzSelector[]",
                            "name": "targetedArtifactSelectors_",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "addr",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes4[]",
                                    "name": "selectors",
                                    "type": "bytes4[]"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetArtifacts",
                    "outputs": [
                        {
                            "internalType": "string[]",
                            "name": "targetedArtifacts_",
                            "type": "string[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetContracts",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "targetedContracts_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetSelectors",
                    "outputs": [
                        {
                            "internalType": "struct StdInvariant.FuzzSelector[]",
                            "name": "targetedSelectors_",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "addr",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes4[]",
                                    "name": "selectors",
                                    "type": "bytes4[]"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetSenders",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "targetedSenders_",
                            "type": "address[]"
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
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
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
                "lib/forge-std/src/Test.sol": "Test"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/lib/ds-test/src/test.sol": {
                "keccak256": "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b",
                "urls": [
                    "bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240",
                    "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"
                ],
                "license": "GPL-3.0-or-later"
            },
            "lib/forge-std/src/Base.sol": {
                "keccak256": "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
                "urls": [
                    "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
                    "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdAssertions.sol": {
                "keccak256": "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
                "urls": [
                    "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
                    "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdChains.sol": {
                "keccak256": "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
                "urls": [
                    "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
                    "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdCheats.sol": {
                "keccak256": "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5",
                "urls": [
                    "bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a",
                    "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdError.sol": {
                "keccak256": "0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77",
                "urls": [
                    "bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6",
                    "dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdInvariant.sol": {
                "keccak256": "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
                "urls": [
                    "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
                    "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdJson.sol": {
                "keccak256": "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
                "urls": [
                    "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
                    "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdMath.sol": {
                "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
                "urls": [
                    "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
                    "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdStorage.sol": {
                "keccak256": "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
                "urls": [
                    "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
                    "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdStyle.sol": {
                "keccak256": "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
                "urls": [
                    "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
                    "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdUtils.sol": {
                "keccak256": "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
                "urls": [
                    "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
                    "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/Test.sol": {
                "keccak256": "0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0",
                "urls": [
                    "bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765",
                    "dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/Vm.sol": {
                "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
                "urls": [
                    "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
                    "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/console.sol": {
                "keccak256": "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
                "urls": [
                    "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
                    "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/console2.sol": {
                "keccak256": "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
                "urls": [
                    "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
                    "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/interfaces/IMulticall3.sol": {
                "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
                "urls": [
                    "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
                    "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/safeconsole.sol": {
                "keccak256": "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381",
                "urls": [
                    "bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae",
                    "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/Test.sol",
        "id": 34961,
        "exportedSymbols": {
            "DSTest": [
                25326
            ],
            "StdAssertions": [
                26819
            ],
            "StdChains": [
                27539
            ],
            "StdCheats": [
                30357
            ],
            "StdInvariant": [
                30647
            ],
            "StdStorage": [
                31397
            ],
            "StdStyle": [
                34061
            ],
            "StdUtils": [
                34909
            ],
            "Test": [
                34960
            ],
            "TestBase": [
                25392
            ],
            "Vm": [
                36497
            ],
            "console": [
                44561
            ],
            "console2": [
                52686
            ],
            "safeconsole": [
                65924
            ],
            "stdError": [
                30423
            ],
            "stdJson": [
                31223
            ],
            "stdMath": [
                31365
            ],
            "stdStorage": [
                32850
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:1126:106",
        "nodes": [
            {
                "id": 34911,
                "nodeType": "PragmaDirective",
                "src": "32:31:106",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".2",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 34912,
                "nodeType": "PragmaDirective",
                "src": "65:33:106",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 34914,
                "nodeType": "ImportDirective",
                "src": "160:38:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console.sol",
                "file": "./console.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 44562,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34913,
                            "name": "console",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44561,
                            "src": "168:7:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34916,
                "nodeType": "ImportDirective",
                "src": "199:40:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console2.sol",
                "file": "./console2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 52687,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34915,
                            "name": "console2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52686,
                            "src": "207:8:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34918,
                "nodeType": "ImportDirective",
                "src": "240:46:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/safeconsole.sol",
                "file": "./safeconsole.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 65925,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34917,
                            "name": "safeconsole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65924,
                            "src": "248:11:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34920,
                "nodeType": "ImportDirective",
                "src": "287:50:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdAssertions.sol",
                "file": "./StdAssertions.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 26820,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34919,
                            "name": "StdAssertions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26819,
                            "src": "295:13:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34922,
                "nodeType": "ImportDirective",
                "src": "338:42:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdChains.sol",
                "file": "./StdChains.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 27540,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34921,
                            "name": "StdChains",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27539,
                            "src": "346:9:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34924,
                "nodeType": "ImportDirective",
                "src": "381:42:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdCheats.sol",
                "file": "./StdCheats.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 30358,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34923,
                            "name": "StdCheats",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30357,
                            "src": "389:9:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34926,
                "nodeType": "ImportDirective",
                "src": "424:40:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdError.sol",
                "file": "./StdError.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 30424,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34925,
                            "name": "stdError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30423,
                            "src": "432:8:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34928,
                "nodeType": "ImportDirective",
                "src": "465:48:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdInvariant.sol",
                "file": "./StdInvariant.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 30648,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34927,
                            "name": "StdInvariant",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30647,
                            "src": "473:12:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34930,
                "nodeType": "ImportDirective",
                "src": "514:38:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdJson.sol",
                "file": "./StdJson.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 31224,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34929,
                            "name": "stdJson",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31223,
                            "src": "522:7:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34932,
                "nodeType": "ImportDirective",
                "src": "553:38:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdMath.sol",
                "file": "./StdMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 31366,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34931,
                            "name": "stdMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31365,
                            "src": "561:7:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34935,
                "nodeType": "ImportDirective",
                "src": "592:56:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdStorage.sol",
                "file": "./StdStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 32851,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34933,
                            "name": "StdStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31397,
                            "src": "600:10:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 34934,
                            "name": "stdStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32850,
                            "src": "612:10:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34937,
                "nodeType": "ImportDirective",
                "src": "649:40:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdStyle.sol",
                "file": "./StdStyle.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 34062,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34936,
                            "name": "StdStyle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34061,
                            "src": "657:8:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34939,
                "nodeType": "ImportDirective",
                "src": "690:40:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdUtils.sol",
                "file": "./StdUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 34910,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34938,
                            "name": "StdUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34909,
                            "src": "698:8:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34941,
                "nodeType": "ImportDirective",
                "src": "731:28:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 36498,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34940,
                            "name": "Vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36497,
                            "src": "739:2:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34943,
                "nodeType": "ImportDirective",
                "src": "781:36:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Base.sol",
                "file": "./Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 25402,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34942,
                            "name": "TestBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25392,
                            "src": "789:8:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34945,
                "nodeType": "ImportDirective",
                "src": "818:40:106",
                "nodes": [],
                "absolutePath": "lib/forge-std/lib/ds-test/src/test.sol",
                "file": "ds-test/test.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 34961,
                "sourceUnit": 25327,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34944,
                            "name": "DSTest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25326,
                            "src": "826:6:106",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 34960,
                "nodeType": "ContractDefinition",
                "src": "875:282:106",
                "nodes": [],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 34946,
                            "name": "TestBase",
                            "nameLocations": [
                                "901:8:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 25392,
                            "src": "901:8:106"
                        },
                        "id": 34947,
                        "nodeType": "InheritanceSpecifier",
                        "src": "901:8:106"
                    },
                    {
                        "baseName": {
                            "id": 34948,
                            "name": "DSTest",
                            "nameLocations": [
                                "911:6:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 25326,
                            "src": "911:6:106"
                        },
                        "id": 34949,
                        "nodeType": "InheritanceSpecifier",
                        "src": "911:6:106"
                    },
                    {
                        "baseName": {
                            "id": 34950,
                            "name": "StdAssertions",
                            "nameLocations": [
                                "919:13:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 26819,
                            "src": "919:13:106"
                        },
                        "id": 34951,
                        "nodeType": "InheritanceSpecifier",
                        "src": "919:13:106"
                    },
                    {
                        "baseName": {
                            "id": 34952,
                            "name": "StdChains",
                            "nameLocations": [
                                "934:9:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 27539,
                            "src": "934:9:106"
                        },
                        "id": 34953,
                        "nodeType": "InheritanceSpecifier",
                        "src": "934:9:106"
                    },
                    {
                        "baseName": {
                            "id": 34954,
                            "name": "StdCheats",
                            "nameLocations": [
                                "945:9:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 30357,
                            "src": "945:9:106"
                        },
                        "id": 34955,
                        "nodeType": "InheritanceSpecifier",
                        "src": "945:9:106"
                    },
                    {
                        "baseName": {
                            "id": 34956,
                            "name": "StdInvariant",
                            "nameLocations": [
                                "956:12:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 30647,
                            "src": "956:12:106"
                        },
                        "id": 34957,
                        "nodeType": "InheritanceSpecifier",
                        "src": "956:12:106"
                    },
                    {
                        "baseName": {
                            "id": 34958,
                            "name": "StdUtils",
                            "nameLocations": [
                                "970:8:106"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 34909,
                            "src": "970:8:106"
                        },
                        "id": 34959,
                        "nodeType": "InheritanceSpecifier",
                        "src": "970:8:106"
                    }
                ],
                "canonicalName": "Test",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    34960,
                    34909,
                    30647,
                    30357,
                    29593,
                    27539,
                    26819,
                    25326,
                    25392,
                    25389
                ],
                "name": "Test",
                "nameLocation": "893:4:106",
                "scope": 34961,
                "usedErrors": [],
                "usedEvents": [
                    23040,
                    23044,
                    23048,
                    23052,
                    23056,
                    23060,
                    23064,
                    23068,
                    23074,
                    23080,
                    23088,
                    23096,
                    23102,
                    23108,
                    23114,
                    23120,
                    25414,
                    25419,
                    25424,
                    25431,
                    25438,
                    25445
                ]
            }
        ],
        "license": "MIT"
    },
    "id": 106
};
