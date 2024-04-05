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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"confirmGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"confirmWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGuardian\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodePendingWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodeWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_value\",\"type\":\"address\"}],\"name\":\"setAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"setBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newAddress\",\"type\":\"address\"}],\"name\":\"setGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"int256\",\"name\":\"_value\",\"type\":\"int256\"}],\"name\":\"setInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"}],\"name\":\"setString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newWithdrawalAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_confirm\",\"type\":\"bool\"}],\"name\":\"setWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"subUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketStorage.sol\":\"IRocketStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketStorage.sol\":{\"keccak256\":\"0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308\",\"dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM\"]}},\"version\":1}",
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
        "id": 12187,
        "exportedSymbols": {
            "IRocketStorage": [
                12186
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2256:108",
        "nodes": [
            {
                "id": 11992,
                "nodeType": "PragmaDirective",
                "src": "39:23:108",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 12186,
                "nodeType": "ContractDefinition",
                "src": "64:2230:108",
                "nodes": [
                    {
                        "id": 11997,
                        "nodeType": "FunctionDefinition",
                        "src": "116:58:108",
                        "nodes": [],
                        "functionSelector": "1bed5241",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getDeployedStatus",
                        "nameLocation": "125:17:108",
                        "parameters": {
                            "id": 11993,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "142:2:108"
                        },
                        "returnParameters": {
                            "id": 11996,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11995,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11997,
                                    "src": "168:4:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11994,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "168:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "167:6:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12002,
                        "nodeType": "FunctionDefinition",
                        "src": "196:55:108",
                        "nodes": [],
                        "functionSelector": "a75b87d2",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGuardian",
                        "nameLocation": "205:11:108",
                        "parameters": {
                            "id": 11998,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "216:2:108"
                        },
                        "returnParameters": {
                            "id": 12001,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12000,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12002,
                                    "src": "242:7:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11999,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "242:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "241:9:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12007,
                        "nodeType": "FunctionDefinition",
                        "src": "257:51:108",
                        "nodes": [],
                        "functionSelector": "8a0dac4a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGuardian",
                        "nameLocation": "266:11:108",
                        "parameters": {
                            "id": 12005,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12004,
                                    "mutability": "mutable",
                                    "name": "_newAddress",
                                    "nameLocation": "286:11:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12007,
                                    "src": "278:19:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12003,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "278:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "277:21:108"
                        },
                        "returnParameters": {
                            "id": 12006,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "307:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12010,
                        "nodeType": "FunctionDefinition",
                        "src": "314:36:108",
                        "nodes": [],
                        "functionSelector": "1e0ea61e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "confirmGuardian",
                        "nameLocation": "323:15:108",
                        "parameters": {
                            "id": 12008,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "338:2:108"
                        },
                        "returnParameters": {
                            "id": 12009,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "349:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12017,
                        "nodeType": "FunctionDefinition",
                        "src": "371:66:108",
                        "nodes": [],
                        "functionSelector": "21f8a721",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAddress",
                        "nameLocation": "380:10:108",
                        "parameters": {
                            "id": 12013,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12012,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "399:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12017,
                                    "src": "391:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12011,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "391:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "390:14:108"
                        },
                        "returnParameters": {
                            "id": 12016,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12015,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12017,
                                    "src": "428:7:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12014,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "428:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "427:9:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12024,
                        "nodeType": "FunctionDefinition",
                        "src": "443:60:108",
                        "nodes": [],
                        "functionSelector": "bd02d0f5",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUint",
                        "nameLocation": "452:7:108",
                        "parameters": {
                            "id": 12020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12019,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "468:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12024,
                                    "src": "460:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12018,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "460:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "459:14:108"
                        },
                        "returnParameters": {
                            "id": 12023,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12022,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12024,
                                    "src": "497:4:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12021,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "497:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "496:6:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12031,
                        "nodeType": "FunctionDefinition",
                        "src": "509:71:108",
                        "nodes": [],
                        "functionSelector": "986e791a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getString",
                        "nameLocation": "518:9:108",
                        "parameters": {
                            "id": 12027,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12026,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "536:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12031,
                                    "src": "528:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12025,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "528:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "527:14:108"
                        },
                        "returnParameters": {
                            "id": 12030,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12029,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12031,
                                    "src": "565:13:108",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 12028,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "565:6:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "564:15:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12038,
                        "nodeType": "FunctionDefinition",
                        "src": "586:69:108",
                        "nodes": [],
                        "functionSelector": "c031a180",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBytes",
                        "nameLocation": "595:8:108",
                        "parameters": {
                            "id": 12034,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12033,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "612:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12038,
                                    "src": "604:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12032,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "604:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "603:14:108"
                        },
                        "returnParameters": {
                            "id": 12037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12036,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12038,
                                    "src": "641:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 12035,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "641:5:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "640:14:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12045,
                        "nodeType": "FunctionDefinition",
                        "src": "661:60:108",
                        "nodes": [],
                        "functionSelector": "7ae1cfca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBool",
                        "nameLocation": "670:7:108",
                        "parameters": {
                            "id": 12041,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12040,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "686:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12045,
                                    "src": "678:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12039,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "678:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "677:14:108"
                        },
                        "returnParameters": {
                            "id": 12044,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12043,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12045,
                                    "src": "715:4:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12042,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "715:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "714:6:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12052,
                        "nodeType": "FunctionDefinition",
                        "src": "727:58:108",
                        "nodes": [],
                        "functionSelector": "dc97d962",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getInt",
                        "nameLocation": "736:6:108",
                        "parameters": {
                            "id": 12048,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12047,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "751:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12052,
                                    "src": "743:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12046,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "743:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "742:14:108"
                        },
                        "returnParameters": {
                            "id": 12051,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12050,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12052,
                                    "src": "780:3:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 12049,
                                        "name": "int",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "780:3:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "779:5:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12059,
                        "nodeType": "FunctionDefinition",
                        "src": "791:66:108",
                        "nodes": [],
                        "functionSelector": "a6ed563e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBytes32",
                        "nameLocation": "800:10:108",
                        "parameters": {
                            "id": 12055,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12054,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "819:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12059,
                                    "src": "811:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12053,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "811:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "810:14:108"
                        },
                        "returnParameters": {
                            "id": 12058,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12057,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12059,
                                    "src": "848:7:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12056,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "848:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "847:9:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12066,
                        "nodeType": "FunctionDefinition",
                        "src": "878:59:108",
                        "nodes": [],
                        "functionSelector": "ca446dd9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAddress",
                        "nameLocation": "887:10:108",
                        "parameters": {
                            "id": 12064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12061,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "906:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12066,
                                    "src": "898:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12060,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "898:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12063,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "920:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12066,
                                    "src": "912:14:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12062,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "912:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "897:30:108"
                        },
                        "returnParameters": {
                            "id": 12065,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "936:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12073,
                        "nodeType": "FunctionDefinition",
                        "src": "943:53:108",
                        "nodes": [],
                        "functionSelector": "e2a4853a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setUint",
                        "nameLocation": "952:7:108",
                        "parameters": {
                            "id": 12071,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12068,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "968:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12073,
                                    "src": "960:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12067,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "960:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12070,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "979:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12073,
                                    "src": "974:11:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12069,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "974:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "959:27:108"
                        },
                        "returnParameters": {
                            "id": 12072,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "995:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12080,
                        "nodeType": "FunctionDefinition",
                        "src": "1002:66:108",
                        "nodes": [],
                        "functionSelector": "6e899550",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setString",
                        "nameLocation": "1011:9:108",
                        "parameters": {
                            "id": 12078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12075,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1029:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12080,
                                    "src": "1021:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12074,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1021:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12077,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1051:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12080,
                                    "src": "1035:22:108",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 12076,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1035:6:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1020:38:108"
                        },
                        "returnParameters": {
                            "id": 12079,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1067:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12087,
                        "nodeType": "FunctionDefinition",
                        "src": "1074:64:108",
                        "nodes": [],
                        "functionSelector": "2e28d084",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBytes",
                        "nameLocation": "1083:8:108",
                        "parameters": {
                            "id": 12085,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12082,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1100:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12087,
                                    "src": "1092:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12081,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1092:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12084,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1121:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12087,
                                    "src": "1106:21:108",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 12083,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1106:5:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1091:37:108"
                        },
                        "returnParameters": {
                            "id": 12086,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1137:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12094,
                        "nodeType": "FunctionDefinition",
                        "src": "1144:53:108",
                        "nodes": [],
                        "functionSelector": "abfdcced",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBool",
                        "nameLocation": "1153:7:108",
                        "parameters": {
                            "id": 12092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12089,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1169:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12094,
                                    "src": "1161:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12088,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1161:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12091,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1180:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12094,
                                    "src": "1175:11:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12090,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1175:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1160:27:108"
                        },
                        "returnParameters": {
                            "id": 12093,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1196:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12101,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:51:108",
                        "nodes": [],
                        "functionSelector": "3e49bed0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setInt",
                        "nameLocation": "1212:6:108",
                        "parameters": {
                            "id": 12099,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12096,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1227:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12101,
                                    "src": "1219:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12095,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1219:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12098,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1237:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12101,
                                    "src": "1233:10:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 12097,
                                        "name": "int",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1233:3:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1218:26:108"
                        },
                        "returnParameters": {
                            "id": 12100,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1253:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12108,
                        "nodeType": "FunctionDefinition",
                        "src": "1260:59:108",
                        "nodes": [],
                        "functionSelector": "4e91db08",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setBytes32",
                        "nameLocation": "1269:10:108",
                        "parameters": {
                            "id": 12106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12103,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1288:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "1280:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12102,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1280:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12105,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1302:6:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "1294:14:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12104,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1294:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1279:30:108"
                        },
                        "returnParameters": {
                            "id": 12107,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1318:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12113,
                        "nodeType": "FunctionDefinition",
                        "src": "1341:46:108",
                        "nodes": [],
                        "functionSelector": "0e14a376",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteAddress",
                        "nameLocation": "1350:13:108",
                        "parameters": {
                            "id": 12111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12110,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1372:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12113,
                                    "src": "1364:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12109,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1364:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1363:14:108"
                        },
                        "returnParameters": {
                            "id": 12112,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1386:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12118,
                        "nodeType": "FunctionDefinition",
                        "src": "1393:43:108",
                        "nodes": [],
                        "functionSelector": "e2b202bf",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteUint",
                        "nameLocation": "1402:10:108",
                        "parameters": {
                            "id": 12116,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12115,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1421:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12118,
                                    "src": "1413:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12114,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1413:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1412:14:108"
                        },
                        "returnParameters": {
                            "id": 12117,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1435:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12123,
                        "nodeType": "FunctionDefinition",
                        "src": "1442:45:108",
                        "nodes": [],
                        "functionSelector": "f6bb3cc4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteString",
                        "nameLocation": "1451:12:108",
                        "parameters": {
                            "id": 12121,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12120,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1472:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12123,
                                    "src": "1464:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12119,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1464:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1463:14:108"
                        },
                        "returnParameters": {
                            "id": 12122,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1486:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12128,
                        "nodeType": "FunctionDefinition",
                        "src": "1493:44:108",
                        "nodes": [],
                        "functionSelector": "616b59f6",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBytes",
                        "nameLocation": "1502:11:108",
                        "parameters": {
                            "id": 12126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12125,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1522:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12128,
                                    "src": "1514:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12124,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1514:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1513:14:108"
                        },
                        "returnParameters": {
                            "id": 12127,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1536:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12133,
                        "nodeType": "FunctionDefinition",
                        "src": "1543:43:108",
                        "nodes": [],
                        "functionSelector": "2c62ff2d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBool",
                        "nameLocation": "1552:10:108",
                        "parameters": {
                            "id": 12131,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12130,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1571:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12133,
                                    "src": "1563:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12129,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1563:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1562:14:108"
                        },
                        "returnParameters": {
                            "id": 12132,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1585:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12138,
                        "nodeType": "FunctionDefinition",
                        "src": "1592:42:108",
                        "nodes": [],
                        "functionSelector": "8c160095",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteInt",
                        "nameLocation": "1601:9:108",
                        "parameters": {
                            "id": 12136,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12135,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1619:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12138,
                                    "src": "1611:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12134,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1611:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1610:14:108"
                        },
                        "returnParameters": {
                            "id": 12137,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1633:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12143,
                        "nodeType": "FunctionDefinition",
                        "src": "1640:46:108",
                        "nodes": [],
                        "functionSelector": "0b9adc57",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deleteBytes32",
                        "nameLocation": "1649:13:108",
                        "parameters": {
                            "id": 12141,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12140,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1671:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12143,
                                    "src": "1663:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12139,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1663:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1662:14:108"
                        },
                        "returnParameters": {
                            "id": 12142,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1685:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12150,
                        "nodeType": "FunctionDefinition",
                        "src": "1710:57:108",
                        "nodes": [],
                        "functionSelector": "adb353dc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addUint",
                        "nameLocation": "1719:7:108",
                        "parameters": {
                            "id": 12148,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12145,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1735:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12150,
                                    "src": "1727:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12144,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1727:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12147,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1749:7:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12150,
                                    "src": "1741:15:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12146,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1726:31:108"
                        },
                        "returnParameters": {
                            "id": 12149,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1766:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12157,
                        "nodeType": "FunctionDefinition",
                        "src": "1773:57:108",
                        "nodes": [],
                        "functionSelector": "ebb9d8c9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "subUint",
                        "nameLocation": "1782:7:108",
                        "parameters": {
                            "id": 12155,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12152,
                                    "mutability": "mutable",
                                    "name": "_key",
                                    "nameLocation": "1798:4:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12157,
                                    "src": "1790:12:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 12151,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1790:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12154,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1812:7:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12157,
                                    "src": "1804:15:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12153,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1804:7:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1789:31:108"
                        },
                        "returnParameters": {
                            "id": 12156,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1829:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12164,
                        "nodeType": "FunctionDefinition",
                        "src": "1861:102:108",
                        "nodes": [],
                        "functionSelector": "5b49ff62",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodeWithdrawalAddress",
                        "nameLocation": "1870:24:108",
                        "parameters": {
                            "id": 12160,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12159,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "1912:12:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12164,
                                    "src": "1904:20:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12158,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1904:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1894:36:108"
                        },
                        "returnParameters": {
                            "id": 12163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12162,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12164,
                                    "src": "1954:7:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12161,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1954:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1953:9:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12171,
                        "nodeType": "FunctionDefinition",
                        "src": "1969:109:108",
                        "nodes": [],
                        "functionSelector": "fd412513",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodePendingWithdrawalAddress",
                        "nameLocation": "1978:31:108",
                        "parameters": {
                            "id": 12167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12166,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2027:12:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12171,
                                    "src": "2019:20:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12165,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2019:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2009:36:108"
                        },
                        "returnParameters": {
                            "id": 12170,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12169,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12171,
                                    "src": "2069:7:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12168,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2069:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2068:9:108"
                        },
                        "scope": 12186,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12180,
                        "nodeType": "FunctionDefinition",
                        "src": "2084:137:108",
                        "nodes": [],
                        "functionSelector": "a543ccea",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setWithdrawalAddress",
                        "nameLocation": "2093:20:108",
                        "parameters": {
                            "id": 12178,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12173,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2131:12:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12180,
                                    "src": "2123:20:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12172,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:108",
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
                                    "id": 12175,
                                    "mutability": "mutable",
                                    "name": "_newWithdrawalAddress",
                                    "nameLocation": "2161:21:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12180,
                                    "src": "2153:29:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12174,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2153:7:108",
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
                                    "id": 12177,
                                    "mutability": "mutable",
                                    "name": "_confirm",
                                    "nameLocation": "2197:8:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12180,
                                    "src": "2192:13:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12176,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2192:4:108",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:98:108"
                        },
                        "returnParameters": {
                            "id": 12179,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2220:0:108"
                        },
                        "scope": 12186,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12185,
                        "nodeType": "FunctionDefinition",
                        "src": "2227:65:108",
                        "nodes": [],
                        "functionSelector": "bd439126",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "confirmWithdrawalAddress",
                        "nameLocation": "2236:24:108",
                        "parameters": {
                            "id": 12183,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12182,
                                    "mutability": "mutable",
                                    "name": "_nodeAddress",
                                    "nameLocation": "2269:12:108",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12185,
                                    "src": "2261:20:108",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12181,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2261:7:108",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2260:22:108"
                        },
                        "returnParameters": {
                            "id": 12184,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2291:0:108"
                        },
                        "scope": 12186,
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
                    12186
                ],
                "name": "IRocketStorage",
                "nameLocation": "74:14:108",
                "scope": 12187,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 108
};
