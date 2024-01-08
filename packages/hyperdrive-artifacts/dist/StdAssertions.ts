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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdAssertions.sol\":\"StdAssertions\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
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
    "id": 23200,
    "exportedSymbols": {
      "DSTest": [
        21667
      ],
      "StdAssertions": [
        23199
      ],
      "stdMath": [
        27745
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:13639:76",
    "nodes": [
      {
        "id": 21783,
        "nodeType": "PragmaDirective",
        "src": "32:31:76",
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
        "id": 21785,
        "nodeType": "ImportDirective",
        "src": "65:40:76",
        "nodes": [],
        "absolutePath": "lib/forge-std/lib/ds-test/src/test.sol",
        "file": "ds-test/test.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 23200,
        "sourceUnit": 21668,
        "symbolAliases": [
          {
            "foreign": {
              "id": 21784,
              "name": "DSTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 21667,
              "src": "73:6:76",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 21787,
        "nodeType": "ImportDirective",
        "src": "106:38:76",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "./StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 23200,
        "sourceUnit": 27746,
        "symbolAliases": [
          {
            "foreign": {
              "id": 21786,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 27745,
              "src": "114:7:76",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 23199,
        "nodeType": "ContractDefinition",
        "src": "146:13524:76",
        "nodes": [
          {
            "id": 21794,
            "nodeType": "EventDefinition",
            "src": "194:31:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fb102865d50addddf69da9b5aa1bced66c80cf869a5c8d0471a467e18ce9cab1",
            "name": "log_array",
            "nameLocation": "200:9:76",
            "parameters": {
              "id": 21793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21792,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "220:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21794,
                  "src": "210:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21790,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "210:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 21791,
                    "nodeType": "ArrayTypeName",
                    "src": "210:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "209:15:76"
            }
          },
          {
            "id": 21799,
            "nodeType": "EventDefinition",
            "src": "230:30:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "890a82679b470f2bd82816ed9b161f97d8b967f37fa3647c21d5bf39749e2dd5",
            "name": "log_array",
            "nameLocation": "236:9:76",
            "parameters": {
              "id": 21798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21797,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "255:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21799,
                  "src": "246:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21795,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "246:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 21796,
                    "nodeType": "ArrayTypeName",
                    "src": "246:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "245:14:76"
            }
          },
          {
            "id": 21804,
            "nodeType": "EventDefinition",
            "src": "265:31:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "40e1840f5769073d61bd01372d9b75baa9842d5629a0c99ff103be1178a8e9e2",
            "name": "log_array",
            "nameLocation": "271:9:76",
            "parameters": {
              "id": 21803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21802,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "291:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21804,
                  "src": "281:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21800,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "281:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 21801,
                    "nodeType": "ArrayTypeName",
                    "src": "281:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:15:76"
            }
          },
          {
            "id": 21811,
            "nodeType": "EventDefinition",
            "src": "301:49:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "00aaa39c9ffb5f567a4534380c737075702e1f7f14107fc95328e3b56c0325fb",
            "name": "log_named_array",
            "nameLocation": "307:15:76",
            "parameters": {
              "id": 21810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21806,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "330:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21811,
                  "src": "323:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21805,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21809,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "345:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21811,
                  "src": "335:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21807,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "335:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 21808,
                    "nodeType": "ArrayTypeName",
                    "src": "335:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "322:27:76"
            }
          },
          {
            "id": 21818,
            "nodeType": "EventDefinition",
            "src": "355:48:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a73eda09662f46dde729be4611385ff34fe6c44fbbc6f7e17b042b59a3445b57",
            "name": "log_named_array",
            "nameLocation": "361:15:76",
            "parameters": {
              "id": 21817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21813,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "384:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21818,
                  "src": "377:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21812,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21816,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "398:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21818,
                  "src": "389:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21814,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "389:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 21815,
                    "nodeType": "ArrayTypeName",
                    "src": "389:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "376:26:76"
            }
          },
          {
            "id": 21825,
            "nodeType": "EventDefinition",
            "src": "408:49:76",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "3bcfb2ae2e8d132dd1fce7cf278a9a19756a9fceabe470df3bdabb4bc577d1bd",
            "name": "log_named_array",
            "nameLocation": "414:15:76",
            "parameters": {
              "id": 21824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21820,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "437:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21825,
                  "src": "430:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21819,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "430:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21823,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "452:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21825,
                  "src": "442:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21821,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "442:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 21822,
                    "nodeType": "ArrayTypeName",
                    "src": "442:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "429:27:76"
            }
          },
          {
            "id": 21839,
            "nodeType": "FunctionDefinition",
            "src": "463:118:76",
            "nodes": [],
            "body": {
              "id": 21838,
              "nodeType": "Block",
              "src": "513:68:76",
              "nodes": [],
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "hexValue": "4572726f72",
                        "id": 21831,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "545:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        "value": "Error"
                      },
                      {
                        "id": 21832,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21827,
                        "src": "554:3:76",
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
                      "id": 21830,
                      "name": "log_named_string",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19461,
                      "src": "528:16:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 21833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:30:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21834,
                  "nodeType": "EmitStatement",
                  "src": "523:35:76"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 21835,
                      "name": "fail",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21839,
                        19592
                      ],
                      "referencedDeclaration": 19592,
                      "src": "568:4:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 21836,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "568:6:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21837,
                  "nodeType": "ExpressionStatement",
                  "src": "568:6:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fail",
            "nameLocation": "472:4:76",
            "parameters": {
              "id": 21828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21827,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "491:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21839,
                  "src": "477:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21826,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "476:19:76"
            },
            "returnParameters": {
              "id": 21829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "513:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21850,
            "nodeType": "FunctionDefinition",
            "src": "587:83:76",
            "nodes": [],
            "body": {
              "id": 21849,
              "nodeType": "Block",
              "src": "636:34:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 21846,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "657:5:76",
                        "subExpression": {
                          "id": 21845,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21841,
                          "src": "658:4:76",
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
                      "id": 21844,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19645,
                        19666
                      ],
                      "referencedDeclaration": 19645,
                      "src": "646:10:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 21847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "646:17:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21848,
                  "nodeType": "ExpressionStatement",
                  "src": "646:17:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "596:11:76",
            "parameters": {
              "id": 21842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21841,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "613:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21850,
                  "src": "608:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21840,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "607:11:76"
            },
            "returnParameters": {
              "id": 21843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "636:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21864,
            "nodeType": "FunctionDefinition",
            "src": "676:107:76",
            "nodes": [],
            "body": {
              "id": 21863,
              "nodeType": "Block",
              "src": "744:39:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 21859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "765:5:76",
                        "subExpression": {
                          "id": 21858,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21852,
                          "src": "766:4:76",
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
                        "id": 21860,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21854,
                        "src": "772:3:76",
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
                      "id": 21857,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19645,
                        19666
                      ],
                      "referencedDeclaration": 19666,
                      "src": "754:10:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 21861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "754:22:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21862,
                  "nodeType": "ExpressionStatement",
                  "src": "754:22:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "685:11:76",
            "parameters": {
              "id": 21855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21852,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "702:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21864,
                  "src": "697:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21851,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21854,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "722:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21864,
                  "src": "708:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21853,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "696:30:76"
            },
            "returnParameters": {
              "id": 21856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "744:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21900,
            "nodeType": "FunctionDefinition",
            "src": "789:312:76",
            "nodes": [],
            "body": {
              "id": 21899,
              "nodeType": "Block",
              "src": "840:261:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 21873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 21871,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21866,
                      "src": "854:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 21872,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21868,
                      "src": "859:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "854:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21898,
                  "nodeType": "IfStatement",
                  "src": "850:245:76",
                  "trueBody": {
                    "id": 21897,
                    "nodeType": "Block",
                    "src": "862:233:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6c5d",
                              "id": 21875,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "885:36:76",
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
                            "id": 21874,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "881:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 21876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:41:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21877,
                        "nodeType": "EmitStatement",
                        "src": "876:46:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 21879,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "958:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "condition": {
                                "id": 21880,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21866,
                                "src": "972:1:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 21882,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "985:7:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 21883,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "972:20:76",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 21881,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "976:6:76",
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
                            "id": 21878,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "941:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 21884,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "941:52:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21885,
                        "nodeType": "EmitStatement",
                        "src": "936:57:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 21887,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1029:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "condition": {
                                "id": 21888,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21868,
                                "src": "1043:1:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 21890,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1056:7:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 21891,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "1043:20:76",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 21889,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1047:6:76",
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
                            "id": 21886,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "1012:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 21892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1012:52:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21893,
                        "nodeType": "EmitStatement",
                        "src": "1007:57:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 21894,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "1078:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 21895,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1078:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21896,
                        "nodeType": "ExpressionStatement",
                        "src": "1078:6:76"
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
            "nameLocation": "798:8:76",
            "parameters": {
              "id": 21869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21866,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "812:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21900,
                  "src": "807:6:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21865,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "807:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21868,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "820:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21900,
                  "src": "815:6:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21867,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "806:16:76"
            },
            "returnParameters": {
              "id": 21870,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21925,
            "nodeType": "FunctionDefinition",
            "src": "1107:186:76",
            "nodes": [],
            "body": {
              "id": 21924,
              "nodeType": "Block",
              "src": "1177:116:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 21911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 21909,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21902,
                      "src": "1191:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 21910,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21904,
                      "src": "1196:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1191:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21923,
                  "nodeType": "IfStatement",
                  "src": "1187:100:76",
                  "trueBody": {
                    "id": 21922,
                    "nodeType": "Block",
                    "src": "1199:88:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 21913,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1235:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 21914,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21906,
                              "src": "1244:3:76",
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
                            "id": 21912,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "1218:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 21915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1218:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21916,
                        "nodeType": "EmitStatement",
                        "src": "1213:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 21918,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21902,
                              "src": "1271:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "id": 21919,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21904,
                              "src": "1274:1:76",
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
                            "id": 21917,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 21900,
                            "src": "1262:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_bool_$returns$__$",
                              "typeString": "function (bool,bool)"
                            }
                          },
                          "id": 21920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1262:14:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21921,
                        "nodeType": "ExpressionStatement",
                        "src": "1262:14:76"
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
            "nameLocation": "1116:8:76",
            "parameters": {
              "id": 21907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21902,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1130:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21925,
                  "src": "1125:6:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21901,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1125:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21904,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1138:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21925,
                  "src": "1133:6:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21903,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21906,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1155:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21925,
                  "src": "1141:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21905,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1124:35:76"
            },
            "returnParameters": {
              "id": 21908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1177:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21938,
            "nodeType": "FunctionDefinition",
            "src": "1299:99:76",
            "nodes": [],
            "body": {
              "id": 21937,
              "nodeType": "Block",
              "src": "1366:32:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 21933,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21927,
                        "src": "1386:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 21934,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21929,
                        "src": "1389:1:76",
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
                      "id": 21932,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21582,
                        21609
                      ],
                      "referencedDeclaration": 21582,
                      "src": "1376:9:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory)"
                      }
                    },
                    "id": 21935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1376:15:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21936,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:15:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1308:8:76",
            "parameters": {
              "id": 21930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21927,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1330:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21938,
                  "src": "1317:14:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21926,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1317:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21929,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1346:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21938,
                  "src": "1333:14:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21928,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1316:32:76"
            },
            "returnParameters": {
              "id": 21931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1366:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21954,
            "nodeType": "FunctionDefinition",
            "src": "1404:123:76",
            "nodes": [],
            "body": {
              "id": 21953,
              "nodeType": "Block",
              "src": "1490:37:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 21948,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21940,
                        "src": "1510:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 21949,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21942,
                        "src": "1513:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 21950,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21944,
                        "src": "1516:3:76",
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
                      "id": 21947,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21582,
                        21609
                      ],
                      "referencedDeclaration": 21609,
                      "src": "1500:9:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory,string memory)"
                      }
                    },
                    "id": 21951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1500:20:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21952,
                  "nodeType": "ExpressionStatement",
                  "src": "1500:20:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1413:8:76",
            "parameters": {
              "id": 21945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21940,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1435:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21954,
                  "src": "1422:14:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21939,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21942,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1451:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21954,
                  "src": "1438:14:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21941,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1438:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21944,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1468:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21954,
                  "src": "1454:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21943,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1421:51:76"
            },
            "returnParameters": {
              "id": 21946,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 21996,
            "nodeType": "FunctionDefinition",
            "src": "1533:344:76",
            "nodes": [],
            "body": {
              "id": 21995,
              "nodeType": "Block",
              "src": "1608:269:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 21975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 21966,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21957,
                              "src": "1643:1:76",
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
                              "id": 21964,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1632:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 21965,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1636:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1632:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 21967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1632:13:76",
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
                        "id": 21963,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1622:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 21968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:24:76",
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
                              "id": 21972,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21960,
                              "src": "1671:1:76",
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
                              "id": 21970,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1660:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 21971,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1664:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1660:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 21973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1660:13:76",
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
                        "id": 21969,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1650:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 21974,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1650:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1622:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21994,
                  "nodeType": "IfStatement",
                  "src": "1618:253:76",
                  "trueBody": {
                    "id": 21993,
                    "nodeType": "Block",
                    "src": "1676:195:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e745b5d5d",
                              "id": 21977,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1699:38:76",
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
                            "id": 21976,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "1695:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 21978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1695:43:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21979,
                        "nodeType": "EmitStatement",
                        "src": "1690:48:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 21981,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1773:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 21982,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21957,
                              "src": "1787:1:76",
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
                            "id": 21980,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21811,
                            "src": "1757:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 21983,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21984,
                        "nodeType": "EmitStatement",
                        "src": "1752:37:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 21986,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1824:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 21987,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21960,
                              "src": "1838:1:76",
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
                            "id": 21985,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21811,
                            "src": "1808:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 21988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21989,
                        "nodeType": "EmitStatement",
                        "src": "1803:37:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 21990,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "1854:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 21991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1854:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 21992,
                        "nodeType": "ExpressionStatement",
                        "src": "1854:6:76"
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
            "nameLocation": "1542:8:76",
            "parameters": {
              "id": 21961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21957,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1568:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21996,
                  "src": "1551:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21955,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1551:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 21956,
                    "nodeType": "ArrayTypeName",
                    "src": "1551:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21960,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1588:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 21996,
                  "src": "1571:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21958,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1571:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 21959,
                    "nodeType": "ArrayTypeName",
                    "src": "1571:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1550:40:76"
            },
            "returnParameters": {
              "id": 21962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1608:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22038,
            "nodeType": "FunctionDefinition",
            "src": "1883:341:76",
            "nodes": [],
            "body": {
              "id": 22037,
              "nodeType": "Block",
              "src": "1956:268:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 22017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 22008,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21999,
                              "src": "1991:1:76",
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
                              "id": 22006,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1980:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22007,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1984:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1980:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:13:76",
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
                        "id": 22005,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1970:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22010,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1970:24:76",
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
                              "id": 22014,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22002,
                              "src": "2019:1:76",
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
                              "id": 22012,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2008:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22013,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2012:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2008:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22015,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2008:13:76",
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
                        "id": 22011,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1998:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1998:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1970:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22036,
                  "nodeType": "IfStatement",
                  "src": "1966:252:76",
                  "trueBody": {
                    "id": 22035,
                    "nodeType": "Block",
                    "src": "2024:194:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b696e745b5d5d",
                              "id": 22019,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2047:37:76",
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
                            "id": 22018,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "2043:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2043:42:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22021,
                        "nodeType": "EmitStatement",
                        "src": "2038:47:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 22023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2120:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 22024,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21999,
                              "src": "2134:1:76",
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
                            "id": 22022,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21818,
                            "src": "2104:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 22025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2104:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22026,
                        "nodeType": "EmitStatement",
                        "src": "2099:37:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 22028,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2171:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 22029,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22002,
                              "src": "2185:1:76",
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
                            "id": 22027,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21818,
                            "src": "2155:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 22030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22031,
                        "nodeType": "EmitStatement",
                        "src": "2150:37:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22032,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "2201:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2201:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22034,
                        "nodeType": "ExpressionStatement",
                        "src": "2201:6:76"
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
            "nameLocation": "1892:8:76",
            "parameters": {
              "id": 22003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21999,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1917:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22038,
                  "src": "1901:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21997,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1901:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 21998,
                    "nodeType": "ArrayTypeName",
                    "src": "1901:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22002,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1936:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22038,
                  "src": "1920:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22000,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1920:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 22001,
                    "nodeType": "ArrayTypeName",
                    "src": "1920:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1900:38:76"
            },
            "returnParameters": {
              "id": 22004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1956:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22080,
            "nodeType": "FunctionDefinition",
            "src": "2230:347:76",
            "nodes": [],
            "body": {
              "id": 22079,
              "nodeType": "Block",
              "src": "2305:272:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 22059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 22050,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22041,
                              "src": "2340:1:76",
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
                              "id": 22048,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2329:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2333:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2329:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2329:13:76",
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
                        "id": 22047,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2319:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2319:24:76",
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
                              "id": 22056,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22044,
                              "src": "2368:1:76",
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
                              "id": 22054,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2357:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22055,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2361:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2357:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22057,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2357:13:76",
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
                        "id": 22053,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2347:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22058,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2347:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2319:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22078,
                  "nodeType": "IfStatement",
                  "src": "2315:256:76",
                  "trueBody": {
                    "id": 22077,
                    "nodeType": "Block",
                    "src": "2373:198:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464726573735b5d5d",
                              "id": 22061,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2396:41:76",
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
                            "id": 22060,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "2392:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2392:46:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22063,
                        "nodeType": "EmitStatement",
                        "src": "2387:51:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 22065,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2473:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 22066,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22041,
                              "src": "2487:1:76",
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
                            "id": 22064,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21825,
                            "src": "2457:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 22067,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22068,
                        "nodeType": "EmitStatement",
                        "src": "2452:37:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 22070,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2524:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 22071,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22044,
                              "src": "2538:1:76",
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
                            "id": 22069,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21811,
                              21818,
                              21825
                            ],
                            "referencedDeclaration": 21825,
                            "src": "2508:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 22072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2508:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22073,
                        "nodeType": "EmitStatement",
                        "src": "2503:37:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22074,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "2554:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2554:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22076,
                        "nodeType": "ExpressionStatement",
                        "src": "2554:6:76"
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
            "nameLocation": "2239:8:76",
            "parameters": {
              "id": 22045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22041,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2265:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22080,
                  "src": "2248:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22039,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2248:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22040,
                    "nodeType": "ArrayTypeName",
                    "src": "2248:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22044,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2285:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22080,
                  "src": "2268:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22042,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2268:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22043,
                    "nodeType": "ArrayTypeName",
                    "src": "2268:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2247:40:76"
            },
            "returnParameters": {
              "id": 22046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2305:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22117,
            "nodeType": "FunctionDefinition",
            "src": "2583:256:76",
            "nodes": [],
            "body": {
              "id": 22116,
              "nodeType": "Block",
              "src": "2677:162:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 22103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 22094,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22083,
                              "src": "2712:1:76",
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
                              "id": 22092,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2701:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22093,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2705:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2701:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2701:13:76",
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
                        "id": 22091,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2691:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2691:24:76",
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
                              "id": 22100,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22086,
                              "src": "2740:1:76",
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
                              "id": 22098,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2729:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2733:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2729:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2729:13:76",
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
                        "id": 22097,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2719:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2719:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2691:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22115,
                  "nodeType": "IfStatement",
                  "src": "2687:146:76",
                  "trueBody": {
                    "id": 22114,
                    "nodeType": "Block",
                    "src": "2745:88:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22105,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2781:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22106,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22088,
                              "src": "2790:3:76",
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
                            "id": 22104,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "2764:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2764:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22108,
                        "nodeType": "EmitStatement",
                        "src": "2759:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22110,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22083,
                              "src": "2817:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 22111,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22086,
                              "src": "2820:1:76",
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
                            "id": 22109,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 21996,
                            "src": "2808:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 22112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2808:14:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22113,
                        "nodeType": "ExpressionStatement",
                        "src": "2808:14:76"
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
            "nameLocation": "2592:8:76",
            "parameters": {
              "id": 22089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22083,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2618:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22117,
                  "src": "2601:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22081,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2601:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 22082,
                    "nodeType": "ArrayTypeName",
                    "src": "2601:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22086,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2638:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22117,
                  "src": "2621:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22084,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 22085,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22088,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2655:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22117,
                  "src": "2641:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22087,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2641:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2600:59:76"
            },
            "returnParameters": {
              "id": 22090,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2677:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22154,
            "nodeType": "FunctionDefinition",
            "src": "2845:254:76",
            "nodes": [],
            "body": {
              "id": 22153,
              "nodeType": "Block",
              "src": "2937:162:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 22140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 22131,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22120,
                              "src": "2972:1:76",
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
                              "id": 22129,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2961:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22130,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2965:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2961:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2961:13:76",
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
                        "id": 22128,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2951:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2951:24:76",
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
                              "id": 22137,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22123,
                              "src": "3000:1:76",
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
                              "id": 22135,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2989:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2993:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2989:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2989:13:76",
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
                        "id": 22134,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2979:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2979:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2951:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22152,
                  "nodeType": "IfStatement",
                  "src": "2947:146:76",
                  "trueBody": {
                    "id": 22151,
                    "nodeType": "Block",
                    "src": "3005:88:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3041:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22143,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22125,
                              "src": "3050:3:76",
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
                            "id": 22141,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "3024:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3024:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22145,
                        "nodeType": "EmitStatement",
                        "src": "3019:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22147,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22120,
                              "src": "3077:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            },
                            {
                              "id": 22148,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22123,
                              "src": "3080:1:76",
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
                            "id": 22146,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 22038,
                            "src": "3068:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_int256_$dyn_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (int256[] memory,int256[] memory)"
                            }
                          },
                          "id": 22149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3068:14:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22150,
                        "nodeType": "ExpressionStatement",
                        "src": "3068:14:76"
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
            "nameLocation": "2854:8:76",
            "parameters": {
              "id": 22126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22120,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2879:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22154,
                  "src": "2863:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22118,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2863:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 22119,
                    "nodeType": "ArrayTypeName",
                    "src": "2863:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22123,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2898:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22154,
                  "src": "2882:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22121,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2882:6:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 22122,
                    "nodeType": "ArrayTypeName",
                    "src": "2882:8:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22125,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2915:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22154,
                  "src": "2901:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22124,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2862:57:76"
            },
            "returnParameters": {
              "id": 22127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2937:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22191,
            "nodeType": "FunctionDefinition",
            "src": "3105:256:76",
            "nodes": [],
            "body": {
              "id": 22190,
              "nodeType": "Block",
              "src": "3199:162:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 22177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 22168,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22157,
                              "src": "3234:1:76",
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
                              "id": 22166,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3223:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3227:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3223:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3223:13:76",
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
                        "id": 22165,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3213:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3213:24:76",
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
                              "id": 22174,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22160,
                              "src": "3262:1:76",
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
                              "id": 22172,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3251:3:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 22173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3255:6:76",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3251:10:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 22175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3251:13:76",
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
                        "id": 22171,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3241:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 22176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3241:24:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3213:52:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22189,
                  "nodeType": "IfStatement",
                  "src": "3209:146:76",
                  "trueBody": {
                    "id": 22188,
                    "nodeType": "Block",
                    "src": "3267:88:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3303:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22180,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22162,
                              "src": "3312:3:76",
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
                            "id": 22178,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "3286:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3286:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22182,
                        "nodeType": "EmitStatement",
                        "src": "3281:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22184,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22157,
                              "src": "3339:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "id": 22185,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22160,
                              "src": "3342:1:76",
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
                            "id": 22183,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 22080,
                            "src": "3330:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address[] memory,address[] memory)"
                            }
                          },
                          "id": 22186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3330:14:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22187,
                        "nodeType": "ExpressionStatement",
                        "src": "3330:14:76"
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
            "nameLocation": "3114:8:76",
            "parameters": {
              "id": 22163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22157,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3140:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22191,
                  "src": "3123:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22155,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3123:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22156,
                    "nodeType": "ArrayTypeName",
                    "src": "3123:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22160,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3160:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22191,
                  "src": "3143:18:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22158,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3143:7:76",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22159,
                    "nodeType": "ArrayTypeName",
                    "src": "3143:9:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22162,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "3177:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22191,
                  "src": "3163:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22161,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3163:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3122:59:76"
            },
            "returnParameters": {
              "id": 22164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3199:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22210,
            "nodeType": "FunctionDefinition",
            "src": "3388:110:76",
            "nodes": [],
            "body": {
              "id": 22209,
              "nodeType": "Block",
              "src": "3449:49:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 22201,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22193,
                            "src": "3476:1:76",
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
                          "id": 22200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3468:7:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 22199,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3468:7:76",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 22202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3468:10:76",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 22205,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22195,
                            "src": "3488:1:76",
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
                          "id": 22204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3480:7:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 22203,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3480:7:76",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 22206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3480:10:76",
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
                      "id": 22198,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21900,
                        21925,
                        21938,
                        21954,
                        21996,
                        22038,
                        22080,
                        22117,
                        22154,
                        22191,
                        19696,
                        19721,
                        19751,
                        19776,
                        19835,
                        19860,
                        19890,
                        19915,
                        21388,
                        21423
                      ],
                      "referencedDeclaration": 19890,
                      "src": "3459:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 22207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3459:32:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22208,
                  "nodeType": "ExpressionStatement",
                  "src": "3459:32:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqUint",
            "nameLocation": "3397:12:76",
            "parameters": {
              "id": 22196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22193,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3418:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22210,
                  "src": "3410:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22192,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3410:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22195,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3429:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22210,
                  "src": "3421:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22194,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3421:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3409:22:76"
            },
            "returnParameters": {
              "id": 22197,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3449:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22260,
            "nodeType": "FunctionDefinition",
            "src": "3504:470:76",
            "nodes": [],
            "body": {
              "id": 22259,
              "nodeType": "Block",
              "src": "3588:386:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22220
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22220,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "3606:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22259,
                      "src": "3598:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22219,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3598:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22226,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22223,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22212,
                        "src": "3628:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22224,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22214,
                        "src": "3631:1:76",
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
                        "id": 22221,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "3614:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3622:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27656,
                      "src": "3614:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3614:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3598:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22227,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22220,
                      "src": "3648:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22228,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22216,
                      "src": "3656:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3648:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22258,
                  "nodeType": "IfStatement",
                  "src": "3644:324:76",
                  "trueBody": {
                    "id": 22257,
                    "nodeType": "Block",
                    "src": "3666:302:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 22231,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3689:36:76",
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
                            "id": 22230,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "3685:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3685:41:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22233,
                        "nodeType": "EmitStatement",
                        "src": "3680:46:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 22235,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3760:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 22236,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22212,
                              "src": "3774:1:76",
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
                            "id": 22234,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "3745:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3745:31:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22238,
                        "nodeType": "EmitStatement",
                        "src": "3740:36:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 22240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3810:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 22241,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22214,
                              "src": "3824:1:76",
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
                            "id": 22239,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "3795:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3795:31:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22243,
                        "nodeType": "EmitStatement",
                        "src": "3790:36:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 22245,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3860:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 22246,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22216,
                              "src": "3874:8:76",
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
                            "id": 22244,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "3845:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3845:38:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22248,
                        "nodeType": "EmitStatement",
                        "src": "3840:43:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 22250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3917:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 22251,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22220,
                              "src": "3931:5:76",
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
                            "id": 22249,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "3902:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3902:35:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22253,
                        "nodeType": "EmitStatement",
                        "src": "3897:40:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22254,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "3951:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3951:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22256,
                        "nodeType": "ExpressionStatement",
                        "src": "3951:6:76"
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
            "nameLocation": "3513:17:76",
            "parameters": {
              "id": 22217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22212,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3539:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22260,
                  "src": "3531:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22211,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3531:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22214,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3550:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22260,
                  "src": "3542:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22213,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3542:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22216,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "3561:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22260,
                  "src": "3553:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22215,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3553:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3530:40:76"
            },
            "returnParameters": {
              "id": 22218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3588:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22296,
            "nodeType": "FunctionDefinition",
            "src": "3980:294:76",
            "nodes": [],
            "body": {
              "id": 22295,
              "nodeType": "Block",
              "src": "4083:191:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22272
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22272,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4101:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22295,
                      "src": "4093:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22271,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22278,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22275,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22262,
                        "src": "4123:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22276,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22264,
                        "src": "4126:1:76",
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
                        "id": 22273,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "4109:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4117:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27656,
                      "src": "4109:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4109:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22279,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22272,
                      "src": "4143:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22280,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22266,
                      "src": "4151:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4143:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22294,
                  "nodeType": "IfStatement",
                  "src": "4139:129:76",
                  "trueBody": {
                    "id": 22293,
                    "nodeType": "Block",
                    "src": "4161:107:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22283,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4197:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22284,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22268,
                              "src": "4206:3:76",
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
                            "id": 22282,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "4180:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4180:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22286,
                        "nodeType": "EmitStatement",
                        "src": "4175:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22288,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22262,
                              "src": "4242:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22289,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22264,
                              "src": "4245:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22290,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22266,
                              "src": "4248:8:76",
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
                            "id": 22287,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22260,
                              22296,
                              22441,
                              22477
                            ],
                            "referencedDeclaration": 22260,
                            "src": "4224:17:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 22291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4224:33:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22292,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:76"
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
            "nameLocation": "3989:17:76",
            "parameters": {
              "id": 22269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22262,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4015:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22296,
                  "src": "4007:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22261,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4007:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22264,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4026:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22296,
                  "src": "4018:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22263,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4018:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22266,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4037:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22296,
                  "src": "4029:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22268,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4061:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22296,
                  "src": "4047:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22267,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4047:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4006:59:76"
            },
            "returnParameters": {
              "id": 22270,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4083:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22352,
            "nodeType": "FunctionDefinition",
            "src": "4280:567:76",
            "nodes": [],
            "body": {
              "id": 22351,
              "nodeType": "Block",
              "src": "4389:458:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22308
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22308,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4407:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22351,
                      "src": "4399:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22307,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4399:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22314,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22311,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22298,
                        "src": "4429:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22312,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22300,
                        "src": "4432:1:76",
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
                        "id": 22309,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "4415:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4423:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27656,
                      "src": "4415:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4415:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4399:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22315,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22308,
                      "src": "4449:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22316,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22302,
                      "src": "4457:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4449:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22350,
                  "nodeType": "IfStatement",
                  "src": "4445:396:76",
                  "trueBody": {
                    "id": 22349,
                    "nodeType": "Block",
                    "src": "4467:374:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 22319,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4490:36:76",
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
                            "id": 22318,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "4486:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4486:41:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22321,
                        "nodeType": "EmitStatement",
                        "src": "4481:46:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 22323,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4569:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 22324,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22298,
                              "src": "4583:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22325,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22304,
                              "src": "4586:8:76",
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
                            "id": 22322,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "4546:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4546:49:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22327,
                        "nodeType": "EmitStatement",
                        "src": "4541:54:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 22329,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4637:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 22330,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22300,
                              "src": "4651:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22331,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22304,
                              "src": "4654:8:76",
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
                            "id": 22328,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "4614:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4614:49:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22333,
                        "nodeType": "EmitStatement",
                        "src": "4609:54:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 22335,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4705:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 22336,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22302,
                              "src": "4719:8:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22337,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22304,
                              "src": "4729:8:76",
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
                            "id": 22334,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "4682:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4682:56:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22339,
                        "nodeType": "EmitStatement",
                        "src": "4677:61:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 22341,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4780:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 22342,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22308,
                              "src": "4794:5:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22343,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22304,
                              "src": "4801:8:76",
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
                            "id": 22340,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "4757:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4757:53:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22345,
                        "nodeType": "EmitStatement",
                        "src": "4752:58:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22346,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "4824:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4824:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22348,
                        "nodeType": "ExpressionStatement",
                        "src": "4824:6:76"
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
            "nameLocation": "4289:24:76",
            "parameters": {
              "id": 22305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22298,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4322:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22352,
                  "src": "4314:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22297,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22300,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4333:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22352,
                  "src": "4325:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22302,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4344:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22352,
                  "src": "4336:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22301,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4336:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22304,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4362:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22352,
                  "src": "4354:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4354:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4313:58:76"
            },
            "returnParameters": {
              "id": 22306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4389:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22391,
            "nodeType": "FunctionDefinition",
            "src": "4853:356:76",
            "nodes": [],
            "body": {
              "id": 22390,
              "nodeType": "Block",
              "src": "5001:208:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22366
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22366,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5019:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22390,
                      "src": "5011:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22365,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5011:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22372,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22369,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22354,
                        "src": "5041:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22370,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22356,
                        "src": "5044:1:76",
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
                        "id": 22367,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "5027:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5035:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27656,
                      "src": "5027:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5027:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5011:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22373,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22366,
                      "src": "5061:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22374,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22358,
                      "src": "5069:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5061:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22389,
                  "nodeType": "IfStatement",
                  "src": "5057:146:76",
                  "trueBody": {
                    "id": 22388,
                    "nodeType": "Block",
                    "src": "5079:124:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22377,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5115:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22378,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22362,
                              "src": "5124:3:76",
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
                            "id": 22376,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "5098:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22380,
                        "nodeType": "EmitStatement",
                        "src": "5093:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22382,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22354,
                              "src": "5167:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22383,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22356,
                              "src": "5170:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22384,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22358,
                              "src": "5173:8:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22385,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22360,
                              "src": "5183:8:76",
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
                            "id": 22381,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22352,
                              22391,
                              22533,
                              22572
                            ],
                            "referencedDeclaration": 22352,
                            "src": "5142:24:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 22386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:50:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22387,
                        "nodeType": "ExpressionStatement",
                        "src": "5142:50:76"
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
            "nameLocation": "4862:24:76",
            "parameters": {
              "id": 22363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22354,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4895:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22391,
                  "src": "4887:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22356,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4906:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22391,
                  "src": "4898:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22355,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4898:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22358,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4917:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22391,
                  "src": "4909:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22357,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4909:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22360,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4935:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22391,
                  "src": "4927:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22359,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4927:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22362,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4959:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22391,
                  "src": "4945:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22361,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4945:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4886:77:76"
            },
            "returnParameters": {
              "id": 22364,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5001:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22441,
            "nodeType": "FunctionDefinition",
            "src": "5215:467:76",
            "nodes": [],
            "body": {
              "id": 22440,
              "nodeType": "Block",
              "src": "5297:385:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22401
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22401,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5315:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22440,
                      "src": "5307:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22400,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5307:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22407,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22404,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22393,
                        "src": "5337:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22405,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22395,
                        "src": "5340:1:76",
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
                        "id": 22402,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "5323:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5331:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27692,
                      "src": "5323:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5323:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5307:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22408,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22401,
                      "src": "5357:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22409,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22397,
                      "src": "5365:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5357:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22439,
                  "nodeType": "IfStatement",
                  "src": "5353:323:76",
                  "trueBody": {
                    "id": 22438,
                    "nodeType": "Block",
                    "src": "5375:301:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 22412,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5398:35:76",
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
                            "id": 22411,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "5394:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5394:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22414,
                        "nodeType": "EmitStatement",
                        "src": "5389:45:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020204c656674",
                              "id": 22416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5467:13:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              "value": "       Left"
                            },
                            {
                              "id": 22417,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22393,
                              "src": "5482:1:76",
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
                            "id": 22415,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19443,
                            "src": "5453:13:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 22418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5453:31:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22419,
                        "nodeType": "EmitStatement",
                        "src": "5448:36:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020205269676874",
                              "id": 22421,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5517:13:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              "value": "      Right"
                            },
                            {
                              "id": 22422,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22395,
                              "src": "5532:1:76",
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
                            "id": 22420,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19443,
                            "src": "5503:13:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 22423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5503:31:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22424,
                        "nodeType": "EmitStatement",
                        "src": "5498:36:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 22426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5568:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 22427,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22397,
                              "src": "5582:8:76",
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
                            "id": 22425,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "5553:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5553:38:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22429,
                        "nodeType": "EmitStatement",
                        "src": "5548:43:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 22431,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5625:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 22432,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22401,
                              "src": "5639:5:76",
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
                            "id": 22430,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "5610:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22433,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:35:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22434,
                        "nodeType": "EmitStatement",
                        "src": "5605:40:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22435,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "5659:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5659:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22437,
                        "nodeType": "ExpressionStatement",
                        "src": "5659:6:76"
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
            "nameLocation": "5224:17:76",
            "parameters": {
              "id": 22398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22393,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5249:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22441,
                  "src": "5242:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22392,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22395,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5259:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22441,
                  "src": "5252:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22394,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22397,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5270:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22441,
                  "src": "5262:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22396,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5262:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5241:38:76"
            },
            "returnParameters": {
              "id": 22399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5297:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22477,
            "nodeType": "FunctionDefinition",
            "src": "5688:292:76",
            "nodes": [],
            "body": {
              "id": 22476,
              "nodeType": "Block",
              "src": "5789:191:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22453
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22453,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5807:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22476,
                      "src": "5799:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22452,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5799:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22459,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22456,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22443,
                        "src": "5829:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22457,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22445,
                        "src": "5832:1:76",
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
                        "id": 22454,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "5815:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5823:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27692,
                      "src": "5815:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5799:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22460,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22453,
                      "src": "5849:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22461,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22447,
                      "src": "5857:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5849:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22475,
                  "nodeType": "IfStatement",
                  "src": "5845:129:76",
                  "trueBody": {
                    "id": 22474,
                    "nodeType": "Block",
                    "src": "5867:107:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22464,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5903:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22465,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22449,
                              "src": "5912:3:76",
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
                            "id": 22463,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "5886:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22466,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5886:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22467,
                        "nodeType": "EmitStatement",
                        "src": "5881:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22469,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22443,
                              "src": "5948:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22470,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22445,
                              "src": "5951:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22471,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22447,
                              "src": "5954:8:76",
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
                            "id": 22468,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22260,
                              22296,
                              22441,
                              22477
                            ],
                            "referencedDeclaration": 22441,
                            "src": "5930:17:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 22472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5930:33:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22473,
                        "nodeType": "ExpressionStatement",
                        "src": "5930:33:76"
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
            "nameLocation": "5697:17:76",
            "parameters": {
              "id": 22450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22443,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5722:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22477,
                  "src": "5715:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22442,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5715:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22445,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5732:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22477,
                  "src": "5725:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22444,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5725:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22447,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5743:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22477,
                  "src": "5735:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5735:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22449,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5767:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22477,
                  "src": "5753:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22448,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5714:57:76"
            },
            "returnParameters": {
              "id": 22451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5789:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22533,
            "nodeType": "FunctionDefinition",
            "src": "5986:562:76",
            "nodes": [],
            "body": {
              "id": 22532,
              "nodeType": "Block",
              "src": "6093:455:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22489
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22489,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6111:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22532,
                      "src": "6103:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22488,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6103:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22495,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22492,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22479,
                        "src": "6133:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22493,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22481,
                        "src": "6136:1:76",
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
                        "id": 22490,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "6119:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6127:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27692,
                      "src": "6119:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6119:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6103:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22496,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22489,
                      "src": "6153:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22497,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22483,
                      "src": "6161:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6153:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22531,
                  "nodeType": "IfStatement",
                  "src": "6149:393:76",
                  "trueBody": {
                    "id": 22530,
                    "nodeType": "Block",
                    "src": "6171:371:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 22500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6194:35:76",
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
                            "id": 22499,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "6190:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6190:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22502,
                        "nodeType": "EmitStatement",
                        "src": "6185:45:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 22504,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6271:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 22505,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22479,
                              "src": "6285:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22506,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22485,
                              "src": "6288:8:76",
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
                            "id": 22503,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19429,
                            "src": "6249:21:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 22507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6249:48:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22508,
                        "nodeType": "EmitStatement",
                        "src": "6244:53:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 22510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6338:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 22511,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22481,
                              "src": "6352:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22512,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22485,
                              "src": "6355:8:76",
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
                            "id": 22509,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19429,
                            "src": "6316:21:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 22513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6316:48:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22514,
                        "nodeType": "EmitStatement",
                        "src": "6311:53:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 22516,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6406:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 22517,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22483,
                              "src": "6420:8:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22518,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22485,
                              "src": "6430:8:76",
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
                            "id": 22515,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "6383:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22519,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6383:56:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22520,
                        "nodeType": "EmitStatement",
                        "src": "6378:61:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 22522,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6481:12:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 22523,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22489,
                              "src": "6495:5:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22524,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22485,
                              "src": "6502:8:76",
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
                            "id": 22521,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "6458:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6458:53:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22526,
                        "nodeType": "EmitStatement",
                        "src": "6453:58:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22527,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "6525:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6525:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22529,
                        "nodeType": "ExpressionStatement",
                        "src": "6525:6:76"
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
            "nameLocation": "5995:24:76",
            "parameters": {
              "id": 22486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22479,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6027:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22533,
                  "src": "6020:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22478,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22481,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6037:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22533,
                  "src": "6030:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22480,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6030:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22483,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6048:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22533,
                  "src": "6040:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6040:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22485,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6066:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22533,
                  "src": "6058:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22484,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6058:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6019:56:76"
            },
            "returnParameters": {
              "id": 22487,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6093:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22572,
            "nodeType": "FunctionDefinition",
            "src": "6554:354:76",
            "nodes": [],
            "body": {
              "id": 22571,
              "nodeType": "Block",
              "src": "6700:208:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    22547
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22547,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6718:5:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22571,
                      "src": "6710:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22546,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6710:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22553,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22550,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22535,
                        "src": "6740:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22551,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22537,
                        "src": "6743:1:76",
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
                        "id": 22548,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "6726:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6734:5:76",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27692,
                      "src": "6726:13:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6726:19:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6710:35:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22554,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22547,
                      "src": "6760:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22555,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22539,
                      "src": "6768:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6760:16:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22570,
                  "nodeType": "IfStatement",
                  "src": "6756:146:76",
                  "trueBody": {
                    "id": 22569,
                    "nodeType": "Block",
                    "src": "6778:124:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22558,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6814:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22559,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22543,
                              "src": "6823:3:76",
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
                            "id": 22557,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "6797:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6797:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22561,
                        "nodeType": "EmitStatement",
                        "src": "6792:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22563,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22535,
                              "src": "6866:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22564,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22537,
                              "src": "6869:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22565,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22539,
                              "src": "6872:8:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22566,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22541,
                              "src": "6882:8:76",
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
                            "id": 22562,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22352,
                              22391,
                              22533,
                              22572
                            ],
                            "referencedDeclaration": 22533,
                            "src": "6841:24:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 22567,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6841:50:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22568,
                        "nodeType": "ExpressionStatement",
                        "src": "6841:50:76"
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
            "nameLocation": "6563:24:76",
            "parameters": {
              "id": 22544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22535,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6595:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22572,
                  "src": "6588:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22534,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6588:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22537,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6605:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22572,
                  "src": "6598:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22536,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6598:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22539,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6616:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22572,
                  "src": "6608:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22541,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6634:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22572,
                  "src": "6626:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6626:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22543,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "6658:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22572,
                  "src": "6644:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22542,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6587:75:76"
            },
            "returnParameters": {
              "id": 22545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6700:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22637,
            "nodeType": "FunctionDefinition",
            "src": "6914:733:76",
            "nodes": [],
            "body": {
              "id": 22636,
              "nodeType": "Block",
              "src": "7091:556:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22581,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22576,
                      "src": "7105:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7110:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7105:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22589,
                  "nodeType": "IfStatement",
                  "src": "7101:33:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22585,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22574,
                          "src": "7129:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22586,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22576,
                          "src": "7132:1:76",
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
                        "id": 22584,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19890,
                        "src": "7120:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 22587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7120:14:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22580,
                    "id": 22588,
                    "nodeType": "Return",
                    "src": "7113:21:76"
                  }
                },
                {
                  "assignments": [
                    22591
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22591,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7193:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22636,
                      "src": "7185:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22590,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7185:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22597,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22594,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22574,
                        "src": "7229:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22595,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22576,
                        "src": "7232:1:76",
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
                        "id": 22592,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "7208:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7216:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27715,
                      "src": "7208:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7208:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7185:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22598,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22591,
                      "src": "7249:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22599,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22578,
                      "src": "7264:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7249:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22635,
                  "nodeType": "IfStatement",
                  "src": "7245:396:76",
                  "trueBody": {
                    "id": 22634,
                    "nodeType": "Block",
                    "src": "7281:360:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 22602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7304:36:76",
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
                            "id": 22601,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "7300:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7300:41:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22604,
                        "nodeType": "EmitStatement",
                        "src": "7295:46:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 22606,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7375:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 22607,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22574,
                              "src": "7391:1:76",
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
                            "id": 22605,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "7360:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7360:33:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22609,
                        "nodeType": "EmitStatement",
                        "src": "7355:38:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 22611,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7427:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 22612,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22576,
                              "src": "7443:1:76",
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
                            "id": 22610,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19449,
                            "src": "7412:14:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 22613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7412:33:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22614,
                        "nodeType": "EmitStatement",
                        "src": "7407:38:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 22616,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7487:14:76",
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
                              "id": 22619,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22617,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22578,
                                "src": "7503:15:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22618,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7521:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7503:21:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22620,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7526:2:76",
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
                            "id": 22615,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "7464:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22621,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7464:65:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22622,
                        "nodeType": "EmitStatement",
                        "src": "7459:70:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 22624,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7571:14:76",
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
                              "id": 22627,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22625,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22591,
                                "src": "7587:12:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22626,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7602:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7587:18:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22628,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7607:2:76",
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
                            "id": 22623,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "7548:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22629,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7548:62:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22630,
                        "nodeType": "EmitStatement",
                        "src": "7543:67:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22631,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "7624:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7624:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22633,
                        "nodeType": "ExpressionStatement",
                        "src": "7624:6:76"
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
            "nameLocation": "6923:17:76",
            "parameters": {
              "id": 22579,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22574,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6958:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22637,
                  "src": "6950:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6950:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22576,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6977:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22637,
                  "src": "6969:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6969:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22578,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "6996:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22637,
                  "src": "6988:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22577,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6988:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6940:133:76"
            },
            "returnParameters": {
              "id": 22580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7091:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22683,
            "nodeType": "FunctionDefinition",
            "src": "7653:519:76",
            "nodes": [],
            "body": {
              "id": 22682,
              "nodeType": "Block",
              "src": "7857:315:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22648,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22641,
                      "src": "7871:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7876:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7871:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22657,
                  "nodeType": "IfStatement",
                  "src": "7867:38:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22652,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22639,
                          "src": "7895:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22653,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22641,
                          "src": "7898:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22654,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22645,
                          "src": "7901:3:76",
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
                        "id": 22651,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19915,
                        "src": "7886:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 22655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7886:19:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22647,
                    "id": 22656,
                    "nodeType": "Return",
                    "src": "7879:26:76"
                  }
                },
                {
                  "assignments": [
                    22659
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22659,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7964:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22682,
                      "src": "7956:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22658,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7956:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22665,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22662,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22639,
                        "src": "8000:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22663,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22641,
                        "src": "8003:1:76",
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
                        "id": 22660,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "7979:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22661,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27715,
                      "src": "7979:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7979:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7956:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22666,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22659,
                      "src": "8020:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22667,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22643,
                      "src": "8035:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8020:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22681,
                  "nodeType": "IfStatement",
                  "src": "8016:150:76",
                  "trueBody": {
                    "id": 22680,
                    "nodeType": "Block",
                    "src": "8052:114:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22670,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8088:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22671,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22645,
                              "src": "8097:3:76",
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
                            "id": 22669,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "8071:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22672,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8071:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22673,
                        "nodeType": "EmitStatement",
                        "src": "8066:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22675,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22639,
                              "src": "8133:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22676,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22641,
                              "src": "8136:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22677,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22643,
                              "src": "8139:15:76",
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
                            "id": 22674,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22637,
                              22683,
                              22866,
                              22912
                            ],
                            "referencedDeclaration": 22637,
                            "src": "8115:17:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 22678,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8115:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22679,
                        "nodeType": "ExpressionStatement",
                        "src": "8115:40:76"
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
            "nameLocation": "7662:17:76",
            "parameters": {
              "id": 22646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22639,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7697:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22683,
                  "src": "7689:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22641,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7716:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22683,
                  "src": "7708:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22640,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7708:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22643,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "7735:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22683,
                  "src": "7727:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7727:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22645,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "7830:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22683,
                  "src": "7816:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22644,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7816:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7679:160:76"
            },
            "returnParameters": {
              "id": 22647,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7857:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22752,
            "nodeType": "FunctionDefinition",
            "src": "8178:802:76",
            "nodes": [],
            "body": {
              "id": 22751,
              "nodeType": "Block",
              "src": "8388:592:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22694,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22687,
                      "src": "8402:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8407:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8402:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22702,
                  "nodeType": "IfStatement",
                  "src": "8398:33:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22698,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22685,
                          "src": "8426:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22699,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22687,
                          "src": "8429:1:76",
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
                        "id": 22697,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19890,
                        "src": "8417:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 22700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8417:14:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22693,
                    "id": 22701,
                    "nodeType": "Return",
                    "src": "8410:21:76"
                  }
                },
                {
                  "assignments": [
                    22704
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22704,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "8490:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22751,
                      "src": "8482:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22703,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8482:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22710,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22707,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22685,
                        "src": "8526:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22708,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22687,
                        "src": "8529:1:76",
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
                        "id": 22705,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "8505:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8513:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27715,
                      "src": "8505:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8505:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8482:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22711,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22704,
                      "src": "8546:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22712,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22689,
                      "src": "8561:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8546:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22750,
                  "nodeType": "IfStatement",
                  "src": "8542:432:76",
                  "trueBody": {
                    "id": 22749,
                    "nodeType": "Block",
                    "src": "8578:396:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 22715,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8601:36:76",
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
                            "id": 22714,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "8597:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22716,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8597:41:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22717,
                        "nodeType": "EmitStatement",
                        "src": "8592:46:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 22719,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8680:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 22720,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22685,
                              "src": "8696:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22721,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22691,
                              "src": "8699:8:76",
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
                            "id": 22718,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "8657:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8657:51:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22723,
                        "nodeType": "EmitStatement",
                        "src": "8652:56:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 22725,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8750:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 22726,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22687,
                              "src": "8766:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22727,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22691,
                              "src": "8769:8:76",
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
                            "id": 22724,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "8727:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8727:51:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22729,
                        "nodeType": "EmitStatement",
                        "src": "8722:56:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 22731,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8820:14:76",
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
                              "id": 22734,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22732,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22689,
                                "src": "8836:15:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22733,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8854:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8836:21:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8859:2:76",
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
                            "id": 22730,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "8797:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22736,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8797:65:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22737,
                        "nodeType": "EmitStatement",
                        "src": "8792:70:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 22739,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8904:14:76",
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
                              "id": 22742,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22740,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22704,
                                "src": "8920:12:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22741,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8935:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8920:18:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22743,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8940:2:76",
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
                            "id": 22738,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "8881:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8881:62:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22745,
                        "nodeType": "EmitStatement",
                        "src": "8876:67:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22746,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "8957:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22747,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8957:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22748,
                        "nodeType": "ExpressionStatement",
                        "src": "8957:6:76"
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
            "nameLocation": "8187:24:76",
            "parameters": {
              "id": 22692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22685,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8229:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22752,
                  "src": "8221:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8221:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22687,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8248:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22752,
                  "src": "8240:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8240:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22689,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "8267:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22752,
                  "src": "8259:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8259:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22691,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "8356:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22752,
                  "src": "8348:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8348:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8211:159:76"
            },
            "returnParameters": {
              "id": 22693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8388:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22801,
            "nodeType": "FunctionDefinition",
            "src": "8986:569:76",
            "nodes": [],
            "body": {
              "id": 22800,
              "nodeType": "Block",
              "src": "9223:332:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22767,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22765,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22756,
                      "src": "9237:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22766,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9242:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9237:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22774,
                  "nodeType": "IfStatement",
                  "src": "9233:38:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22769,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22754,
                          "src": "9261:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22770,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22756,
                          "src": "9264:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 22771,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22762,
                          "src": "9267:3:76",
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
                        "id": 22768,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19915,
                        "src": "9252:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 22772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9252:19:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22764,
                    "id": 22773,
                    "nodeType": "Return",
                    "src": "9245:26:76"
                  }
                },
                {
                  "assignments": [
                    22776
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22776,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9330:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22800,
                      "src": "9322:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22775,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9322:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22782,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22779,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22754,
                        "src": "9366:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 22780,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22756,
                        "src": "9369:1:76",
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
                        "id": 22777,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "9345:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22778,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9353:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27715,
                      "src": "9345:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 22781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9345:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9322:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22783,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22776,
                      "src": "9386:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22784,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22758,
                      "src": "9401:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9386:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22799,
                  "nodeType": "IfStatement",
                  "src": "9382:167:76",
                  "trueBody": {
                    "id": 22798,
                    "nodeType": "Block",
                    "src": "9418:131:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22787,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9454:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22788,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22762,
                              "src": "9463:3:76",
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
                            "id": 22786,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "9437:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22789,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9437:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22790,
                        "nodeType": "EmitStatement",
                        "src": "9432:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22792,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22754,
                              "src": "9506:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22793,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22756,
                              "src": "9509:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22794,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22758,
                              "src": "9512:15:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 22795,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22760,
                              "src": "9529:8:76",
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
                            "id": 22791,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22752,
                              22801,
                              22981,
                              23030
                            ],
                            "referencedDeclaration": 22752,
                            "src": "9481:24:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 22796,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9481:57:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22797,
                        "nodeType": "ExpressionStatement",
                        "src": "9481:57:76"
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
            "nameLocation": "8995:24:76",
            "parameters": {
              "id": 22763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22754,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9037:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22801,
                  "src": "9029:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9029:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22756,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9056:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22801,
                  "src": "9048:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22755,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9048:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22758,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9075:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22801,
                  "src": "9067:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22757,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9067:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22760,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "9164:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22801,
                  "src": "9156:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22759,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9156:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22762,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "9196:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22801,
                  "src": "9182:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22761,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9182:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9019:186:76"
            },
            "returnParameters": {
              "id": 22764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9223:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22866,
            "nodeType": "FunctionDefinition",
            "src": "9561:642:76",
            "nodes": [],
            "body": {
              "id": 22865,
              "nodeType": "Block",
              "src": "9650:553:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 22812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22810,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22805,
                      "src": "9664:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22811,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9669:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9664:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22818,
                  "nodeType": "IfStatement",
                  "src": "9660:33:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22814,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22803,
                          "src": "9688:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 22815,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22805,
                          "src": "9691:1:76",
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
                        "id": 22813,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19835,
                        "src": "9679:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 22816,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9679:14:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22809,
                    "id": 22817,
                    "nodeType": "Return",
                    "src": "9672:21:76"
                  }
                },
                {
                  "assignments": [
                    22820
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22820,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9752:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22865,
                      "src": "9744:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22819,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9744:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22826,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22823,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22803,
                        "src": "9788:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22824,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22805,
                        "src": "9791:1:76",
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
                        "id": 22821,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "9767:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9775:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27744,
                      "src": "9767:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9767:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9744:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22827,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22820,
                      "src": "9808:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22828,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22807,
                      "src": "9823:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9808:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22864,
                  "nodeType": "IfStatement",
                  "src": "9804:393:76",
                  "trueBody": {
                    "id": 22863,
                    "nodeType": "Block",
                    "src": "9840:357:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 22831,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9863:35:76",
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
                            "id": 22830,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "9859:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9859:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22833,
                        "nodeType": "EmitStatement",
                        "src": "9854:45:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 22835,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 22836,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22803,
                              "src": "9948:1:76",
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
                            "id": 22834,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19443,
                            "src": "9918:13:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 22837,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9918:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22838,
                        "nodeType": "EmitStatement",
                        "src": "9913:37:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 22840,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9983:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 22841,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22805,
                              "src": "9999:1:76",
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
                            "id": 22839,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19443,
                            "src": "9969:13:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 22842,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9969:32:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22843,
                        "nodeType": "EmitStatement",
                        "src": "9964:37:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 22845,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10043:14:76",
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
                              "id": 22848,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22846,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22807,
                                "src": "10059:15:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22847,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10077:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10059:21:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22849,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10082:2:76",
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
                            "id": 22844,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "10020:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10020:65:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22851,
                        "nodeType": "EmitStatement",
                        "src": "10015:70:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 22853,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10127:14:76",
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
                              "id": 22856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22854,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22820,
                                "src": "10143:12:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22855,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10158:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10143:18:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22857,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10163:2:76",
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
                            "id": 22852,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "10104:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22858,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10104:62:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22859,
                        "nodeType": "EmitStatement",
                        "src": "10099:67:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22860,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "10180:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10180:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22862,
                        "nodeType": "ExpressionStatement",
                        "src": "10180:6:76"
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
            "nameLocation": "9570:17:76",
            "parameters": {
              "id": 22808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22803,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9595:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22866,
                  "src": "9588:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22802,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22805,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9605:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22866,
                  "src": "9598:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22804,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9598:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22807,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9616:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22866,
                  "src": "9608:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9608:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:45:76"
            },
            "returnParameters": {
              "id": 22809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9650:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22912,
            "nodeType": "FunctionDefinition",
            "src": "10209:423:76",
            "nodes": [],
            "body": {
              "id": 22911,
              "nodeType": "Block",
              "src": "10317:315:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 22879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22877,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22870,
                      "src": "10331:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22878,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10336:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10331:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22886,
                  "nodeType": "IfStatement",
                  "src": "10327:38:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22881,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22868,
                          "src": "10355:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 22882,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22870,
                          "src": "10358:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 22883,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22874,
                          "src": "10361:3:76",
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
                        "id": 22880,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19860,
                        "src": "10346:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 22884,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10346:19:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22876,
                    "id": 22885,
                    "nodeType": "Return",
                    "src": "10339:26:76"
                  }
                },
                {
                  "assignments": [
                    22888
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22888,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10424:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22911,
                      "src": "10416:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22887,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10416:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22894,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22891,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22868,
                        "src": "10460:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22892,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22870,
                        "src": "10463:1:76",
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
                        "id": 22889,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "10439:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22890,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10447:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27744,
                      "src": "10439:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10439:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10416:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22895,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22888,
                      "src": "10480:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22896,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22872,
                      "src": "10495:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10480:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22910,
                  "nodeType": "IfStatement",
                  "src": "10476:150:76",
                  "trueBody": {
                    "id": 22909,
                    "nodeType": "Block",
                    "src": "10512:114:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 22899,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10548:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 22900,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22874,
                              "src": "10557:3:76",
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
                            "id": 22898,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "10531:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 22901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10531:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22902,
                        "nodeType": "EmitStatement",
                        "src": "10526:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 22904,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22868,
                              "src": "10593:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22905,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22870,
                              "src": "10596:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22906,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22872,
                              "src": "10599:15:76",
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
                            "id": 22903,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22637,
                              22683,
                              22866,
                              22912
                            ],
                            "referencedDeclaration": 22866,
                            "src": "10575:17:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 22907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10575:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22908,
                        "nodeType": "ExpressionStatement",
                        "src": "10575:40:76"
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
            "nameLocation": "10218:17:76",
            "parameters": {
              "id": 22875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22868,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10243:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22912,
                  "src": "10236:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22867,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10236:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22870,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10253:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22912,
                  "src": "10246:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22869,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10246:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22872,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10264:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22912,
                  "src": "10256:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10256:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22874,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "10295:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22912,
                  "src": "10281:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22873,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10281:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10235:64:76"
            },
            "returnParameters": {
              "id": 22876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10317:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 22981,
            "nodeType": "FunctionDefinition",
            "src": "10638:703:76",
            "nodes": [],
            "body": {
              "id": 22980,
              "nodeType": "Block",
              "src": "10752:589:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 22925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22923,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22916,
                      "src": "10766:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10771:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10766:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22931,
                  "nodeType": "IfStatement",
                  "src": "10762:33:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22927,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22914,
                          "src": "10790:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 22928,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22916,
                          "src": "10793:1:76",
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
                        "id": 22926,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19835,
                        "src": "10781:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 22929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10781:14:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22922,
                    "id": 22930,
                    "nodeType": "Return",
                    "src": "10774:21:76"
                  }
                },
                {
                  "assignments": [
                    22933
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22933,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10854:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 22980,
                      "src": "10846:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 22932,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10846:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22939,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 22936,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22914,
                        "src": "10890:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 22937,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22916,
                        "src": "10893:1:76",
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
                        "id": 22934,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "10869:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 22935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10877:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27744,
                      "src": "10869:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 22938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10869:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10846:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 22942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22940,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22933,
                      "src": "10910:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 22941,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22918,
                      "src": "10925:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10910:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22979,
                  "nodeType": "IfStatement",
                  "src": "10906:429:76",
                  "trueBody": {
                    "id": 22978,
                    "nodeType": "Block",
                    "src": "10942:393:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 22944,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10965:35:76",
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
                            "id": 22943,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "10961:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 22945,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10961:40:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22946,
                        "nodeType": "EmitStatement",
                        "src": "10956:45:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 22948,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11042:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 22949,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22914,
                              "src": "11058:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22950,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22920,
                              "src": "11061:8:76",
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
                            "id": 22947,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19429,
                            "src": "11020:21:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 22951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11020:50:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22952,
                        "nodeType": "EmitStatement",
                        "src": "11015:55:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 22954,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11111:14:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 22955,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22916,
                              "src": "11127:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 22956,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22920,
                              "src": "11130:8:76",
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
                            "id": 22953,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19429,
                            "src": "11089:21:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 22957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11089:50:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22958,
                        "nodeType": "EmitStatement",
                        "src": "11084:55:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 22960,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11181:14:76",
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
                              "id": 22963,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22961,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22918,
                                "src": "11197:15:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22962,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11215:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11197:21:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22964,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11220:2:76",
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
                            "id": 22959,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "11158:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22965,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11158:65:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22966,
                        "nodeType": "EmitStatement",
                        "src": "11153:70:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 22968,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11265:14:76",
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
                              "id": 22971,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 22969,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22933,
                                "src": "11281:12:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 22970,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11296:3:76",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11281:18:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 22972,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11301:2:76",
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
                            "id": 22967,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19437,
                            "src": "11242:22:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 22973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11242:62:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22974,
                        "nodeType": "EmitStatement",
                        "src": "11237:67:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 22975,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "11318:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 22976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11318:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 22977,
                        "nodeType": "ExpressionStatement",
                        "src": "11318:6:76"
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
            "nameLocation": "10647:24:76",
            "parameters": {
              "id": 22921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22914,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10679:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22981,
                  "src": "10672:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22913,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10672:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22916,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10689:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22981,
                  "src": "10682:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22915,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10682:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22918,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10700:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22981,
                  "src": "10692:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22917,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10692:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22920,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "10725:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 22981,
                  "src": "10717:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22919,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10717:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10671:63:76"
            },
            "returnParameters": {
              "id": 22922,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10752:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23030,
            "nodeType": "FunctionDefinition",
            "src": "11347:485:76",
            "nodes": [],
            "body": {
              "id": 23029,
              "nodeType": "Block",
              "src": "11500:332:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 22996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22994,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22985,
                      "src": "11514:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 22995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11519:1:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11514:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23003,
                  "nodeType": "IfStatement",
                  "src": "11510:38:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 22998,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22983,
                          "src": "11538:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 22999,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22985,
                          "src": "11541:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 23000,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22991,
                          "src": "11544:3:76",
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
                        "id": 22997,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          21900,
                          21925,
                          21938,
                          21954,
                          21996,
                          22038,
                          22080,
                          22117,
                          22154,
                          22191,
                          19696,
                          19721,
                          19751,
                          19776,
                          19835,
                          19860,
                          19890,
                          19915,
                          21388,
                          21423
                        ],
                        "referencedDeclaration": 19860,
                        "src": "11529:8:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 23001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11529:19:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 22993,
                    "id": 23002,
                    "nodeType": "Return",
                    "src": "11522:26:76"
                  }
                },
                {
                  "assignments": [
                    23005
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23005,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "11607:12:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 23029,
                      "src": "11599:20:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23004,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11599:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23011,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23008,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22983,
                        "src": "11643:1:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 23009,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22985,
                        "src": "11646:1:76",
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
                        "id": 23006,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27745,
                        "src": "11622:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$27745_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 23007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11630:12:76",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27744,
                      "src": "11622:20:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 23010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11622:26:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11599:49:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23012,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23005,
                      "src": "11663:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 23013,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22987,
                      "src": "11678:15:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11663:30:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23028,
                  "nodeType": "IfStatement",
                  "src": "11659:167:76",
                  "trueBody": {
                    "id": 23027,
                    "nodeType": "Block",
                    "src": "11695:131:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 23016,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11731:7:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 23017,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22991,
                              "src": "11740:3:76",
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
                            "id": 23015,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19461,
                            "src": "11714:16:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 23018,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11714:30:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23019,
                        "nodeType": "EmitStatement",
                        "src": "11709:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 23021,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22983,
                              "src": "11783:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 23022,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22985,
                              "src": "11786:1:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 23023,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22987,
                              "src": "11789:15:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 23024,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22989,
                              "src": "11806:8:76",
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
                            "id": 23020,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              22752,
                              22801,
                              22981,
                              23030
                            ],
                            "referencedDeclaration": 22981,
                            "src": "11758:24:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 23025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11758:57:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23026,
                        "nodeType": "ExpressionStatement",
                        "src": "11758:57:76"
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
            "nameLocation": "11356:24:76",
            "parameters": {
              "id": 22992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22983,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "11388:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23030,
                  "src": "11381:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22982,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11381:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22985,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11398:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23030,
                  "src": "11391:8:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22984,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11391:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22987,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "11409:15:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23030,
                  "src": "11401:23:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22986,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11401:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22989,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "11434:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23030,
                  "src": "11426:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22988,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11426:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22991,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "11458:3:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23030,
                  "src": "11444:17:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22990,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11444:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11380:82:76"
            },
            "returnParameters": {
              "id": 22993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11500:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23048,
            "nodeType": "FunctionDefinition",
            "src": "11838:176:76",
            "nodes": [],
            "body": {
              "id": 23047,
              "nodeType": "Block",
              "src": "11941:73:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23040,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23032,
                        "src": "11964:6:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23041,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23034,
                        "src": "11972:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 23042,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23032,
                        "src": "11983:6:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23043,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23036,
                        "src": "11991:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 23044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12002:4:76",
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
                      "id": 23039,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23048,
                        23068,
                        23088,
                        23198
                      ],
                      "referencedDeclaration": 23198,
                      "src": "11951:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 23045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11951:56:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23046,
                  "nodeType": "ExpressionStatement",
                  "src": "11951:56:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "11847:12:76",
            "parameters": {
              "id": 23037,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23032,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "11868:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23048,
                  "src": "11860:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23031,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11860:7:76",
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
                  "id": 23034,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "11889:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23048,
                  "src": "11876:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23033,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11876:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23036,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "11913:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23048,
                  "src": "11900:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23035,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11900:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11859:64:76"
            },
            "returnParameters": {
              "id": 23038,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11941:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23068,
            "nodeType": "FunctionDefinition",
            "src": "12020:216:76",
            "nodes": [],
            "body": {
              "id": 23067,
              "nodeType": "Block",
              "src": "12161:75:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23060,
                        "name": "targetA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23050,
                        "src": "12184:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23061,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23052,
                        "src": "12193:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 23062,
                        "name": "targetB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23054,
                        "src": "12204:7:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23063,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23056,
                        "src": "12213:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 23064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12224:4:76",
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
                      "id": 23059,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23048,
                        23068,
                        23088,
                        23198
                      ],
                      "referencedDeclaration": 23198,
                      "src": "12171:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 23065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12171:58:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23066,
                  "nodeType": "ExpressionStatement",
                  "src": "12171:58:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12029:12:76",
            "parameters": {
              "id": 23057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23050,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12050:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23068,
                  "src": "12042:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23049,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12042:7:76",
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
                  "id": 23052,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12072:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23068,
                  "src": "12059:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23051,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12059:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23054,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12091:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23068,
                  "src": "12083:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23053,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12083:7:76",
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
                  "id": 23056,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12113:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23068,
                  "src": "12100:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23055,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12100:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12041:82:76"
            },
            "returnParameters": {
              "id": 23058,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12161:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23088,
            "nodeType": "FunctionDefinition",
            "src": "12242:231:76",
            "nodes": [],
            "body": {
              "id": 23087,
              "nodeType": "Block",
              "src": "12388:85:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23080,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23070,
                        "src": "12411:6:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23081,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23072,
                        "src": "12419:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 23082,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23070,
                        "src": "12430:6:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 23083,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23074,
                        "src": "12438:9:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 23084,
                        "name": "strictRevertData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23076,
                        "src": "12449:16:76",
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
                      "id": 23079,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23048,
                        23068,
                        23088,
                        23198
                      ],
                      "referencedDeclaration": 23198,
                      "src": "12398:12:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 23085,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12398:68:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23086,
                  "nodeType": "ExpressionStatement",
                  "src": "12398:68:76"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12251:12:76",
            "parameters": {
              "id": 23077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23070,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "12272:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23088,
                  "src": "12264:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12264:7:76",
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
                  "id": 23072,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12293:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23088,
                  "src": "12280:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23071,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12280:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23074,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12317:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23088,
                  "src": "12304:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23073,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12304:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23076,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12333:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23088,
                  "src": "12328:21:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23075,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12328:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12263:87:76"
            },
            "returnParameters": {
              "id": 23078,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12388:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23198,
            "nodeType": "FunctionDefinition",
            "src": "12479:1189:76",
            "nodes": [],
            "body": {
              "id": 23197,
              "nodeType": "Block",
              "src": "12669:999:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23102,
                    23104
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23102,
                      "mutability": "mutable",
                      "name": "successA",
                      "nameLocation": "12685:8:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 23197,
                      "src": "12680:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 23101,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12680:4:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 23104,
                      "mutability": "mutable",
                      "name": "returnDataA",
                      "nameLocation": "12708:11:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 23197,
                      "src": "12695:24:76",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 23103,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12695:5:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23112,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23110,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23092,
                        "src": "12745:9:76",
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
                            "id": 23107,
                            "name": "targetA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23090,
                            "src": "12731:7:76",
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
                          "id": 23106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12723:7:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 23105,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12723:7:76",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12723:16:76",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 23109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12740:4:76",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12723:21:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 23111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12723:32:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12679:76:76"
                },
                {
                  "assignments": [
                    23114,
                    23116
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23114,
                      "mutability": "mutable",
                      "name": "successB",
                      "nameLocation": "12771:8:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 23197,
                      "src": "12766:13:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 23113,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12766:4:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 23116,
                      "mutability": "mutable",
                      "name": "returnDataB",
                      "nameLocation": "12794:11:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 23197,
                      "src": "12781:24:76",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 23115,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12781:5:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23124,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23122,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23096,
                        "src": "12831:9:76",
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
                            "id": 23119,
                            "name": "targetB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23094,
                            "src": "12817:7:76",
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
                          "id": 23118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12809:7:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 23117,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12809:7:76",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12809:16:76",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 23121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12826:4:76",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12809:21:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 23123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12809:32:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12765:76:76"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 23127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23125,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23102,
                      "src": "12856:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 23126,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23114,
                      "src": "12868:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12856:20:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23135,
                  "nodeType": "IfStatement",
                  "src": "12852:120:76",
                  "trueBody": {
                    "id": 23134,
                    "nodeType": "Block",
                    "src": "12878:94:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 23129,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23104,
                              "src": "12901:11:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 23130,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23116,
                              "src": "12914:11:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c2072657475726e206461746120646f6573206e6f74206d61746368",
                              "id": 23131,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12927:33:76",
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
                            "id": 23128,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 21954,
                            "src": "12892:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 23132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12892:69:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23133,
                        "nodeType": "ExpressionStatement",
                        "src": "12892:69:76"
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
                    "id": 23142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 23140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23137,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12986:9:76",
                        "subExpression": {
                          "id": 23136,
                          "name": "successA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23102,
                          "src": "12987:8:76",
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
                        "id": 23139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12999:9:76",
                        "subExpression": {
                          "id": 23138,
                          "name": "successB",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23114,
                          "src": "13000:8:76",
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
                      "src": "12986:22:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 23141,
                      "name": "strictRevertData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23098,
                      "src": "13012:16:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12986:42:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23150,
                  "nodeType": "IfStatement",
                  "src": "12982:142:76",
                  "trueBody": {
                    "id": 23149,
                    "nodeType": "Block",
                    "src": "13030:94:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 23144,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23104,
                              "src": "13053:11:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 23145,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23116,
                              "src": "13066:11:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c20726576657274206461746120646f6573206e6f74206d61746368",
                              "id": 23146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13079:33:76",
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
                            "id": 23143,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21900,
                              21925,
                              21938,
                              21954,
                              21996,
                              22038,
                              22080,
                              22117,
                              22154,
                              22191,
                              19696,
                              19721,
                              19751,
                              19776,
                              19835,
                              19860,
                              19890,
                              19915,
                              21388,
                              21423
                            ],
                            "referencedDeclaration": 21954,
                            "src": "13044:8:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 23147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13044:69:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23148,
                        "nodeType": "ExpressionStatement",
                        "src": "13044:69:76"
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
                    "id": 23154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23152,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13138:9:76",
                      "subExpression": {
                        "id": 23151,
                        "name": "successA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23102,
                        "src": "13139:8:76",
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
                      "id": 23153,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23114,
                      "src": "13151:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13138:21:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23173,
                  "nodeType": "IfStatement",
                  "src": "13134:259:76",
                  "trueBody": {
                    "id": 23172,
                    "nodeType": "Block",
                    "src": "13161:232:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 23156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13184:29:76",
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
                            "id": 23155,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "13180:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 23157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13180:34:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23158,
                        "nodeType": "EmitStatement",
                        "src": "13175:39:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c207265766572742064617461",
                              "id": 23160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13249:25:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              "value": "  Left call revert data"
                            },
                            {
                              "id": 23161,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23104,
                              "src": "13276:11:76",
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
                            "id": 23159,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19455,
                            "src": "13233:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 23162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13233:55:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23163,
                        "nodeType": "EmitStatement",
                        "src": "13228:60:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c2072657475726e2064617461",
                              "id": 23165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13323:25:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              "value": " Right call return data"
                            },
                            {
                              "id": 23166,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23116,
                              "src": "13350:11:76",
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
                            "id": 23164,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19455,
                            "src": "13307:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 23167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13307:55:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23168,
                        "nodeType": "EmitStatement",
                        "src": "13302:60:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 23169,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "13376:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 23170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13376:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23171,
                        "nodeType": "ExpressionStatement",
                        "src": "13376:6:76"
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
                    "id": 23177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23174,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23102,
                      "src": "13407:8:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 23176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13419:9:76",
                      "subExpression": {
                        "id": 23175,
                        "name": "successB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23114,
                        "src": "13420:8:76",
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
                    "src": "13407:21:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23196,
                  "nodeType": "IfStatement",
                  "src": "13403:259:76",
                  "trueBody": {
                    "id": 23195,
                    "nodeType": "Block",
                    "src": "13430:232:76",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 23179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13453:29:76",
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
                            "id": 23178,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19381,
                            "src": "13449:3:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 23180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13449:34:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23181,
                        "nodeType": "EmitStatement",
                        "src": "13444:39:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c2072657475726e2064617461",
                              "id": 23183,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13518:25:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              "value": "  Left call return data"
                            },
                            {
                              "id": 23184,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23104,
                              "src": "13545:11:76",
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
                            "id": 23182,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19455,
                            "src": "13502:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 23185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13502:55:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23186,
                        "nodeType": "EmitStatement",
                        "src": "13497:60:76"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c207265766572742064617461",
                              "id": 23188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13592:25:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              "value": " Right call revert data"
                            },
                            {
                              "id": 23189,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23116,
                              "src": "13619:11:76",
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
                            "id": 23187,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19455,
                            "src": "13576:15:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 23190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13576:55:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23191,
                        "nodeType": "EmitStatement",
                        "src": "13571:60:76"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 23192,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              21839,
                              19592
                            ],
                            "referencedDeclaration": 19592,
                            "src": "13645:4:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 23193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13645:6:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 23194,
                        "nodeType": "ExpressionStatement",
                        "src": "13645:6:76"
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
            "nameLocation": "12488:12:76",
            "parameters": {
              "id": 23099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23090,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12518:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23198,
                  "src": "12510:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23089,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12510:7:76",
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
                  "id": 23092,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12548:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23198,
                  "src": "12535:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23091,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12535:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23094,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12575:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23198,
                  "src": "12567:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23093,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12567:7:76",
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
                  "id": 23096,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12605:9:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23198,
                  "src": "12592:22:76",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23095,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23098,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12629:16:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 23198,
                  "src": "12624:21:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23097,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12624:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12500:151:76"
            },
            "returnParameters": {
              "id": 23100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12669:0:76"
            },
            "scope": 23199,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 21788,
              "name": "DSTest",
              "nameLocations": [
                "181:6:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 21667,
              "src": "181:6:76"
            },
            "id": 21789,
            "nodeType": "InheritanceSpecifier",
            "src": "181:6:76"
          }
        ],
        "canonicalName": "StdAssertions",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          23199,
          21667
        ],
        "name": "StdAssertions",
        "nameLocation": "164:13:76",
        "scope": 23200,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 76
} as const;
