export const IRocketStorage = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "addUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "confirmGuardian",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "confirmWithdrawalAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBytes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteBytes32",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteInt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteString",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "deleteUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getAddress",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBool",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBytes",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getBytes32",
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
            "inputs": [],
            "name": "getDeployedStatus",
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
            "name": "getGuardian",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getInt",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "getNodePendingWithdrawalAddress",
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
                    "name": "_nodeAddress",
                    "type": "address"
                }
            ],
            "name": "getNodeWithdrawalAddress",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getString",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                }
            ],
            "name": "getUint",
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
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_value",
                    "type": "address"
                }
            ],
            "name": "setAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bool",
                    "name": "_value",
                    "type": "bool"
                }
            ],
            "name": "setBool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "_value",
                    "type": "bytes"
                }
            ],
            "name": "setBytes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_value",
                    "type": "bytes32"
                }
            ],
            "name": "setBytes32",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_newAddress",
                    "type": "address"
                }
            ],
            "name": "setGuardian",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "int256",
                    "name": "_value",
                    "type": "int256"
                }
            ],
            "name": "setInt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_value",
                    "type": "string"
                }
            ],
            "name": "setString",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setUint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nodeAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_newWithdrawalAddress",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_confirm",
                    "type": "bool"
                }
            ],
            "name": "setWithdrawalAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "subUint",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        "addUint(bytes32,uint256)": "adb353dc",
        "confirmGuardian()": "1e0ea61e",
        "confirmWithdrawalAddress(address)": "bd439126",
        "deleteAddress(bytes32)": "0e14a376",
        "deleteBool(bytes32)": "2c62ff2d",
        "deleteBytes(bytes32)": "616b59f6",
        "deleteBytes32(bytes32)": "0b9adc57",
        "deleteInt(bytes32)": "8c160095",
        "deleteString(bytes32)": "f6bb3cc4",
        "deleteUint(bytes32)": "e2b202bf",
        "getAddress(bytes32)": "21f8a721",
        "getBool(bytes32)": "7ae1cfca",
        "getBytes(bytes32)": "c031a180",
        "getBytes32(bytes32)": "a6ed563e",
        "getDeployedStatus()": "1bed5241",
        "getGuardian()": "a75b87d2",
        "getInt(bytes32)": "dc97d962",
        "getNodePendingWithdrawalAddress(address)": "fd412513",
        "getNodeWithdrawalAddress(address)": "5b49ff62",
        "getString(bytes32)": "986e791a",
        "getUint(bytes32)": "bd02d0f5",
        "setAddress(bytes32,address)": "ca446dd9",
        "setBool(bytes32,bool)": "abfdcced",
        "setBytes(bytes32,bytes)": "2e28d084",
        "setBytes32(bytes32,bytes32)": "4e91db08",
        "setGuardian(address)": "8a0dac4a",
        "setInt(bytes32,int256)": "3e49bed0",
        "setString(bytes32,string)": "6e899550",
        "setUint(bytes32,uint256)": "e2a4853a",
        "setWithdrawalAddress(address,address,bool)": "a543ccea",
        "subUint(bytes32,uint256)": "ebb9d8c9"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"confirmGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"confirmWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGuardian\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodePendingWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodeWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_value\",\"type\":\"address\"}],\"name\":\"setAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"setBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newAddress\",\"type\":\"address\"}],\"name\":\"setGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"int256\",\"name\":\"_value\",\"type\":\"int256\"}],\"name\":\"setInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"}],\"name\":\"setString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newWithdrawalAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_confirm\",\"type\":\"bool\"}],\"name\":\"setWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"subUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketStorage.sol\":\"IRocketStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketStorage.sol\":{\"keccak256\":\"0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308\",\"dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM\"]}},\"version\":1}",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "addUint"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "confirmGuardian"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_nodeAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "confirmWithdrawalAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteBool"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteBytes"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteBytes32"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteInt"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteString"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteUint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getAddress",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBool",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBytes",
                    "outputs": [
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBytes32",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getDeployedStatus",
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
                    "name": "getGuardian",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getInt",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_nodeAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getNodePendingWithdrawalAddress",
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
                            "name": "_nodeAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getNodeWithdrawalAddress",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getString",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getUint",
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
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "_value",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bool",
                            "name": "_value",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setBool"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes",
                            "name": "_value",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setBytes"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "_value",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setBytes32"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_newAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setGuardian"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "int256",
                            "name": "_value",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setInt"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "string",
                            "name": "_value",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setString"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setUint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_nodeAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_newWithdrawalAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "_confirm",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setWithdrawalAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_key",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "subUint"
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
                "contracts/src/interfaces/IRocketStorage.sol": "IRocketStorage"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IRocketStorage.sol": {
                "keccak256": "0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944",
                "urls": [
                    "bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308",
                    "dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IRocketStorage.sol",
        "id": 12658,
        "exportedSymbols": {
            "IRocketStorage": [
                12657
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2256:107",
        "nodes": [
            {
                "id": 12463,
                "nodeType": "PragmaDirective",
                "src": "39:23:107",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 12657,
                "nodeType": "ContractDefinition",
                "src": "64:2230:107",
                "nodes": [
                    {
                        "id": 12468,
                        "nodeType": "FunctionDefinition",
                        "src": "116:58:107",
                        "nodes": [],
                        "functionSelector": "1bed5241",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getDeployedStatus",
                        "nameLocation": "125:17:107",
                        "parameters": {
                            "id": 12464,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "142:2:107"
                        },
                        "returnParameters": {
                            "id": 12467,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12466,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12468,
                                    "src": "168:4:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12465,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "168:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "167:6:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12473,
                        "nodeType": "FunctionDefinition",
                        "src": "196:55:107",
                        "nodes": [],
                        "functionSelector": "a75b87d2",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGuardian",
                        "nameLocation": "205:11:107",
                        "parameters": {
                            "id": 12469,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "216:2:107"
                        },
                        "returnParameters": {
                            "id": 12472,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12471,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12473,
                                    "src": "242:7:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12470,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "242:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "241:9:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12478,
                        "nodeType": "FunctionDefinition",
                        "src": "257:51:107",
                        "nodes": [],
                        "functionSelector": "8a0dac4a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGuardian",
                        "nameLocation": "266:11:107",
                        "parameters": {
                            "id": 12476,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12475,
                                    "mutability": "mutable",
                                    "name": "_newAddress",
                                    "nameLocation": "286:11:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12478,
                                    "src": "278:19:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12474,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "278:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "277:21:107"
                        },
                        "returnParameters": {
                            "id": 12477,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "307:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12481,
                        "nodeType": "FunctionDefinition",
                        "src": "314:36:107",
                        "nodes": [],
                        "functionSelector": "1e0ea61e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "confirmGuardian",
                        "nameLocation": "323:15:107",
                        "parameters": {
                            "id": 12479,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "338:2:107"
                        },
                        "returnParameters": {
                            "id": 12480,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "349:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12488,
                        "nodeType": "FunctionDefinition",
                        "src": "371:66:107",
                        "nodes": [],
                        "functionSelector": "21f8a721",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAddress",
                        "nameLocation": "380:10:107",
                        "parameters": {
                            "id": 12484,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12483,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "399:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12488,
                                    "src": "391:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12482,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "391:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "390:14:107"
                        },
                        "returnParameters": {
                            "id": 12487,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12486,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12488,
                                    "src": "428:7:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12485,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "428:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "427:9:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12495,
                        "nodeType": "FunctionDefinition",
                        "src": "443:60:107",
                        "nodes": [],
                        "functionSelector": "bd02d0f5",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUint",
                        "nameLocation": "452:7:107",
                        "parameters": {
                            "id": 12491,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12490,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "468:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12495,
                                    "src": "460:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12489,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "460:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "459:14:107"
                        },
                        "returnParameters": {
                            "id": 12494,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12493,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12495,
                                    "src": "497:4:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12492,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "497:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "496:6:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12502,
                        "nodeType": "FunctionDefinition",
                        "src": "509:71:107",
                        "nodes": [],
                        "functionSelector": "986e791a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getString",
                        "nameLocation": "518:9:107",
                        "parameters": {
                            "id": 12498,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12497,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "536:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12502,
                                    "src": "528:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12496,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "528:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "527:14:107"
                        },
                        "returnParameters": {
                            "id": 12501,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12500,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12502,
                                    "src": "565:13:107",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 12499,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "565:6:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "564:15:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12509,
                        "nodeType": "FunctionDefinition",
                        "src": "586:69:107",
                        "nodes": [],
                        "functionSelector": "c031a180",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBytes",
                        "nameLocation": "595:8:107",
                        "parameters": {
                            "id": 12505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12504,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "612:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12509,
                                    "src": "604:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12503,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "604:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "603:14:107"
                        },
                        "returnParameters": {
                            "id": 12508,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12507,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12509,
                                    "src": "641:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 12506,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "641:5:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "640:14:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12516,
                        "nodeType": "FunctionDefinition",
                        "src": "661:60:107",
                        "nodes": [],
                        "functionSelector": "7ae1cfca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBool",
                        "nameLocation": "670:7:107",
                        "parameters": {
                            "id": 12512,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12511,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "686:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12516,
                                    "src": "678:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12510,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "678:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "677:14:107"
                        },
                        "returnParameters": {
                            "id": 12515,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12514,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12516,
                                    "src": "715:4:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12513,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "715:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "714:6:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12523,
                        "nodeType": "FunctionDefinition",
                        "src": "727:58:107",
                        "nodes": [],
                        "functionSelector": "dc97d962",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getInt",
                        "nameLocation": "736:6:107",
                        "parameters": {
                            "id": 12519,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12518,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "751:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12523,
                                    "src": "743:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12517,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "743:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "742:14:107"
                        },
                        "returnParameters": {
                            "id": 12522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12521,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12523,
                                    "src": "780:3:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 12520,
                                        "name": "int",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "780:3:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "779:5:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12530,
                        "nodeType": "FunctionDefinition",
                        "src": "791:66:107",
                        "nodes": [],
                        "functionSelector": "a6ed563e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBytes32",
                        "nameLocation": "800:10:107",
                        "parameters": {
                            "id": 12526,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12525,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "819:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12530,
                                    "src": "811:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12524,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "811:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "810:14:107"
                        },
                        "returnParameters": {
                            "id": 12529,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12528,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12530,
                                    "src": "848:7:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12527,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "848:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "847:9:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12537,
                        "nodeType": "FunctionDefinition",
                        "src": "878:59:107",
                        "nodes": [],
                        "functionSelector": "ca446dd9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAddress",
                        "nameLocation": "887:10:107",
                        "parameters": {
                            "id": 12535,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12532,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "906:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12537,
                                    "src": "898:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12531,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "898:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12534,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "920:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12537,
                                    "src": "912:14:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12533,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "912:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "897:30:107"
                        },
                        "returnParameters": {
                            "id": 12536,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "936:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12544,
                        "nodeType": "FunctionDefinition",
                        "src": "943:53:107",
                        "nodes": [],
                        "functionSelector": "e2a4853a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setUint",
                        "nameLocation": "952:7:107",
                        "parameters": {
                            "id": 12542,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12539,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "968:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12544,
                                    "src": "960:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12538,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "960:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12541,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "979:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12544,
                                    "src": "974:11:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12540,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "974:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "959:27:107"
                        },
                        "returnParameters": {
                            "id": 12543,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "995:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12551,
                        "nodeType": "FunctionDefinition",
                        "src": "1002:66:107",
                        "nodes": [],
                        "functionSelector": "6e899550",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setString",
                        "nameLocation": "1011:9:107",
                        "parameters": {
                            "id": 12549,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12546,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1029:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12551,
                                    "src": "1021:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12545,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1021:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12548,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1051:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12551,
                                    "src": "1035:22:107",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 12547,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1035:6:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1020:38:107"
                        },
                        "returnParameters": {
                            "id": 12550,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1067:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12558,
                        "nodeType": "FunctionDefinition",
                        "src": "1074:64:107",
                        "nodes": [],
                        "functionSelector": "2e28d084",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBytes",
                        "nameLocation": "1083:8:107",
                        "parameters": {
                            "id": 12556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12553,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1100:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12558,
                                    "src": "1092:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12552,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1092:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12555,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1121:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12558,
                                    "src": "1106:21:107",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 12554,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1106:5:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1091:37:107"
                        },
                        "returnParameters": {
                            "id": 12557,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1137:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12565,
                        "nodeType": "FunctionDefinition",
                        "src": "1144:53:107",
                        "nodes": [],
                        "functionSelector": "abfdcced",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBool",
                        "nameLocation": "1153:7:107",
                        "parameters": {
                            "id": 12563,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12560,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1169:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12565,
                                    "src": "1161:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12559,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1161:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12562,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1180:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12565,
                                    "src": "1175:11:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12561,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1175:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1160:27:107"
                        },
                        "returnParameters": {
                            "id": 12564,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1196:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12572,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:51:107",
                        "nodes": [],
                        "functionSelector": "3e49bed0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setInt",
                        "nameLocation": "1212:6:107",
                        "parameters": {
                            "id": 12570,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12567,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1227:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12572,
                                    "src": "1219:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12566,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1219:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12569,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1237:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12572,
                                    "src": "1233:10:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 12568,
                                        "name": "int",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1233:3:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1218:26:107"
                        },
                        "returnParameters": {
                            "id": 12571,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1253:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12579,
                        "nodeType": "FunctionDefinition",
                        "src": "1260:59:107",
                        "nodes": [],
                        "functionSelector": "4e91db08",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBytes32",
                        "nameLocation": "1269:10:107",
                        "parameters": {
                            "id": 12577,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12574,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1288:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12579,
                                    "src": "1280:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12573,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1280:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12576,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1302:6:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12579,
                                    "src": "1294:14:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12575,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1294:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1279:30:107"
                        },
                        "returnParameters": {
                            "id": 12578,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1318:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12584,
                        "nodeType": "FunctionDefinition",
                        "src": "1341:46:107",
                        "nodes": [],
                        "functionSelector": "0e14a376",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteAddress",
                        "nameLocation": "1350:13:107",
                        "parameters": {
                            "id": 12582,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12581,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1372:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12584,
                                    "src": "1364:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12580,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1364:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1363:14:107"
                        },
                        "returnParameters": {
                            "id": 12583,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1386:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12589,
                        "nodeType": "FunctionDefinition",
                        "src": "1393:43:107",
                        "nodes": [],
                        "functionSelector": "e2b202bf",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteUint",
                        "nameLocation": "1402:10:107",
                        "parameters": {
                            "id": 12587,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12586,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1421:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12589,
                                    "src": "1413:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12585,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1413:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1412:14:107"
                        },
                        "returnParameters": {
                            "id": 12588,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1435:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12594,
                        "nodeType": "FunctionDefinition",
                        "src": "1442:45:107",
                        "nodes": [],
                        "functionSelector": "f6bb3cc4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteString",
                        "nameLocation": "1451:12:107",
                        "parameters": {
                            "id": 12592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12591,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1472:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12594,
                                    "src": "1464:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12590,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1464:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1463:14:107"
                        },
                        "returnParameters": {
                            "id": 12593,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1486:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12599,
                        "nodeType": "FunctionDefinition",
                        "src": "1493:44:107",
                        "nodes": [],
                        "functionSelector": "616b59f6",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBytes",
                        "nameLocation": "1502:11:107",
                        "parameters": {
                            "id": 12597,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12596,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1522:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12599,
                                    "src": "1514:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12595,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1514:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1513:14:107"
                        },
                        "returnParameters": {
                            "id": 12598,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1536:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12604,
                        "nodeType": "FunctionDefinition",
                        "src": "1543:43:107",
                        "nodes": [],
                        "functionSelector": "2c62ff2d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBool",
                        "nameLocation": "1552:10:107",
                        "parameters": {
                            "id": 12602,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12601,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1571:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12604,
                                    "src": "1563:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12600,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1563:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1562:14:107"
                        },
                        "returnParameters": {
                            "id": 12603,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1585:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12609,
                        "nodeType": "FunctionDefinition",
                        "src": "1592:42:107",
                        "nodes": [],
                        "functionSelector": "8c160095",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteInt",
                        "nameLocation": "1601:9:107",
                        "parameters": {
                            "id": 12607,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12606,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1619:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12609,
                                    "src": "1611:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12605,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1611:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1610:14:107"
                        },
                        "returnParameters": {
                            "id": 12608,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1633:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12614,
                        "nodeType": "FunctionDefinition",
                        "src": "1640:46:107",
                        "nodes": [],
                        "functionSelector": "0b9adc57",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBytes32",
                        "nameLocation": "1649:13:107",
                        "parameters": {
                            "id": 12612,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12611,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1671:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12614,
                                    "src": "1663:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12610,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1663:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1662:14:107"
                        },
                        "returnParameters": {
                            "id": 12613,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1685:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12621,
                        "nodeType": "FunctionDefinition",
                        "src": "1710:57:107",
                        "nodes": [],
                        "functionSelector": "adb353dc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addUint",
                        "nameLocation": "1719:7:107",
                        "parameters": {
                            "id": 12619,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12616,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1735:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12621,
                                    "src": "1727:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12615,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1727:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12618,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1749:7:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12621,
                                    "src": "1741:15:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12617,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1726:31:107"
                        },
                        "returnParameters": {
                            "id": 12620,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1766:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12628,
                        "nodeType": "FunctionDefinition",
                        "src": "1773:57:107",
                        "nodes": [],
                        "functionSelector": "ebb9d8c9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "subUint",
                        "nameLocation": "1782:7:107",
                        "parameters": {
                            "id": 12626,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12623,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1798:4:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12628,
                                    "src": "1790:12:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12622,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1790:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12625,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1812:7:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12628,
                                    "src": "1804:15:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12624,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1804:7:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1789:31:107"
                        },
                        "returnParameters": {
                            "id": 12627,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1829:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12635,
                        "nodeType": "FunctionDefinition",
                        "src": "1861:102:107",
                        "nodes": [],
                        "functionSelector": "5b49ff62",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodeWithdrawalAddress",
                        "nameLocation": "1870:24:107",
                        "parameters": {
                            "id": 12631,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12630,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "1912:12:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12635,
                                    "src": "1904:20:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12629,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1904:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1894:36:107"
                        },
                        "returnParameters": {
                            "id": 12634,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12633,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12635,
                                    "src": "1954:7:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12632,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1954:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1953:9:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12642,
                        "nodeType": "FunctionDefinition",
                        "src": "1969:109:107",
                        "nodes": [],
                        "functionSelector": "fd412513",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodePendingWithdrawalAddress",
                        "nameLocation": "1978:31:107",
                        "parameters": {
                            "id": 12638,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12637,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2027:12:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12642,
                                    "src": "2019:20:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12636,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2019:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2009:36:107"
                        },
                        "returnParameters": {
                            "id": 12641,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12640,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12642,
                                    "src": "2069:7:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12639,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2069:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2068:9:107"
                        },
                        "scope": 12657,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12651,
                        "nodeType": "FunctionDefinition",
                        "src": "2084:137:107",
                        "nodes": [],
                        "functionSelector": "a543ccea",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setWithdrawalAddress",
                        "nameLocation": "2093:20:107",
                        "parameters": {
                            "id": 12649,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12644,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2131:12:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12651,
                                    "src": "2123:20:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12643,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:107",
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
                                    "id": 12646,
                                    "mutability": "mutable",
                                    "name": "_newWithdrawalAddress",
                                    "nameLocation": "2161:21:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12651,
                                    "src": "2153:29:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12645,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2153:7:107",
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
                                    "id": 12648,
                                    "mutability": "mutable",
                                    "name": "_confirm",
                                    "nameLocation": "2197:8:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12651,
                                    "src": "2192:13:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12647,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2192:4:107",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:98:107"
                        },
                        "returnParameters": {
                            "id": 12650,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2220:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12656,
                        "nodeType": "FunctionDefinition",
                        "src": "2227:65:107",
                        "nodes": [],
                        "functionSelector": "bd439126",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "confirmWithdrawalAddress",
                        "nameLocation": "2236:24:107",
                        "parameters": {
                            "id": 12654,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12653,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2269:12:107",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12656,
                                    "src": "2261:20:107",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12652,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2261:7:107",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2260:22:107"
                        },
                        "returnParameters": {
                            "id": 12655,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2291:0:107"
                        },
                        "scope": 12657,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IRocketStorage",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    12657
                ],
                "name": "IRocketStorage",
                "nameLocation": "74:14:107",
                "scope": 12658,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 107
};
