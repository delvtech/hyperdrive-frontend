export const StdAssertions = 
{
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
    "failed()": "ba414fa6"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdAssertions.sol\":\"StdAssertions\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "lib/forge-std/src/StdAssertions.sol": "StdAssertions"
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
      "lib/forge-std/src/StdAssertions.sol": {
        "keccak256": "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
        "urls": [
          "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
          "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdAssertions.sol",
    "id": 19270,
    "exportedSymbols": {
      "DSTest": [
        17737
      ],
      "StdAssertions": [
        19269
      ],
      "stdMath": [
        23815
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:13639:59",
    "nodes": [
      {
        "id": 17853,
        "nodeType": "PragmaDirective",
        "src": "32:31:59",
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
        "id": 17855,
        "nodeType": "ImportDirective",
        "src": "65:40:59",
        "nodes": [],
        "absolutePath": "lib/forge-std/lib/ds-test/src/test.sol",
        "file": "ds-test/test.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19270,
        "sourceUnit": 17738,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17854,
              "name": "DSTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 17737,
              "src": "73:6:59",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17857,
        "nodeType": "ImportDirective",
        "src": "106:38:59",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "./StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19270,
        "sourceUnit": 23816,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17856,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 23815,
              "src": "114:7:59",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 19269,
        "nodeType": "ContractDefinition",
        "src": "146:13524:59",
        "nodes": [
          {
            "id": 17864,
            "nodeType": "EventDefinition",
            "src": "194:31:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fb102865d50addddf69da9b5aa1bced66c80cf869a5c8d0471a467e18ce9cab1",
            "name": "log_array",
            "nameLocation": "200:9:59",
            "parameters": {
              "id": 17863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17862,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "220:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17864,
                  "src": "210:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17860,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "210:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 17861,
                    "nodeType": "ArrayTypeName",
                    "src": "210:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "209:15:59"
            }
          },
          {
            "id": 17869,
            "nodeType": "EventDefinition",
            "src": "230:30:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "890a82679b470f2bd82816ed9b161f97d8b967f37fa3647c21d5bf39749e2dd5",
            "name": "log_array",
            "nameLocation": "236:9:59",
            "parameters": {
              "id": 17868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17867,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "255:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17869,
                  "src": "246:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17865,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "246:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 17866,
                    "nodeType": "ArrayTypeName",
                    "src": "246:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "245:14:59"
            }
          },
          {
            "id": 17874,
            "nodeType": "EventDefinition",
            "src": "265:31:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "40e1840f5769073d61bd01372d9b75baa9842d5629a0c99ff103be1178a8e9e2",
            "name": "log_array",
            "nameLocation": "271:9:59",
            "parameters": {
              "id": 17873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17872,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "291:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17874,
                  "src": "281:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17870,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "281:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 17871,
                    "nodeType": "ArrayTypeName",
                    "src": "281:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:15:59"
            }
          },
          {
            "id": 17881,
            "nodeType": "EventDefinition",
            "src": "301:49:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "00aaa39c9ffb5f567a4534380c737075702e1f7f14107fc95328e3b56c0325fb",
            "name": "log_named_array",
            "nameLocation": "307:15:59",
            "parameters": {
              "id": 17880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17876,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "330:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17881,
                  "src": "323:10:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17875,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17879,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "345:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17881,
                  "src": "335:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17877,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "335:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 17878,
                    "nodeType": "ArrayTypeName",
                    "src": "335:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "322:27:59"
            }
          },
          {
            "id": 17888,
            "nodeType": "EventDefinition",
            "src": "355:48:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a73eda09662f46dde729be4611385ff34fe6c44fbbc6f7e17b042b59a3445b57",
            "name": "log_named_array",
            "nameLocation": "361:15:59",
            "parameters": {
              "id": 17887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17883,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "384:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17888,
                  "src": "377:10:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17882,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17886,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "398:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17888,
                  "src": "389:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17884,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "389:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 17885,
                    "nodeType": "ArrayTypeName",
                    "src": "389:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "376:26:59"
            }
          },
          {
            "id": 17895,
            "nodeType": "EventDefinition",
            "src": "408:49:59",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "3bcfb2ae2e8d132dd1fce7cf278a9a19756a9fceabe470df3bdabb4bc577d1bd",
            "name": "log_named_array",
            "nameLocation": "414:15:59",
            "parameters": {
              "id": 17894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17890,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "437:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17895,
                  "src": "430:10:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17889,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "430:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17893,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "452:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17895,
                  "src": "442:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17891,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "442:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 17892,
                    "nodeType": "ArrayTypeName",
                    "src": "442:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "429:27:59"
            }
          },
          {
            "id": 17909,
            "nodeType": "FunctionDefinition",
            "src": "463:118:59",
            "nodes": [],
            "body": {
              "id": 17908,
              "nodeType": "Block",
              "src": "513:68:59",
              "nodes": [],
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "hexValue": "4572726f72",
                        "id": 17901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "545:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        "value": "Error"
                      },
                      {
                        "id": 17902,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17897,
                        "src": "554:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 17900,
                      "name": "log_named_string",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15531,
                      "src": "528:16:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 17903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:30:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17904,
                  "nodeType": "EmitStatement",
                  "src": "523:35:59"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 17905,
                      "name": "fail",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17909,
                        15662
                      ],
                      "referencedDeclaration": 15662,
                      "src": "568:4:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 17906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "568:6:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17907,
                  "nodeType": "ExpressionStatement",
                  "src": "568:6:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fail",
            "nameLocation": "472:4:59",
            "parameters": {
              "id": 17898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17897,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "491:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17909,
                  "src": "477:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17896,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "476:19:59"
            },
            "returnParameters": {
              "id": 17899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "513:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 17920,
            "nodeType": "FunctionDefinition",
            "src": "587:83:59",
            "nodes": [],
            "body": {
              "id": 17919,
              "nodeType": "Block",
              "src": "636:34:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17916,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "657:5:59",
                        "subExpression": {
                          "id": 17915,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17911,
                          "src": "658:4:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 17914,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15715,
                        15736
                      ],
                      "referencedDeclaration": 15715,
                      "src": "646:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 17917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "646:17:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17918,
                  "nodeType": "ExpressionStatement",
                  "src": "646:17:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "596:11:59",
            "parameters": {
              "id": 17912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17911,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "613:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17920,
                  "src": "608:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17910,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "607:11:59"
            },
            "returnParameters": {
              "id": 17913,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "636:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 17934,
            "nodeType": "FunctionDefinition",
            "src": "676:107:59",
            "nodes": [],
            "body": {
              "id": 17933,
              "nodeType": "Block",
              "src": "744:39:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "765:5:59",
                        "subExpression": {
                          "id": 17928,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17922,
                          "src": "766:4:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 17930,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17924,
                        "src": "772:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 17927,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15715,
                        15736
                      ],
                      "referencedDeclaration": 15736,
                      "src": "754:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 17931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "754:22:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17932,
                  "nodeType": "ExpressionStatement",
                  "src": "754:22:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "685:11:59",
            "parameters": {
              "id": 17925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17922,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "702:4:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17934,
                  "src": "697:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17921,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17924,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "722:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17934,
                  "src": "708:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17923,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "696:30:59"
            },
            "returnParameters": {
              "id": 17926,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "744:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 17970,
            "nodeType": "FunctionDefinition",
            "src": "789:312:59",
            "nodes": [],
            "body": {
              "id": 17969,
              "nodeType": "Block",
              "src": "840:261:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 17943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17941,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17936,
                      "src": "854:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 17942,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17938,
                      "src": "859:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "854:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17968,
                  "nodeType": "IfStatement",
                  "src": "850:245:59",
                  "trueBody": {
                    "id": 17967,
                    "nodeType": "Block",
                    "src": "862:233:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6c5d",
                              "id": 17945,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "885:36:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_8b48ec9ac4dc7123ad32509232067c63ebae61bff18d5e06bf4dea2a25240ed2",
                                "typeString": "literal_string \"Error: a == b not satisfied [bool]\""
                              },
                              "value": "Error: a == b not satisfied [bool]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_8b48ec9ac4dc7123ad32509232067c63ebae61bff18d5e06bf4dea2a25240ed2",
                                "typeString": "literal_string \"Error: a == b not satisfied [bool]\""
                              }
                            ],
                            "id": 17944,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "881:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 17946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:41:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17947,
                        "nodeType": "EmitStatement",
                        "src": "876:46:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 17949,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "958:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "condition": {
                                "id": 17950,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17936,
                                "src": "972:1:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 17952,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "985:7:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 17953,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "972:20:59",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 17951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "976:6:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6273151f959616268004b58dbb21e5c851b7b8d04498b4aabee12291d22fc034",
                                  "typeString": "literal_string \"true\""
                                },
                                "value": "true"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 17948,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "941:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 17954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "941:52:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17955,
                        "nodeType": "EmitStatement",
                        "src": "936:57:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 17957,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1029:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "condition": {
                                "id": 17958,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17938,
                                "src": "1043:1:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 17960,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1056:7:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 17961,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "1043:20:59",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 17959,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1047:6:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6273151f959616268004b58dbb21e5c851b7b8d04498b4aabee12291d22fc034",
                                  "typeString": "literal_string \"true\""
                                },
                                "value": "true"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 17956,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "1012:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 17962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1012:52:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17963,
                        "nodeType": "EmitStatement",
                        "src": "1007:57:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 17964,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "1078:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 17965,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1078:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17966,
                        "nodeType": "ExpressionStatement",
                        "src": "1078:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "798:8:59",
            "parameters": {
              "id": 17939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17936,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "812:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17970,
                  "src": "807:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17935,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "807:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17938,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "820:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17970,
                  "src": "815:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17937,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "806:16:59"
            },
            "returnParameters": {
              "id": 17940,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 17995,
            "nodeType": "FunctionDefinition",
            "src": "1107:186:59",
            "nodes": [],
            "body": {
              "id": 17994,
              "nodeType": "Block",
              "src": "1177:116:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 17981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17979,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17972,
                      "src": "1191:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 17980,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17974,
                      "src": "1196:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1191:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17993,
                  "nodeType": "IfStatement",
                  "src": "1187:100:59",
                  "trueBody": {
                    "id": 17992,
                    "nodeType": "Block",
                    "src": "1199:88:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 17983,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1235:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 17984,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17976,
                              "src": "1244:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 17982,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "1218:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 17985,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1218:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17986,
                        "nodeType": "EmitStatement",
                        "src": "1213:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 17988,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17972,
                              "src": "1271:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "id": 17989,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17974,
                              "src": "1274:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 17987,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 17970,
                            "src": "1262:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_bool_$returns$__$",
                              "typeString": "function (bool,bool)"
                            }
                          },
                          "id": 17990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1262:14:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17991,
                        "nodeType": "ExpressionStatement",
                        "src": "1262:14:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1116:8:59",
            "parameters": {
              "id": 17977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17972,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1130:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17995,
                  "src": "1125:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17971,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1125:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17974,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1138:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17995,
                  "src": "1133:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17973,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17976,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1155:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 17995,
                  "src": "1141:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17975,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1124:35:59"
            },
            "returnParameters": {
              "id": 17978,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1177:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18008,
            "nodeType": "FunctionDefinition",
            "src": "1299:99:59",
            "nodes": [],
            "body": {
              "id": 18007,
              "nodeType": "Block",
              "src": "1366:32:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18003,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17997,
                        "src": "1386:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18004,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17999,
                        "src": "1389:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 18002,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17652,
                        17679
                      ],
                      "referencedDeclaration": 17652,
                      "src": "1376:9:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory)"
                      }
                    },
                    "id": 18005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1376:15:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18006,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:15:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1308:8:59",
            "parameters": {
              "id": 18000,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17997,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1330:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18008,
                  "src": "1317:14:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 17996,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1317:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17999,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1346:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18008,
                  "src": "1333:14:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 17998,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1316:32:59"
            },
            "returnParameters": {
              "id": 18001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1366:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18024,
            "nodeType": "FunctionDefinition",
            "src": "1404:123:59",
            "nodes": [],
            "body": {
              "id": 18023,
              "nodeType": "Block",
              "src": "1490:37:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18018,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18010,
                        "src": "1510:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18019,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18012,
                        "src": "1513:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18020,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18014,
                        "src": "1516:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 18017,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17652,
                        17679
                      ],
                      "referencedDeclaration": 17679,
                      "src": "1500:9:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory,string memory)"
                      }
                    },
                    "id": 18021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1500:20:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18022,
                  "nodeType": "ExpressionStatement",
                  "src": "1500:20:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1413:8:59",
            "parameters": {
              "id": 18015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18010,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1435:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18024,
                  "src": "1422:14:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18009,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18012,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1451:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18024,
                  "src": "1438:14:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18011,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1438:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18014,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1468:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18024,
                  "src": "1454:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18013,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1421:51:59"
            },
            "returnParameters": {
              "id": 18016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18066,
            "nodeType": "FunctionDefinition",
            "src": "1533:344:59",
            "nodes": [],
            "body": {
              "id": 18065,
              "nodeType": "Block",
              "src": "1608:269:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18036,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18027,
                              "src": "1643:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18034,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1632:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18035,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1636:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1632:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18037,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1632:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18033,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1622:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18038,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18042,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18030,
                              "src": "1671:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18040,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1660:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1664:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1660:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1660:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18039,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1650:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18044,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1650:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1622:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18064,
                  "nodeType": "IfStatement",
                  "src": "1618:253:59",
                  "trueBody": {
                    "id": 18063,
                    "nodeType": "Block",
                    "src": "1676:195:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e745b5d5d",
                              "id": 18047,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1699:38:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_521d63632bd73b6c06245b96e4e8f1b767ee309607c65899b409e5c9e6c384eb",
                                "typeString": "literal_string \"Error: a == b not satisfied [uint[]]\""
                              },
                              "value": "Error: a == b not satisfied [uint[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_521d63632bd73b6c06245b96e4e8f1b767ee309607c65899b409e5c9e6c384eb",
                                "typeString": "literal_string \"Error: a == b not satisfied [uint[]]\""
                              }
                            ],
                            "id": 18046,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "1695:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1695:43:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18049,
                        "nodeType": "EmitStatement",
                        "src": "1690:48:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18051,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1773:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18052,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18027,
                              "src": "1787:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 18050,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17881,
                            "src": "1757:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 18053,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18054,
                        "nodeType": "EmitStatement",
                        "src": "1752:37:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18056,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1824:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18057,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18030,
                              "src": "1838:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 18055,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17881,
                            "src": "1808:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 18058,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18059,
                        "nodeType": "EmitStatement",
                        "src": "1803:37:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18060,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "1854:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18061,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1854:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18062,
                        "nodeType": "ExpressionStatement",
                        "src": "1854:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1542:8:59",
            "parameters": {
              "id": 18031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18027,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1568:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18066,
                  "src": "1551:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18025,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1551:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18026,
                    "nodeType": "ArrayTypeName",
                    "src": "1551:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18030,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1588:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18066,
                  "src": "1571:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18028,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1571:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18029,
                    "nodeType": "ArrayTypeName",
                    "src": "1571:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1550:40:59"
            },
            "returnParameters": {
              "id": 18032,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1608:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18108,
            "nodeType": "FunctionDefinition",
            "src": "1883:341:59",
            "nodes": [],
            "body": {
              "id": 18107,
              "nodeType": "Block",
              "src": "1956:268:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18078,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18069,
                              "src": "1991:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18076,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1980:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1984:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1980:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18075,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1970:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1970:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18084,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18072,
                              "src": "2019:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18082,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2008:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2012:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2008:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18085,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2008:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18081,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1998:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18086,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1998:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1970:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18106,
                  "nodeType": "IfStatement",
                  "src": "1966:252:59",
                  "trueBody": {
                    "id": 18105,
                    "nodeType": "Block",
                    "src": "2024:194:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b696e745b5d5d",
                              "id": 18089,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2047:37:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6c8a6638f7c95c9ee18ffcfc37ffe04d6270c2db7493e9b7a14add834054a5f5",
                                "typeString": "literal_string \"Error: a == b not satisfied [int[]]\""
                              },
                              "value": "Error: a == b not satisfied [int[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6c8a6638f7c95c9ee18ffcfc37ffe04d6270c2db7493e9b7a14add834054a5f5",
                                "typeString": "literal_string \"Error: a == b not satisfied [int[]]\""
                              }
                            ],
                            "id": 18088,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "2043:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2043:42:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18091,
                        "nodeType": "EmitStatement",
                        "src": "2038:47:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18093,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2120:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18094,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18069,
                              "src": "2134:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 18092,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17888,
                            "src": "2104:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 18095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2104:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18096,
                        "nodeType": "EmitStatement",
                        "src": "2099:37:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18098,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2171:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18099,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18072,
                              "src": "2185:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 18097,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17888,
                            "src": "2155:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 18100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18101,
                        "nodeType": "EmitStatement",
                        "src": "2150:37:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18102,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "2201:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2201:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18104,
                        "nodeType": "ExpressionStatement",
                        "src": "2201:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1892:8:59",
            "parameters": {
              "id": 18073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18069,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1917:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18108,
                  "src": "1901:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18067,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1901:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18068,
                    "nodeType": "ArrayTypeName",
                    "src": "1901:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18072,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1936:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18108,
                  "src": "1920:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18070,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1920:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18071,
                    "nodeType": "ArrayTypeName",
                    "src": "1920:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1900:38:59"
            },
            "returnParameters": {
              "id": 18074,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1956:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18150,
            "nodeType": "FunctionDefinition",
            "src": "2230:347:59",
            "nodes": [],
            "body": {
              "id": 18149,
              "nodeType": "Block",
              "src": "2305:272:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18120,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18111,
                              "src": "2340:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18118,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2329:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2333:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2329:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2329:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18117,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2319:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2319:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18126,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18114,
                              "src": "2368:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18124,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2357:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2361:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2357:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2357:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18123,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2347:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2347:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2319:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18148,
                  "nodeType": "IfStatement",
                  "src": "2315:256:59",
                  "trueBody": {
                    "id": 18147,
                    "nodeType": "Block",
                    "src": "2373:198:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464726573735b5d5d",
                              "id": 18131,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2396:41:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_18b6dc04296758144a4e9b271bd3d79214335bb195df00f93d1706586d5041f8",
                                "typeString": "literal_string \"Error: a == b not satisfied [address[]]\""
                              },
                              "value": "Error: a == b not satisfied [address[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_18b6dc04296758144a4e9b271bd3d79214335bb195df00f93d1706586d5041f8",
                                "typeString": "literal_string \"Error: a == b not satisfied [address[]]\""
                              }
                            ],
                            "id": 18130,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "2392:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2392:46:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18133,
                        "nodeType": "EmitStatement",
                        "src": "2387:51:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18135,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2473:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18136,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18111,
                              "src": "2487:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 18134,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17895,
                            "src": "2457:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 18137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18138,
                        "nodeType": "EmitStatement",
                        "src": "2452:37:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2524:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18141,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18114,
                              "src": "2538:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 18139,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17881,
                              17888,
                              17895
                            ],
                            "referencedDeclaration": 17895,
                            "src": "2508:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 18142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2508:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18143,
                        "nodeType": "EmitStatement",
                        "src": "2503:37:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18144,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "2554:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2554:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18146,
                        "nodeType": "ExpressionStatement",
                        "src": "2554:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2239:8:59",
            "parameters": {
              "id": 18115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18111,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2265:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18150,
                  "src": "2248:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18109,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2248:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18110,
                    "nodeType": "ArrayTypeName",
                    "src": "2248:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18114,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2285:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18150,
                  "src": "2268:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18112,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2268:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18113,
                    "nodeType": "ArrayTypeName",
                    "src": "2268:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2247:40:59"
            },
            "returnParameters": {
              "id": 18116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2305:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18187,
            "nodeType": "FunctionDefinition",
            "src": "2583:256:59",
            "nodes": [],
            "body": {
              "id": 18186,
              "nodeType": "Block",
              "src": "2677:162:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18164,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18153,
                              "src": "2712:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18162,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2701:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2705:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2701:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2701:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18161,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2691:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2691:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18170,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18156,
                              "src": "2740:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18168,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2729:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2733:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2729:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2729:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18167,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2719:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2719:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2691:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18185,
                  "nodeType": "IfStatement",
                  "src": "2687:146:59",
                  "trueBody": {
                    "id": 18184,
                    "nodeType": "Block",
                    "src": "2745:88:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2781:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18176,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18158,
                              "src": "2790:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18174,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "2764:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2764:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18178,
                        "nodeType": "EmitStatement",
                        "src": "2759:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18180,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18153,
                              "src": "2817:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 18181,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18156,
                              "src": "2820:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 18179,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 18066,
                            "src": "2808:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 18182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2808:14:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18183,
                        "nodeType": "ExpressionStatement",
                        "src": "2808:14:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2592:8:59",
            "parameters": {
              "id": 18159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18153,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2618:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18187,
                  "src": "2601:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18151,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2601:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18152,
                    "nodeType": "ArrayTypeName",
                    "src": "2601:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18156,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2638:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18187,
                  "src": "2621:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18154,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18155,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18158,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2655:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18187,
                  "src": "2641:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2641:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2600:59:59"
            },
            "returnParameters": {
              "id": 18160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2677:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18224,
            "nodeType": "FunctionDefinition",
            "src": "2845:254:59",
            "nodes": [],
            "body": {
              "id": 18223,
              "nodeType": "Block",
              "src": "2937:162:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18201,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18190,
                              "src": "2972:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18199,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2961:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2965:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2961:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2961:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18198,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2951:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2951:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18207,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18193,
                              "src": "3000:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18205,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2989:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2993:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2989:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18208,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2989:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18204,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2979:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2979:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2951:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18222,
                  "nodeType": "IfStatement",
                  "src": "2947:146:59",
                  "trueBody": {
                    "id": 18221,
                    "nodeType": "Block",
                    "src": "3005:88:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3041:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18213,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18195,
                              "src": "3050:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18211,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "3024:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3024:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18215,
                        "nodeType": "EmitStatement",
                        "src": "3019:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18217,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18190,
                              "src": "3077:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            },
                            {
                              "id": 18218,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18193,
                              "src": "3080:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 18216,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 18108,
                            "src": "3068:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_int256_$dyn_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (int256[] memory,int256[] memory)"
                            }
                          },
                          "id": 18219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3068:14:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18220,
                        "nodeType": "ExpressionStatement",
                        "src": "3068:14:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2854:8:59",
            "parameters": {
              "id": 18196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18190,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2879:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18224,
                  "src": "2863:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18188,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2863:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18189,
                    "nodeType": "ArrayTypeName",
                    "src": "2863:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18193,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2898:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18224,
                  "src": "2882:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18191,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2882:6:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18192,
                    "nodeType": "ArrayTypeName",
                    "src": "2882:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18195,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2915:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18224,
                  "src": "2901:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18194,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2862:57:59"
            },
            "returnParameters": {
              "id": 18197,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2937:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18261,
            "nodeType": "FunctionDefinition",
            "src": "3105:256:59",
            "nodes": [],
            "body": {
              "id": 18260,
              "nodeType": "Block",
              "src": "3199:162:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18238,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18227,
                              "src": "3234:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18236,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3223:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3227:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3223:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3223:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18235,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3213:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3213:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18244,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18230,
                              "src": "3262:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 18242,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3251:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18243,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3255:6:59",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3251:10:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3251:13:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 18241,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3241:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3241:24:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3213:52:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18259,
                  "nodeType": "IfStatement",
                  "src": "3209:146:59",
                  "trueBody": {
                    "id": 18258,
                    "nodeType": "Block",
                    "src": "3267:88:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3303:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18250,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18232,
                              "src": "3312:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18248,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "3286:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3286:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18252,
                        "nodeType": "EmitStatement",
                        "src": "3281:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18254,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18227,
                              "src": "3339:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "id": 18255,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18230,
                              "src": "3342:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 18253,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 18150,
                            "src": "3330:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address[] memory,address[] memory)"
                            }
                          },
                          "id": 18256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3330:14:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18257,
                        "nodeType": "ExpressionStatement",
                        "src": "3330:14:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "3114:8:59",
            "parameters": {
              "id": 18233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18227,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3140:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18261,
                  "src": "3123:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18225,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3123:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18226,
                    "nodeType": "ArrayTypeName",
                    "src": "3123:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18230,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3160:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18261,
                  "src": "3143:18:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18228,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3143:7:59",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18229,
                    "nodeType": "ArrayTypeName",
                    "src": "3143:9:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18232,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "3177:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18261,
                  "src": "3163:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18231,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3163:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3122:59:59"
            },
            "returnParameters": {
              "id": 18234,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3199:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18280,
            "nodeType": "FunctionDefinition",
            "src": "3388:110:59",
            "nodes": [],
            "body": {
              "id": 18279,
              "nodeType": "Block",
              "src": "3449:49:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 18271,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18263,
                            "src": "3476:1:59",
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
                          "id": 18270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3468:7:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 18269,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3468:7:59",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 18272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3468:10:59",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 18275,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18265,
                            "src": "3488:1:59",
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
                          "id": 18274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3480:7:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 18273,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3480:7:59",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 18276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3480:10:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 18268,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "3459:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 18277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3459:32:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18278,
                  "nodeType": "ExpressionStatement",
                  "src": "3459:32:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqUint",
            "nameLocation": "3397:12:59",
            "parameters": {
              "id": 18266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18263,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3418:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18280,
                  "src": "3410:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3410:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18265,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3429:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18280,
                  "src": "3421:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3421:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3409:22:59"
            },
            "returnParameters": {
              "id": 18267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3449:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18330,
            "nodeType": "FunctionDefinition",
            "src": "3504:470:59",
            "nodes": [],
            "body": {
              "id": 18329,
              "nodeType": "Block",
              "src": "3588:386:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18290
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18290,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "3606:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18329,
                      "src": "3598:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18289,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3598:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18296,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18293,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18282,
                        "src": "3628:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18294,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18284,
                        "src": "3631:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18291,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "3614:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3622:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23726,
                      "src": "3614:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3614:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3598:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18297,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18290,
                      "src": "3648:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18298,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18286,
                      "src": "3656:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3648:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18328,
                  "nodeType": "IfStatement",
                  "src": "3644:324:59",
                  "trueBody": {
                    "id": 18327,
                    "nodeType": "Block",
                    "src": "3666:302:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18301,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3689:36:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 18300,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "3685:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3685:41:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18303,
                        "nodeType": "EmitStatement",
                        "src": "3680:46:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3760:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18306,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18282,
                              "src": "3774:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18304,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "3745:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3745:31:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18308,
                        "nodeType": "EmitStatement",
                        "src": "3740:36:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3810:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18311,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18284,
                              "src": "3824:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18309,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "3795:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3795:31:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18313,
                        "nodeType": "EmitStatement",
                        "src": "3790:36:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18315,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3860:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18316,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18286,
                              "src": "3874:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18314,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "3845:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3845:38:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18318,
                        "nodeType": "EmitStatement",
                        "src": "3840:43:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18320,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3917:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18321,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18290,
                              "src": "3931:5:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18319,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "3902:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3902:35:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18323,
                        "nodeType": "EmitStatement",
                        "src": "3897:40:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18324,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "3951:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18325,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3951:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18326,
                        "nodeType": "ExpressionStatement",
                        "src": "3951:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "3513:17:59",
            "parameters": {
              "id": 18287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18282,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3539:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18330,
                  "src": "3531:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3531:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18284,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3550:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18330,
                  "src": "3542:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3542:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18286,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "3561:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18330,
                  "src": "3553:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3553:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3530:40:59"
            },
            "returnParameters": {
              "id": 18288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3588:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18366,
            "nodeType": "FunctionDefinition",
            "src": "3980:294:59",
            "nodes": [],
            "body": {
              "id": 18365,
              "nodeType": "Block",
              "src": "4083:191:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18342
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18342,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4101:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18365,
                      "src": "4093:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18341,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18348,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18345,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18332,
                        "src": "4123:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18346,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18334,
                        "src": "4126:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18343,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "4109:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4117:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23726,
                      "src": "4109:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4109:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18349,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18342,
                      "src": "4143:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18350,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18336,
                      "src": "4151:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4143:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18364,
                  "nodeType": "IfStatement",
                  "src": "4139:129:59",
                  "trueBody": {
                    "id": 18363,
                    "nodeType": "Block",
                    "src": "4161:107:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18353,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4197:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18354,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18338,
                              "src": "4206:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18352,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "4180:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4180:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18356,
                        "nodeType": "EmitStatement",
                        "src": "4175:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18358,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18332,
                              "src": "4242:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18359,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18334,
                              "src": "4245:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18360,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18336,
                              "src": "4248:8:59",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18357,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18330,
                              18366,
                              18511,
                              18547
                            ],
                            "referencedDeclaration": 18330,
                            "src": "4224:17:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 18361,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4224:33:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18362,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "3989:17:59",
            "parameters": {
              "id": 18339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18332,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4015:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18366,
                  "src": "4007:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4007:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18334,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4026:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18366,
                  "src": "4018:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18333,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4018:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18336,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4037:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18366,
                  "src": "4029:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18338,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4061:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18366,
                  "src": "4047:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18337,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4047:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4006:59:59"
            },
            "returnParameters": {
              "id": 18340,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4083:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18422,
            "nodeType": "FunctionDefinition",
            "src": "4280:567:59",
            "nodes": [],
            "body": {
              "id": 18421,
              "nodeType": "Block",
              "src": "4389:458:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18378
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18378,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4407:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18421,
                      "src": "4399:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18377,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4399:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18384,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18381,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18368,
                        "src": "4429:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18382,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18370,
                        "src": "4432:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18379,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "4415:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4423:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23726,
                      "src": "4415:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4415:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4399:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18385,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18378,
                      "src": "4449:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18386,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18372,
                      "src": "4457:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4449:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18420,
                  "nodeType": "IfStatement",
                  "src": "4445:396:59",
                  "trueBody": {
                    "id": 18419,
                    "nodeType": "Block",
                    "src": "4467:374:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18389,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4490:36:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 18388,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "4486:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18390,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4486:41:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18391,
                        "nodeType": "EmitStatement",
                        "src": "4481:46:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18393,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4569:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18394,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18368,
                              "src": "4583:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18395,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18374,
                              "src": "4586:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18392,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "4546:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4546:49:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18397,
                        "nodeType": "EmitStatement",
                        "src": "4541:54:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18399,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4637:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18400,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18370,
                              "src": "4651:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18401,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18374,
                              "src": "4654:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18398,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "4614:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4614:49:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18403,
                        "nodeType": "EmitStatement",
                        "src": "4609:54:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18405,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4705:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18406,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18372,
                              "src": "4719:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18407,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18374,
                              "src": "4729:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18404,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "4682:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4682:56:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18409,
                        "nodeType": "EmitStatement",
                        "src": "4677:61:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4780:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18412,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18378,
                              "src": "4794:5:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18413,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18374,
                              "src": "4801:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18410,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "4757:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4757:53:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18415,
                        "nodeType": "EmitStatement",
                        "src": "4752:58:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18416,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "4824:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4824:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18418,
                        "nodeType": "ExpressionStatement",
                        "src": "4824:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "4289:24:59",
            "parameters": {
              "id": 18375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18368,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4322:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18422,
                  "src": "4314:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18367,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18370,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4333:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18422,
                  "src": "4325:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18372,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4344:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18422,
                  "src": "4336:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18371,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4336:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18374,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4362:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18422,
                  "src": "4354:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4354:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4313:58:59"
            },
            "returnParameters": {
              "id": 18376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4389:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18461,
            "nodeType": "FunctionDefinition",
            "src": "4853:356:59",
            "nodes": [],
            "body": {
              "id": 18460,
              "nodeType": "Block",
              "src": "5001:208:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18436,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5019:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18460,
                      "src": "5011:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5011:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18442,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18439,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18424,
                        "src": "5041:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18440,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18426,
                        "src": "5044:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18437,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "5027:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18438,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5035:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23726,
                      "src": "5027:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5027:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5011:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18443,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18436,
                      "src": "5061:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18444,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18428,
                      "src": "5069:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5061:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18459,
                  "nodeType": "IfStatement",
                  "src": "5057:146:59",
                  "trueBody": {
                    "id": 18458,
                    "nodeType": "Block",
                    "src": "5079:124:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18447,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5115:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18448,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18432,
                              "src": "5124:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18446,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "5098:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18450,
                        "nodeType": "EmitStatement",
                        "src": "5093:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18452,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18424,
                              "src": "5167:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18453,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18426,
                              "src": "5170:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18454,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18428,
                              "src": "5173:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18455,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18430,
                              "src": "5183:8:59",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18451,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18422,
                              18461,
                              18603,
                              18642
                            ],
                            "referencedDeclaration": 18422,
                            "src": "5142:24:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 18456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:50:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18457,
                        "nodeType": "ExpressionStatement",
                        "src": "5142:50:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "4862:24:59",
            "parameters": {
              "id": 18433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18424,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4895:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "4887:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18423,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18426,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4906:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "4898:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18425,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4898:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18428,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4917:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "4909:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4909:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18430,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4935:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "4927:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4927:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18432,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4959:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "4945:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18431,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4945:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4886:77:59"
            },
            "returnParameters": {
              "id": 18434,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5001:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18511,
            "nodeType": "FunctionDefinition",
            "src": "5215:467:59",
            "nodes": [],
            "body": {
              "id": 18510,
              "nodeType": "Block",
              "src": "5297:385:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18471
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18471,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5315:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18510,
                      "src": "5307:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18470,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5307:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18477,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18474,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18463,
                        "src": "5337:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18475,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18465,
                        "src": "5340:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18472,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "5323:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18473,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5331:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23762,
                      "src": "5323:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5323:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5307:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18478,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18471,
                      "src": "5357:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18479,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18467,
                      "src": "5365:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5357:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18509,
                  "nodeType": "IfStatement",
                  "src": "5353:323:59",
                  "trueBody": {
                    "id": 18508,
                    "nodeType": "Block",
                    "src": "5375:301:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 18482,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5398:35:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 18481,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "5394:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5394:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18484,
                        "nodeType": "EmitStatement",
                        "src": "5389:45:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020204c656674",
                              "id": 18486,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5467:13:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              "value": "       Left"
                            },
                            {
                              "id": 18487,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18463,
                              "src": "5482:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 18485,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15513,
                            "src": "5453:13:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 18488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5453:31:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18489,
                        "nodeType": "EmitStatement",
                        "src": "5448:36:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020205269676874",
                              "id": 18491,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5517:13:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              "value": "      Right"
                            },
                            {
                              "id": 18492,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18465,
                              "src": "5532:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 18490,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15513,
                            "src": "5503:13:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 18493,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5503:31:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18494,
                        "nodeType": "EmitStatement",
                        "src": "5498:36:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5568:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18497,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18467,
                              "src": "5582:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18495,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "5553:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5553:38:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18499,
                        "nodeType": "EmitStatement",
                        "src": "5548:43:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18501,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5625:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18502,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18471,
                              "src": "5639:5:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18500,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "5610:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18503,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:35:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18504,
                        "nodeType": "EmitStatement",
                        "src": "5605:40:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18505,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "5659:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18506,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5659:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18507,
                        "nodeType": "ExpressionStatement",
                        "src": "5659:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "5224:17:59",
            "parameters": {
              "id": 18468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18463,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5249:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18511,
                  "src": "5242:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18462,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18465,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5259:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18511,
                  "src": "5252:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18464,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18467,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5270:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18511,
                  "src": "5262:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5262:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5241:38:59"
            },
            "returnParameters": {
              "id": 18469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5297:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18547,
            "nodeType": "FunctionDefinition",
            "src": "5688:292:59",
            "nodes": [],
            "body": {
              "id": 18546,
              "nodeType": "Block",
              "src": "5789:191:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18523,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5807:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18546,
                      "src": "5799:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18522,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5799:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18529,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18526,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18513,
                        "src": "5829:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18527,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18515,
                        "src": "5832:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18524,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "5815:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5823:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23762,
                      "src": "5815:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5799:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18530,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18523,
                      "src": "5849:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18531,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18517,
                      "src": "5857:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5849:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18545,
                  "nodeType": "IfStatement",
                  "src": "5845:129:59",
                  "trueBody": {
                    "id": 18544,
                    "nodeType": "Block",
                    "src": "5867:107:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18534,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5903:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18535,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18519,
                              "src": "5912:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18533,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "5886:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18536,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5886:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18537,
                        "nodeType": "EmitStatement",
                        "src": "5881:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18539,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18513,
                              "src": "5948:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18540,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18515,
                              "src": "5951:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18541,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18517,
                              "src": "5954:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18538,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18330,
                              18366,
                              18511,
                              18547
                            ],
                            "referencedDeclaration": 18511,
                            "src": "5930:17:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 18542,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5930:33:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18543,
                        "nodeType": "ExpressionStatement",
                        "src": "5930:33:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "5697:17:59",
            "parameters": {
              "id": 18520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18513,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5722:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18547,
                  "src": "5715:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18512,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5715:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18515,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5732:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18547,
                  "src": "5725:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18514,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5725:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18517,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5743:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18547,
                  "src": "5735:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5735:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18519,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5767:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18547,
                  "src": "5753:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18518,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5714:57:59"
            },
            "returnParameters": {
              "id": 18521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5789:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18603,
            "nodeType": "FunctionDefinition",
            "src": "5986:562:59",
            "nodes": [],
            "body": {
              "id": 18602,
              "nodeType": "Block",
              "src": "6093:455:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18559
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18559,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6111:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18602,
                      "src": "6103:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18558,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6103:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18565,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18562,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18549,
                        "src": "6133:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18563,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18551,
                        "src": "6136:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18560,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "6119:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6127:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23762,
                      "src": "6119:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6119:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6103:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18566,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18559,
                      "src": "6153:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18567,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18553,
                      "src": "6161:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6153:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18601,
                  "nodeType": "IfStatement",
                  "src": "6149:393:59",
                  "trueBody": {
                    "id": 18600,
                    "nodeType": "Block",
                    "src": "6171:371:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 18570,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6194:35:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 18569,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "6190:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6190:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18572,
                        "nodeType": "EmitStatement",
                        "src": "6185:45:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18574,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6271:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18575,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18549,
                              "src": "6285:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18576,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18555,
                              "src": "6288:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18573,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15499,
                            "src": "6249:21:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 18577,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6249:48:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18578,
                        "nodeType": "EmitStatement",
                        "src": "6244:53:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18580,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6338:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18581,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18551,
                              "src": "6352:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18582,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18555,
                              "src": "6355:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18579,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15499,
                            "src": "6316:21:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 18583,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6316:48:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18584,
                        "nodeType": "EmitStatement",
                        "src": "6311:53:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18586,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6406:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18587,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18553,
                              "src": "6420:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18588,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18555,
                              "src": "6430:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18585,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "6383:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18589,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6383:56:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18590,
                        "nodeType": "EmitStatement",
                        "src": "6378:61:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18592,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6481:12:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18593,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18559,
                              "src": "6495:5:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18594,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18555,
                              "src": "6502:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18591,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "6458:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6458:53:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18596,
                        "nodeType": "EmitStatement",
                        "src": "6453:58:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18597,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "6525:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6525:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18599,
                        "nodeType": "ExpressionStatement",
                        "src": "6525:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "5995:24:59",
            "parameters": {
              "id": 18556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18549,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6027:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18603,
                  "src": "6020:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18548,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18551,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6037:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18603,
                  "src": "6030:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18550,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6030:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18553,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6048:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18603,
                  "src": "6040:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18552,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6040:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18555,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6066:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18603,
                  "src": "6058:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6058:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6019:56:59"
            },
            "returnParameters": {
              "id": 18557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6093:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18642,
            "nodeType": "FunctionDefinition",
            "src": "6554:354:59",
            "nodes": [],
            "body": {
              "id": 18641,
              "nodeType": "Block",
              "src": "6700:208:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18617
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18617,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6718:5:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18641,
                      "src": "6710:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18616,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6710:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18623,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18620,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18605,
                        "src": "6740:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18621,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18607,
                        "src": "6743:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18618,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "6726:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6734:5:59",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23762,
                      "src": "6726:13:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6726:19:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6710:35:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18624,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18617,
                      "src": "6760:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18625,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18609,
                      "src": "6768:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6760:16:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18640,
                  "nodeType": "IfStatement",
                  "src": "6756:146:59",
                  "trueBody": {
                    "id": 18639,
                    "nodeType": "Block",
                    "src": "6778:124:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18628,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6814:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18629,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18613,
                              "src": "6823:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18627,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "6797:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6797:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18631,
                        "nodeType": "EmitStatement",
                        "src": "6792:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18633,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18605,
                              "src": "6866:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18634,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18607,
                              "src": "6869:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18635,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18609,
                              "src": "6872:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18636,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18611,
                              "src": "6882:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18632,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18422,
                              18461,
                              18603,
                              18642
                            ],
                            "referencedDeclaration": 18603,
                            "src": "6841:24:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 18637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6841:50:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18638,
                        "nodeType": "ExpressionStatement",
                        "src": "6841:50:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "6563:24:59",
            "parameters": {
              "id": 18614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18605,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6595:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18642,
                  "src": "6588:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18604,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6588:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18607,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6605:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18642,
                  "src": "6598:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18606,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6598:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18609,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6616:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18642,
                  "src": "6608:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18611,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6634:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18642,
                  "src": "6626:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18610,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6626:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18613,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "6658:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18642,
                  "src": "6644:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18612,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6587:75:59"
            },
            "returnParameters": {
              "id": 18615,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6700:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18707,
            "nodeType": "FunctionDefinition",
            "src": "6914:733:59",
            "nodes": [],
            "body": {
              "id": 18706,
              "nodeType": "Block",
              "src": "7091:556:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18651,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18646,
                      "src": "7105:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7110:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7105:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18659,
                  "nodeType": "IfStatement",
                  "src": "7101:33:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18655,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18644,
                          "src": "7129:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18656,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18646,
                          "src": "7132:1:59",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 18654,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15960,
                        "src": "7120:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 18657,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7120:14:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18650,
                    "id": 18658,
                    "nodeType": "Return",
                    "src": "7113:21:59"
                  }
                },
                {
                  "assignments": [
                    18661
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18661,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7193:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18706,
                      "src": "7185:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18660,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7185:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18667,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18664,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18644,
                        "src": "7229:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18665,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18646,
                        "src": "7232:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18662,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "7208:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7216:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23785,
                      "src": "7208:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7208:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7185:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18668,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18661,
                      "src": "7249:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18669,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18648,
                      "src": "7264:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7249:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18705,
                  "nodeType": "IfStatement",
                  "src": "7245:396:59",
                  "trueBody": {
                    "id": 18704,
                    "nodeType": "Block",
                    "src": "7281:360:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18672,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7304:36:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 18671,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "7300:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18673,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7300:41:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18674,
                        "nodeType": "EmitStatement",
                        "src": "7295:46:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 18676,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7375:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 18677,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18644,
                              "src": "7391:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18675,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "7360:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18678,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7360:33:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18679,
                        "nodeType": "EmitStatement",
                        "src": "7355:38:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 18681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7427:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 18682,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18646,
                              "src": "7443:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18680,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15519,
                            "src": "7412:14:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7412:33:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18684,
                        "nodeType": "EmitStatement",
                        "src": "7407:38:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 18686,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7487:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18689,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18687,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18648,
                                "src": "7503:15:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18688,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7521:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7503:21:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18690,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7526:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18685,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "7464:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18691,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7464:65:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18692,
                        "nodeType": "EmitStatement",
                        "src": "7459:70:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 18694,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7571:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18695,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18661,
                                "src": "7587:12:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18696,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7602:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7587:18:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18698,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7607:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18693,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "7548:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7548:62:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18700,
                        "nodeType": "EmitStatement",
                        "src": "7543:67:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18701,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "7624:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18702,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7624:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18703,
                        "nodeType": "ExpressionStatement",
                        "src": "7624:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "6923:17:59",
            "parameters": {
              "id": 18649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18644,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6958:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18707,
                  "src": "6950:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18643,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6950:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18646,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6977:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18707,
                  "src": "6969:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6969:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18648,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "6996:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18707,
                  "src": "6988:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6988:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6940:133:59"
            },
            "returnParameters": {
              "id": 18650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7091:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18753,
            "nodeType": "FunctionDefinition",
            "src": "7653:519:59",
            "nodes": [],
            "body": {
              "id": 18752,
              "nodeType": "Block",
              "src": "7857:315:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18718,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18711,
                      "src": "7871:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18719,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7876:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7871:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18727,
                  "nodeType": "IfStatement",
                  "src": "7867:38:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18722,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18709,
                          "src": "7895:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18723,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18711,
                          "src": "7898:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18724,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18715,
                          "src": "7901:3:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 18721,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15985,
                        "src": "7886:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 18725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7886:19:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18717,
                    "id": 18726,
                    "nodeType": "Return",
                    "src": "7879:26:59"
                  }
                },
                {
                  "assignments": [
                    18729
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18729,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7964:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18752,
                      "src": "7956:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18728,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7956:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18735,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18732,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18709,
                        "src": "8000:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18733,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18711,
                        "src": "8003:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18730,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "7979:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18731,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23785,
                      "src": "7979:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7979:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7956:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18736,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18729,
                      "src": "8020:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18737,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18713,
                      "src": "8035:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8020:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18751,
                  "nodeType": "IfStatement",
                  "src": "8016:150:59",
                  "trueBody": {
                    "id": 18750,
                    "nodeType": "Block",
                    "src": "8052:114:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18740,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8088:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18741,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18715,
                              "src": "8097:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18739,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "8071:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18742,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8071:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18743,
                        "nodeType": "EmitStatement",
                        "src": "8066:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18745,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18709,
                              "src": "8133:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18746,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18711,
                              "src": "8136:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18747,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18713,
                              "src": "8139:15:59",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18744,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18707,
                              18753,
                              18936,
                              18982
                            ],
                            "referencedDeclaration": 18707,
                            "src": "8115:17:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 18748,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8115:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18749,
                        "nodeType": "ExpressionStatement",
                        "src": "8115:40:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "7662:17:59",
            "parameters": {
              "id": 18716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18709,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7697:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18753,
                  "src": "7689:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18708,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18711,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7716:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18753,
                  "src": "7708:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7708:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18713,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "7735:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18753,
                  "src": "7727:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7727:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18715,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "7830:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18753,
                  "src": "7816:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18714,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7816:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7679:160:59"
            },
            "returnParameters": {
              "id": 18717,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7857:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18822,
            "nodeType": "FunctionDefinition",
            "src": "8178:802:59",
            "nodes": [],
            "body": {
              "id": 18821,
              "nodeType": "Block",
              "src": "8388:592:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18764,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18757,
                      "src": "8402:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8407:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8402:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18772,
                  "nodeType": "IfStatement",
                  "src": "8398:33:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18768,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18755,
                          "src": "8426:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18769,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18757,
                          "src": "8429:1:59",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 18767,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15960,
                        "src": "8417:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 18770,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8417:14:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18763,
                    "id": 18771,
                    "nodeType": "Return",
                    "src": "8410:21:59"
                  }
                },
                {
                  "assignments": [
                    18774
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18774,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "8490:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18821,
                      "src": "8482:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18773,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8482:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18780,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18777,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18755,
                        "src": "8526:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18778,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18757,
                        "src": "8529:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18775,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "8505:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8513:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23785,
                      "src": "8505:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8505:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8482:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18781,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18774,
                      "src": "8546:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18782,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18759,
                      "src": "8561:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8546:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18820,
                  "nodeType": "IfStatement",
                  "src": "8542:432:59",
                  "trueBody": {
                    "id": 18819,
                    "nodeType": "Block",
                    "src": "8578:396:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8601:36:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 18784,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "8597:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8597:41:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18787,
                        "nodeType": "EmitStatement",
                        "src": "8592:46:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 18789,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8680:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 18790,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18755,
                              "src": "8696:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18791,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18761,
                              "src": "8699:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18788,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "8657:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18792,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8657:51:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18793,
                        "nodeType": "EmitStatement",
                        "src": "8652:56:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 18795,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8750:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 18796,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18757,
                              "src": "8766:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18797,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18761,
                              "src": "8769:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18794,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "8727:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8727:51:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18799,
                        "nodeType": "EmitStatement",
                        "src": "8722:56:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 18801,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8820:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18804,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18802,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18759,
                                "src": "8836:15:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18803,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8854:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8836:21:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18805,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8859:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18800,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "8797:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18806,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8797:65:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18807,
                        "nodeType": "EmitStatement",
                        "src": "8792:70:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 18809,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8904:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18812,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18810,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18774,
                                "src": "8920:12:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18811,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8935:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8920:18:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18813,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8940:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18808,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "8881:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8881:62:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18815,
                        "nodeType": "EmitStatement",
                        "src": "8876:67:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18816,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "8957:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18817,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8957:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18818,
                        "nodeType": "ExpressionStatement",
                        "src": "8957:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "8187:24:59",
            "parameters": {
              "id": 18762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18755,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8229:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18822,
                  "src": "8221:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8221:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18757,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8248:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18822,
                  "src": "8240:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8240:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18759,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "8267:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18822,
                  "src": "8259:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8259:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18761,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "8356:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18822,
                  "src": "8348:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8348:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8211:159:59"
            },
            "returnParameters": {
              "id": 18763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8388:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18871,
            "nodeType": "FunctionDefinition",
            "src": "8986:569:59",
            "nodes": [],
            "body": {
              "id": 18870,
              "nodeType": "Block",
              "src": "9223:332:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18835,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18826,
                      "src": "9237:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9242:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9237:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18844,
                  "nodeType": "IfStatement",
                  "src": "9233:38:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18839,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18824,
                          "src": "9261:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18840,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18826,
                          "src": "9264:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 18841,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18832,
                          "src": "9267:3:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 18838,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15985,
                        "src": "9252:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 18842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9252:19:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18834,
                    "id": 18843,
                    "nodeType": "Return",
                    "src": "9245:26:59"
                  }
                },
                {
                  "assignments": [
                    18846
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18846,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9330:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18870,
                      "src": "9322:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18845,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9322:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18852,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18849,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18824,
                        "src": "9366:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18850,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18826,
                        "src": "9369:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 18847,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "9345:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9353:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23785,
                      "src": "9345:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9345:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9322:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18853,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18846,
                      "src": "9386:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18854,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18828,
                      "src": "9401:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9386:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18869,
                  "nodeType": "IfStatement",
                  "src": "9382:167:59",
                  "trueBody": {
                    "id": 18868,
                    "nodeType": "Block",
                    "src": "9418:131:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18857,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9454:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18858,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18832,
                              "src": "9463:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18856,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "9437:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9437:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18860,
                        "nodeType": "EmitStatement",
                        "src": "9432:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18862,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18824,
                              "src": "9506:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18863,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18826,
                              "src": "9509:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18864,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18828,
                              "src": "9512:15:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18865,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18830,
                              "src": "9529:8:59",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18861,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18822,
                              18871,
                              19051,
                              19100
                            ],
                            "referencedDeclaration": 18822,
                            "src": "9481:24:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 18866,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9481:57:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18867,
                        "nodeType": "ExpressionStatement",
                        "src": "9481:57:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "8995:24:59",
            "parameters": {
              "id": 18833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18824,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9037:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18871,
                  "src": "9029:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9029:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18826,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9056:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18871,
                  "src": "9048:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9048:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18828,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9075:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18871,
                  "src": "9067:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9067:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18830,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "9164:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18871,
                  "src": "9156:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18829,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9156:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18832,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "9196:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18871,
                  "src": "9182:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18831,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9182:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9019:186:59"
            },
            "returnParameters": {
              "id": 18834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9223:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18936,
            "nodeType": "FunctionDefinition",
            "src": "9561:642:59",
            "nodes": [],
            "body": {
              "id": 18935,
              "nodeType": "Block",
              "src": "9650:553:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 18882,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18880,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18875,
                      "src": "9664:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9669:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9664:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18888,
                  "nodeType": "IfStatement",
                  "src": "9660:33:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18884,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18873,
                          "src": "9688:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 18885,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18875,
                          "src": "9691:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 18883,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15905,
                        "src": "9679:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 18886,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9679:14:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18879,
                    "id": 18887,
                    "nodeType": "Return",
                    "src": "9672:21:59"
                  }
                },
                {
                  "assignments": [
                    18890
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18890,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9752:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18935,
                      "src": "9744:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18889,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9744:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18896,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18893,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18873,
                        "src": "9788:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18894,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18875,
                        "src": "9791:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18891,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "9767:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18892,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9775:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23814,
                      "src": "9767:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9767:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9744:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18897,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18890,
                      "src": "9808:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18898,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18877,
                      "src": "9823:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9808:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18934,
                  "nodeType": "IfStatement",
                  "src": "9804:393:59",
                  "trueBody": {
                    "id": 18933,
                    "nodeType": "Block",
                    "src": "9840:357:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 18901,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9863:35:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 18900,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "9859:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9859:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18903,
                        "nodeType": "EmitStatement",
                        "src": "9854:45:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 18905,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 18906,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18873,
                              "src": "9948:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 18904,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15513,
                            "src": "9918:13:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 18907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9918:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18908,
                        "nodeType": "EmitStatement",
                        "src": "9913:37:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 18910,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9983:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 18911,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18875,
                              "src": "9999:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 18909,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15513,
                            "src": "9969:13:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 18912,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9969:32:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18913,
                        "nodeType": "EmitStatement",
                        "src": "9964:37:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 18915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10043:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18918,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18916,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18877,
                                "src": "10059:15:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18917,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10077:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10059:21:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18919,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10082:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18914,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "10020:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10020:65:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18921,
                        "nodeType": "EmitStatement",
                        "src": "10015:70:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 18923,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10127:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 18926,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 18924,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18890,
                                "src": "10143:12:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 18925,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10158:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10143:18:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 18927,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10163:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 18922,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "10104:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10104:62:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18929,
                        "nodeType": "EmitStatement",
                        "src": "10099:67:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18930,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "10180:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10180:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18932,
                        "nodeType": "ExpressionStatement",
                        "src": "10180:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "9570:17:59",
            "parameters": {
              "id": 18878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18873,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9595:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18936,
                  "src": "9588:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18872,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18875,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9605:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18936,
                  "src": "9598:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18874,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9598:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18877,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9616:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18936,
                  "src": "9608:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18876,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9608:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:45:59"
            },
            "returnParameters": {
              "id": 18879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9650:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18982,
            "nodeType": "FunctionDefinition",
            "src": "10209:423:59",
            "nodes": [],
            "body": {
              "id": 18981,
              "nodeType": "Block",
              "src": "10317:315:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 18949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18947,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18940,
                      "src": "10331:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18948,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10336:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10331:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18956,
                  "nodeType": "IfStatement",
                  "src": "10327:38:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18951,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18938,
                          "src": "10355:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 18952,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18940,
                          "src": "10358:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 18953,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18944,
                          "src": "10361:3:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 18950,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15930,
                        "src": "10346:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 18954,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10346:19:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18946,
                    "id": 18955,
                    "nodeType": "Return",
                    "src": "10339:26:59"
                  }
                },
                {
                  "assignments": [
                    18958
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18958,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10424:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 18981,
                      "src": "10416:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18957,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10416:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18964,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18961,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18938,
                        "src": "10460:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 18962,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18940,
                        "src": "10463:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 18959,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "10439:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10447:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23814,
                      "src": "10439:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 18963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10439:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10416:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18965,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18958,
                      "src": "10480:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18966,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18942,
                      "src": "10495:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10480:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18980,
                  "nodeType": "IfStatement",
                  "src": "10476:150:59",
                  "trueBody": {
                    "id": 18979,
                    "nodeType": "Block",
                    "src": "10512:114:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18969,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10548:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18970,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18944,
                              "src": "10557:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 18968,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "10531:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10531:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18972,
                        "nodeType": "EmitStatement",
                        "src": "10526:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18974,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18938,
                              "src": "10593:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18975,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18940,
                              "src": "10596:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 18976,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18942,
                              "src": "10599:15:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 18973,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18707,
                              18753,
                              18936,
                              18982
                            ],
                            "referencedDeclaration": 18936,
                            "src": "10575:17:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 18977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10575:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18978,
                        "nodeType": "ExpressionStatement",
                        "src": "10575:40:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "10218:17:59",
            "parameters": {
              "id": 18945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18938,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10243:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18982,
                  "src": "10236:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18937,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10236:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18940,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10253:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18982,
                  "src": "10246:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18939,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10246:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18942,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10264:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18982,
                  "src": "10256:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10256:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18944,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "10295:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 18982,
                  "src": "10281:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18943,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10281:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10235:64:59"
            },
            "returnParameters": {
              "id": 18946,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10317:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19051,
            "nodeType": "FunctionDefinition",
            "src": "10638:703:59",
            "nodes": [],
            "body": {
              "id": 19050,
              "nodeType": "Block",
              "src": "10752:589:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 18995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18993,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18986,
                      "src": "10766:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 18994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10771:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10766:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19001,
                  "nodeType": "IfStatement",
                  "src": "10762:33:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 18997,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18984,
                          "src": "10790:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 18998,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18986,
                          "src": "10793:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 18996,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15905,
                        "src": "10781:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 18999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10781:14:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 18992,
                    "id": 19000,
                    "nodeType": "Return",
                    "src": "10774:21:59"
                  }
                },
                {
                  "assignments": [
                    19003
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19003,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10854:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19050,
                      "src": "10846:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19002,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10846:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19009,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19006,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18984,
                        "src": "10890:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19007,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18986,
                        "src": "10893:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 19004,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "10869:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10877:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23814,
                      "src": "10869:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10869:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10846:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19010,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19003,
                      "src": "10910:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19011,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18988,
                      "src": "10925:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10910:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19049,
                  "nodeType": "IfStatement",
                  "src": "10906:429:59",
                  "trueBody": {
                    "id": 19048,
                    "nodeType": "Block",
                    "src": "10942:393:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 19014,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10965:35:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 19013,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "10961:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19015,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10961:40:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19016,
                        "nodeType": "EmitStatement",
                        "src": "10956:45:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 19018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11042:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 19019,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18984,
                              "src": "11058:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19020,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18990,
                              "src": "11061:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 19017,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15499,
                            "src": "11020:21:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19021,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11020:50:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19022,
                        "nodeType": "EmitStatement",
                        "src": "11015:55:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 19024,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11111:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 19025,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18986,
                              "src": "11127:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19026,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18990,
                              "src": "11130:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 19023,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15499,
                            "src": "11089:21:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11089:50:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19028,
                        "nodeType": "EmitStatement",
                        "src": "11084:55:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 19030,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11181:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 19033,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19031,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18988,
                                "src": "11197:15:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19032,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11215:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11197:21:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19034,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11220:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 19029,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "11158:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19035,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11158:65:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19036,
                        "nodeType": "EmitStatement",
                        "src": "11153:70:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 19038,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11265:14:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 19041,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19039,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19003,
                                "src": "11281:12:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19040,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11296:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11281:18:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19042,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11301:2:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 19037,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15507,
                            "src": "11242:22:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11242:62:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19044,
                        "nodeType": "EmitStatement",
                        "src": "11237:67:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19045,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "11318:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11318:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19047,
                        "nodeType": "ExpressionStatement",
                        "src": "11318:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "10647:24:59",
            "parameters": {
              "id": 18991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18984,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10679:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19051,
                  "src": "10672:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18983,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10672:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18986,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10689:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19051,
                  "src": "10682:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 18985,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10682:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18988,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10700:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19051,
                  "src": "10692:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18987,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10692:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18990,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "10725:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19051,
                  "src": "10717:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10717:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10671:63:59"
            },
            "returnParameters": {
              "id": 18992,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10752:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19100,
            "nodeType": "FunctionDefinition",
            "src": "11347:485:59",
            "nodes": [],
            "body": {
              "id": 19099,
              "nodeType": "Block",
              "src": "11500:332:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 19066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19064,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19055,
                      "src": "11514:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11519:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11514:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19073,
                  "nodeType": "IfStatement",
                  "src": "11510:38:59",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19068,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19053,
                          "src": "11538:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19069,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19055,
                          "src": "11541:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19070,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19061,
                          "src": "11544:3:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 19067,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          17970,
                          17995,
                          18008,
                          18024,
                          18066,
                          18108,
                          18150,
                          18187,
                          18224,
                          18261,
                          15766,
                          15791,
                          15821,
                          15846,
                          15905,
                          15930,
                          15960,
                          15985,
                          17458,
                          17493
                        ],
                        "referencedDeclaration": 15930,
                        "src": "11529:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 19071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11529:19:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19063,
                    "id": 19072,
                    "nodeType": "Return",
                    "src": "11522:26:59"
                  }
                },
                {
                  "assignments": [
                    19075
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19075,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "11607:12:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19099,
                      "src": "11599:20:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19074,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11599:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19081,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19078,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19053,
                        "src": "11643:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19079,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19055,
                        "src": "11646:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 19076,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "11622:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19077,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11630:12:59",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23814,
                      "src": "11622:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11622:26:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11599:49:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19082,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19075,
                      "src": "11663:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19083,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19057,
                      "src": "11678:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11663:30:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19098,
                  "nodeType": "IfStatement",
                  "src": "11659:167:59",
                  "trueBody": {
                    "id": 19097,
                    "nodeType": "Block",
                    "src": "11695:131:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19086,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11731:7:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19087,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19061,
                              "src": "11740:3:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 19085,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15531,
                            "src": "11714:16:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19088,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11714:30:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19089,
                        "nodeType": "EmitStatement",
                        "src": "11709:35:59"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19091,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19053,
                              "src": "11783:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19092,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19055,
                              "src": "11786:1:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19093,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19057,
                              "src": "11789:15:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19094,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19059,
                              "src": "11806:8:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 19090,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18822,
                              18871,
                              19051,
                              19100
                            ],
                            "referencedDeclaration": 19051,
                            "src": "11758:24:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 19095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11758:57:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19096,
                        "nodeType": "ExpressionStatement",
                        "src": "11758:57:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "11356:24:59",
            "parameters": {
              "id": 19062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19053,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "11388:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19100,
                  "src": "11381:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19052,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11381:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19055,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11398:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19100,
                  "src": "11391:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19054,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11391:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19057,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "11409:15:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19100,
                  "src": "11401:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11401:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19059,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "11434:8:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19100,
                  "src": "11426:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19058,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11426:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19061,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "11458:3:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19100,
                  "src": "11444:17:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19060,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11444:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11380:82:59"
            },
            "returnParameters": {
              "id": 19063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11500:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19118,
            "nodeType": "FunctionDefinition",
            "src": "11838:176:59",
            "nodes": [],
            "body": {
              "id": 19117,
              "nodeType": "Block",
              "src": "11941:73:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19110,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19102,
                        "src": "11964:6:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19111,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19104,
                        "src": "11972:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19112,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19102,
                        "src": "11983:6:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19113,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19106,
                        "src": "11991:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 19114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12002:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 19109,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19118,
                        19138,
                        19158,
                        19268
                      ],
                      "referencedDeclaration": 19268,
                      "src": "11951:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11951:56:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19116,
                  "nodeType": "ExpressionStatement",
                  "src": "11951:56:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "11847:12:59",
            "parameters": {
              "id": 19107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19102,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "11868:6:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19118,
                  "src": "11860:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11860:7:59",
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
                  "id": 19104,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "11889:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19118,
                  "src": "11876:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19103,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11876:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19106,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "11913:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19118,
                  "src": "11900:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19105,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11900:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11859:64:59"
            },
            "returnParameters": {
              "id": 19108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11941:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19138,
            "nodeType": "FunctionDefinition",
            "src": "12020:216:59",
            "nodes": [],
            "body": {
              "id": 19137,
              "nodeType": "Block",
              "src": "12161:75:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19130,
                        "name": "targetA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19120,
                        "src": "12184:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19131,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19122,
                        "src": "12193:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19132,
                        "name": "targetB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19124,
                        "src": "12204:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19133,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19126,
                        "src": "12213:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 19134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12224:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 19129,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19118,
                        19138,
                        19158,
                        19268
                      ],
                      "referencedDeclaration": 19268,
                      "src": "12171:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12171:58:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19136,
                  "nodeType": "ExpressionStatement",
                  "src": "12171:58:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12029:12:59",
            "parameters": {
              "id": 19127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19120,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12050:7:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19138,
                  "src": "12042:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12042:7:59",
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
                  "id": 19122,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12072:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19138,
                  "src": "12059:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19121,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12059:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19124,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12091:7:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19138,
                  "src": "12083:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12083:7:59",
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
                  "id": 19126,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12113:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19138,
                  "src": "12100:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19125,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12100:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12041:82:59"
            },
            "returnParameters": {
              "id": 19128,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12161:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19158,
            "nodeType": "FunctionDefinition",
            "src": "12242:231:59",
            "nodes": [],
            "body": {
              "id": 19157,
              "nodeType": "Block",
              "src": "12388:85:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19150,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19140,
                        "src": "12411:6:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19151,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19142,
                        "src": "12419:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19152,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19140,
                        "src": "12430:6:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19153,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19144,
                        "src": "12438:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19154,
                        "name": "strictRevertData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19146,
                        "src": "12449:16:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 19149,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19118,
                        19138,
                        19158,
                        19268
                      ],
                      "referencedDeclaration": 19268,
                      "src": "12398:12:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12398:68:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19156,
                  "nodeType": "ExpressionStatement",
                  "src": "12398:68:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12251:12:59",
            "parameters": {
              "id": 19147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19140,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "12272:6:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19158,
                  "src": "12264:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12264:7:59",
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
                  "id": 19142,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12293:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19158,
                  "src": "12280:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19141,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12280:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19144,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12317:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19158,
                  "src": "12304:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19143,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12304:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19146,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12333:16:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19158,
                  "src": "12328:21:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19145,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12328:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12263:87:59"
            },
            "returnParameters": {
              "id": 19148,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12388:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19268,
            "nodeType": "FunctionDefinition",
            "src": "12479:1189:59",
            "nodes": [],
            "body": {
              "id": 19267,
              "nodeType": "Block",
              "src": "12669:999:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19172,
                    19174
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19172,
                      "mutability": "mutable",
                      "name": "successA",
                      "nameLocation": "12685:8:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19267,
                      "src": "12680:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 19171,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12680:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 19174,
                      "mutability": "mutable",
                      "name": "returnDataA",
                      "nameLocation": "12708:11:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19267,
                      "src": "12695:24:59",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19173,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12695:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19182,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19180,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19162,
                        "src": "12745:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 19177,
                            "name": "targetA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19160,
                            "src": "12731:7:59",
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
                          "id": 19176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12723:7:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 19175,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12723:7:59",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12723:16:59",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 19179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12740:4:59",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12723:21:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 19181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12723:32:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12679:76:59"
                },
                {
                  "assignments": [
                    19184,
                    19186
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19184,
                      "mutability": "mutable",
                      "name": "successB",
                      "nameLocation": "12771:8:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19267,
                      "src": "12766:13:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 19183,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12766:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 19186,
                      "mutability": "mutable",
                      "name": "returnDataB",
                      "nameLocation": "12794:11:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 19267,
                      "src": "12781:24:59",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19185,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12781:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19194,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19192,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19166,
                        "src": "12831:9:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 19189,
                            "name": "targetB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19164,
                            "src": "12817:7:59",
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
                          "id": 19188,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12809:7:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 19187,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12809:7:59",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12809:16:59",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 19191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12826:4:59",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12809:21:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 19193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12809:32:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12765:76:59"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 19197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19195,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19172,
                      "src": "12856:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19196,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19184,
                      "src": "12868:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12856:20:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19205,
                  "nodeType": "IfStatement",
                  "src": "12852:120:59",
                  "trueBody": {
                    "id": 19204,
                    "nodeType": "Block",
                    "src": "12878:94:59",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19199,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19174,
                              "src": "12901:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 19200,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19186,
                              "src": "12914:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c2072657475726e206461746120646f6573206e6f74206d61746368",
                              "id": 19201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12927:33:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f3c9e4317c8eebc5635871f467354820a216f046f0a61b2ded371c2d507a555f",
                                "typeString": "literal_string \"Call return data does not match\""
                              },
                              "value": "Call return data does not match"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_f3c9e4317c8eebc5635871f467354820a216f046f0a61b2ded371c2d507a555f",
                                "typeString": "literal_string \"Call return data does not match\""
                              }
                            ],
                            "id": 19198,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 18024,
                            "src": "12892:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 19202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12892:69:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19203,
                        "nodeType": "ExpressionStatement",
                        "src": "12892:69:59"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 19212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 19210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 19207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12986:9:59",
                        "subExpression": {
                          "id": 19206,
                          "name": "successA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19172,
                          "src": "12987:8:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "id": 19209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12999:9:59",
                        "subExpression": {
                          "id": 19208,
                          "name": "successB",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19184,
                          "src": "13000:8:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "12986:22:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19211,
                      "name": "strictRevertData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19168,
                      "src": "13012:16:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12986:42:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19220,
                  "nodeType": "IfStatement",
                  "src": "12982:142:59",
                  "trueBody": {
                    "id": 19219,
                    "nodeType": "Block",
                    "src": "13030:94:59",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19214,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19174,
                              "src": "13053:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 19215,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19186,
                              "src": "13066:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c20726576657274206461746120646f6573206e6f74206d61746368",
                              "id": 19216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13079:33:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_428332fc36b72ecad0a5d9bab5b9a568a85eeb20fd69ffcfbf4cf91598a0c858",
                                "typeString": "literal_string \"Call revert data does not match\""
                              },
                              "value": "Call revert data does not match"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_428332fc36b72ecad0a5d9bab5b9a568a85eeb20fd69ffcfbf4cf91598a0c858",
                                "typeString": "literal_string \"Call revert data does not match\""
                              }
                            ],
                            "id": 19213,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 18024,
                            "src": "13044:8:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 19217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13044:69:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19218,
                        "nodeType": "ExpressionStatement",
                        "src": "13044:69:59"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 19224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13138:9:59",
                      "subExpression": {
                        "id": 19221,
                        "name": "successA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19172,
                        "src": "13139:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19223,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19184,
                      "src": "13151:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13138:21:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19243,
                  "nodeType": "IfStatement",
                  "src": "13134:259:59",
                  "trueBody": {
                    "id": 19242,
                    "nodeType": "Block",
                    "src": "13161:232:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 19226,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13184:29:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              },
                              "value": "Error: Calls were not equal"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              }
                            ],
                            "id": 19225,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "13180:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13180:34:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19228,
                        "nodeType": "EmitStatement",
                        "src": "13175:39:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c207265766572742064617461",
                              "id": 19230,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13249:25:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              "value": "  Left call revert data"
                            },
                            {
                              "id": 19231,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19174,
                              "src": "13276:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 19229,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15525,
                            "src": "13233:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13233:55:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19233,
                        "nodeType": "EmitStatement",
                        "src": "13228:60:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c2072657475726e2064617461",
                              "id": 19235,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13323:25:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              "value": " Right call return data"
                            },
                            {
                              "id": 19236,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19186,
                              "src": "13350:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 19234,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15525,
                            "src": "13307:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13307:55:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19238,
                        "nodeType": "EmitStatement",
                        "src": "13302:60:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19239,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "13376:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13376:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19241,
                        "nodeType": "ExpressionStatement",
                        "src": "13376:6:59"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 19247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19244,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19172,
                      "src": "13407:8:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13419:9:59",
                      "subExpression": {
                        "id": 19245,
                        "name": "successB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19184,
                        "src": "13420:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13407:21:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19266,
                  "nodeType": "IfStatement",
                  "src": "13403:259:59",
                  "trueBody": {
                    "id": 19265,
                    "nodeType": "Block",
                    "src": "13430:232:59",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 19249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13453:29:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              },
                              "value": "Error: Calls were not equal"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              }
                            ],
                            "id": 19248,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15451,
                            "src": "13449:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13449:34:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19251,
                        "nodeType": "EmitStatement",
                        "src": "13444:39:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c2072657475726e2064617461",
                              "id": 19253,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13518:25:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              "value": "  Left call return data"
                            },
                            {
                              "id": 19254,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19174,
                              "src": "13545:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 19252,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15525,
                            "src": "13502:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13502:55:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19256,
                        "nodeType": "EmitStatement",
                        "src": "13497:60:59"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c207265766572742064617461",
                              "id": 19258,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13592:25:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              "value": " Right call revert data"
                            },
                            {
                              "id": 19259,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19186,
                              "src": "13619:11:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 19257,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15525,
                            "src": "13576:15:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13576:55:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19261,
                        "nodeType": "EmitStatement",
                        "src": "13571:60:59"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19262,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17909,
                              15662
                            ],
                            "referencedDeclaration": 15662,
                            "src": "13645:4:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19263,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13645:6:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19264,
                        "nodeType": "ExpressionStatement",
                        "src": "13645:6:59"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12488:12:59",
            "parameters": {
              "id": 19169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19160,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12518:7:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19268,
                  "src": "12510:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12510:7:59",
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
                  "id": 19162,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12548:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19268,
                  "src": "12535:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19161,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12535:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19164,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12575:7:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19268,
                  "src": "12567:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12567:7:59",
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
                  "id": 19166,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12605:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19268,
                  "src": "12592:22:59",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19165,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:5:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19168,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12629:16:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 19268,
                  "src": "12624:21:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19167,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12624:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12500:151:59"
            },
            "returnParameters": {
              "id": 19170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12669:0:59"
            },
            "scope": 19269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 17858,
              "name": "DSTest",
              "nameLocations": [
                "181:6:59"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17737,
              "src": "181:6:59"
            },
            "id": 17859,
            "nodeType": "InheritanceSpecifier",
            "src": "181:6:59"
          }
        ],
        "canonicalName": "StdAssertions",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          19269,
          17737
        ],
        "name": "StdAssertions",
        "nameLocation": "164:13:59",
        "scope": 19270,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 59
} as const;
