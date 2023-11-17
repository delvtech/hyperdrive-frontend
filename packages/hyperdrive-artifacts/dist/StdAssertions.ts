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
    "id": 19850,
    "exportedSymbols": {
      "DSTest": [
        18317
      ],
      "StdAssertions": [
        19849
      ],
      "stdMath": [
        24395
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:13639:65",
    "nodes": [
      {
        "id": 18433,
        "nodeType": "PragmaDirective",
        "src": "32:31:65",
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
        "id": 18435,
        "nodeType": "ImportDirective",
        "src": "65:40:65",
        "nodes": [],
        "absolutePath": "lib/forge-std/lib/ds-test/src/test.sol",
        "file": "ds-test/test.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19850,
        "sourceUnit": 18318,
        "symbolAliases": [
          {
            "foreign": {
              "id": 18434,
              "name": "DSTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 18317,
              "src": "73:6:65",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 18437,
        "nodeType": "ImportDirective",
        "src": "106:38:65",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "./StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19850,
        "sourceUnit": 24396,
        "symbolAliases": [
          {
            "foreign": {
              "id": 18436,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 24395,
              "src": "114:7:65",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 19849,
        "nodeType": "ContractDefinition",
        "src": "146:13524:65",
        "nodes": [
          {
            "id": 18444,
            "nodeType": "EventDefinition",
            "src": "194:31:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fb102865d50addddf69da9b5aa1bced66c80cf869a5c8d0471a467e18ce9cab1",
            "name": "log_array",
            "nameLocation": "200:9:65",
            "parameters": {
              "id": 18443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18442,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "220:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18444,
                  "src": "210:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18440,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "210:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18441,
                    "nodeType": "ArrayTypeName",
                    "src": "210:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "209:15:65"
            }
          },
          {
            "id": 18449,
            "nodeType": "EventDefinition",
            "src": "230:30:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "890a82679b470f2bd82816ed9b161f97d8b967f37fa3647c21d5bf39749e2dd5",
            "name": "log_array",
            "nameLocation": "236:9:65",
            "parameters": {
              "id": 18448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18447,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "255:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18449,
                  "src": "246:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18445,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "246:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18446,
                    "nodeType": "ArrayTypeName",
                    "src": "246:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "245:14:65"
            }
          },
          {
            "id": 18454,
            "nodeType": "EventDefinition",
            "src": "265:31:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "40e1840f5769073d61bd01372d9b75baa9842d5629a0c99ff103be1178a8e9e2",
            "name": "log_array",
            "nameLocation": "271:9:65",
            "parameters": {
              "id": 18453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18452,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "291:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18454,
                  "src": "281:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18450,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "281:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18451,
                    "nodeType": "ArrayTypeName",
                    "src": "281:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:15:65"
            }
          },
          {
            "id": 18461,
            "nodeType": "EventDefinition",
            "src": "301:49:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "00aaa39c9ffb5f567a4534380c737075702e1f7f14107fc95328e3b56c0325fb",
            "name": "log_named_array",
            "nameLocation": "307:15:65",
            "parameters": {
              "id": 18460,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18456,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "330:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "323:10:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18455,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18459,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "345:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18461,
                  "src": "335:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18457,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "335:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18458,
                    "nodeType": "ArrayTypeName",
                    "src": "335:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "322:27:65"
            }
          },
          {
            "id": 18468,
            "nodeType": "EventDefinition",
            "src": "355:48:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a73eda09662f46dde729be4611385ff34fe6c44fbbc6f7e17b042b59a3445b57",
            "name": "log_named_array",
            "nameLocation": "361:15:65",
            "parameters": {
              "id": 18467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18463,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "384:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18468,
                  "src": "377:10:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18462,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18466,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "398:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18468,
                  "src": "389:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18464,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "389:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18465,
                    "nodeType": "ArrayTypeName",
                    "src": "389:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "376:26:65"
            }
          },
          {
            "id": 18475,
            "nodeType": "EventDefinition",
            "src": "408:49:65",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "3bcfb2ae2e8d132dd1fce7cf278a9a19756a9fceabe470df3bdabb4bc577d1bd",
            "name": "log_named_array",
            "nameLocation": "414:15:65",
            "parameters": {
              "id": 18474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18470,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "437:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18475,
                  "src": "430:10:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18469,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "430:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18473,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "452:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18475,
                  "src": "442:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18471,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "442:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18472,
                    "nodeType": "ArrayTypeName",
                    "src": "442:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "429:27:65"
            }
          },
          {
            "id": 18489,
            "nodeType": "FunctionDefinition",
            "src": "463:118:65",
            "nodes": [],
            "body": {
              "id": 18488,
              "nodeType": "Block",
              "src": "513:68:65",
              "nodes": [],
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "hexValue": "4572726f72",
                        "id": 18481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "545:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        "value": "Error"
                      },
                      {
                        "id": 18482,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18477,
                        "src": "554:3:65",
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
                      "id": 18480,
                      "name": "log_named_string",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16111,
                      "src": "528:16:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
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
                    "src": "528:30:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18484,
                  "nodeType": "EmitStatement",
                  "src": "523:35:65"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 18485,
                      "name": "fail",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18489,
                        16242
                      ],
                      "referencedDeclaration": 16242,
                      "src": "568:4:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 18486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "568:6:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18487,
                  "nodeType": "ExpressionStatement",
                  "src": "568:6:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fail",
            "nameLocation": "472:4:65",
            "parameters": {
              "id": 18478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18477,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "491:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18489,
                  "src": "477:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18476,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "476:19:65"
            },
            "returnParameters": {
              "id": 18479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "513:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18500,
            "nodeType": "FunctionDefinition",
            "src": "587:83:65",
            "nodes": [],
            "body": {
              "id": 18499,
              "nodeType": "Block",
              "src": "636:34:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "657:5:65",
                        "subExpression": {
                          "id": 18495,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18491,
                          "src": "658:4:65",
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
                      "id": 18494,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        16295,
                        16316
                      ],
                      "referencedDeclaration": 16295,
                      "src": "646:10:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 18497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "646:17:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18498,
                  "nodeType": "ExpressionStatement",
                  "src": "646:17:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "596:11:65",
            "parameters": {
              "id": 18492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18491,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "613:4:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18500,
                  "src": "608:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "607:11:65"
            },
            "returnParameters": {
              "id": 18493,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "636:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18514,
            "nodeType": "FunctionDefinition",
            "src": "676:107:65",
            "nodes": [],
            "body": {
              "id": 18513,
              "nodeType": "Block",
              "src": "744:39:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "765:5:65",
                        "subExpression": {
                          "id": 18508,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18502,
                          "src": "766:4:65",
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
                        "id": 18510,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18504,
                        "src": "772:3:65",
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
                      "id": 18507,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        16295,
                        16316
                      ],
                      "referencedDeclaration": 16316,
                      "src": "754:10:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 18511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "754:22:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18512,
                  "nodeType": "ExpressionStatement",
                  "src": "754:22:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "685:11:65",
            "parameters": {
              "id": 18505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18502,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "702:4:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18514,
                  "src": "697:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18501,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18504,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "722:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18514,
                  "src": "708:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18503,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "696:30:65"
            },
            "returnParameters": {
              "id": 18506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "744:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18550,
            "nodeType": "FunctionDefinition",
            "src": "789:312:65",
            "nodes": [],
            "body": {
              "id": 18549,
              "nodeType": "Block",
              "src": "840:261:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 18523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18521,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18516,
                      "src": "854:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 18522,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18518,
                      "src": "859:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "854:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18548,
                  "nodeType": "IfStatement",
                  "src": "850:245:65",
                  "trueBody": {
                    "id": 18547,
                    "nodeType": "Block",
                    "src": "862:233:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6c5d",
                              "id": 18525,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "885:36:65",
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
                            "id": 18524,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "881:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:41:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18527,
                        "nodeType": "EmitStatement",
                        "src": "876:46:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18529,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "958:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "condition": {
                                "id": 18530,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18516,
                                "src": "972:1:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 18532,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "985:7:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 18533,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "972:20:65",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 18531,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "976:6:65",
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
                            "id": 18528,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "941:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18534,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "941:52:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18535,
                        "nodeType": "EmitStatement",
                        "src": "936:57:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1029:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "condition": {
                                "id": 18538,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18518,
                                "src": "1043:1:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 18540,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1056:7:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 18541,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "1043:20:65",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 18539,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1047:6:65",
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
                            "id": 18536,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "1012:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
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
                          "src": "1012:52:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18543,
                        "nodeType": "EmitStatement",
                        "src": "1007:57:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18544,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "1078:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1078:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18546,
                        "nodeType": "ExpressionStatement",
                        "src": "1078:6:65"
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
            "nameLocation": "798:8:65",
            "parameters": {
              "id": 18519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18516,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "812:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18550,
                  "src": "807:6:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18515,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "807:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18518,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "820:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18550,
                  "src": "815:6:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18517,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "806:16:65"
            },
            "returnParameters": {
              "id": 18520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18575,
            "nodeType": "FunctionDefinition",
            "src": "1107:186:65",
            "nodes": [],
            "body": {
              "id": 18574,
              "nodeType": "Block",
              "src": "1177:116:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 18561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18559,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18552,
                      "src": "1191:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 18560,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18554,
                      "src": "1196:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1191:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18573,
                  "nodeType": "IfStatement",
                  "src": "1187:100:65",
                  "trueBody": {
                    "id": 18572,
                    "nodeType": "Block",
                    "src": "1199:88:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1235:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18564,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18556,
                              "src": "1244:3:65",
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
                            "id": 18562,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "1218:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1218:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18566,
                        "nodeType": "EmitStatement",
                        "src": "1213:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18568,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18552,
                              "src": "1271:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "id": 18569,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18554,
                              "src": "1274:1:65",
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
                            "id": 18567,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18550,
                            "src": "1262:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_bool_$returns$__$",
                              "typeString": "function (bool,bool)"
                            }
                          },
                          "id": 18570,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1262:14:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18571,
                        "nodeType": "ExpressionStatement",
                        "src": "1262:14:65"
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
            "nameLocation": "1116:8:65",
            "parameters": {
              "id": 18557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18552,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1130:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18575,
                  "src": "1125:6:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18551,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1125:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18554,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1138:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18575,
                  "src": "1133:6:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18553,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18556,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1155:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18575,
                  "src": "1141:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18555,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1124:35:65"
            },
            "returnParameters": {
              "id": 18558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1177:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18588,
            "nodeType": "FunctionDefinition",
            "src": "1299:99:65",
            "nodes": [],
            "body": {
              "id": 18587,
              "nodeType": "Block",
              "src": "1366:32:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18583,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18577,
                        "src": "1386:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18584,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18579,
                        "src": "1389:1:65",
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
                      "id": 18582,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18232,
                        18259
                      ],
                      "referencedDeclaration": 18232,
                      "src": "1376:9:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory)"
                      }
                    },
                    "id": 18585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1376:15:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18586,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:15:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1308:8:65",
            "parameters": {
              "id": 18580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18577,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1330:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18588,
                  "src": "1317:14:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18576,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1317:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18579,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1346:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18588,
                  "src": "1333:14:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18578,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1316:32:65"
            },
            "returnParameters": {
              "id": 18581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1366:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18604,
            "nodeType": "FunctionDefinition",
            "src": "1404:123:65",
            "nodes": [],
            "body": {
              "id": 18603,
              "nodeType": "Block",
              "src": "1490:37:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 18598,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18590,
                        "src": "1510:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18599,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18592,
                        "src": "1513:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 18600,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18594,
                        "src": "1516:3:65",
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
                      "id": 18597,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18232,
                        18259
                      ],
                      "referencedDeclaration": 18259,
                      "src": "1500:9:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory,string memory)"
                      }
                    },
                    "id": 18601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1500:20:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18602,
                  "nodeType": "ExpressionStatement",
                  "src": "1500:20:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1413:8:65",
            "parameters": {
              "id": 18595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18590,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1435:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18604,
                  "src": "1422:14:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18589,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18592,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1451:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18604,
                  "src": "1438:14:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 18591,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1438:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18594,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1468:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18604,
                  "src": "1454:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18593,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1421:51:65"
            },
            "returnParameters": {
              "id": 18596,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18646,
            "nodeType": "FunctionDefinition",
            "src": "1533:344:65",
            "nodes": [],
            "body": {
              "id": 18645,
              "nodeType": "Block",
              "src": "1608:269:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18616,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18607,
                              "src": "1643:1:65",
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
                              "id": 18614,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1632:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1636:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1632:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18617,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1632:13:65",
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
                        "id": 18613,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1622:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18618,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:24:65",
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
                              "id": 18622,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18610,
                              "src": "1671:1:65",
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
                              "id": 18620,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1660:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1664:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1660:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1660:13:65",
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
                        "id": 18619,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1650:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1650:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1622:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18644,
                  "nodeType": "IfStatement",
                  "src": "1618:253:65",
                  "trueBody": {
                    "id": 18643,
                    "nodeType": "Block",
                    "src": "1676:195:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e745b5d5d",
                              "id": 18627,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1699:38:65",
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
                            "id": 18626,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "1695:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1695:43:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18629,
                        "nodeType": "EmitStatement",
                        "src": "1690:48:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18631,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1773:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18632,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18607,
                              "src": "1787:1:65",
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
                            "id": 18630,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18461,
                            "src": "1757:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 18633,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18634,
                        "nodeType": "EmitStatement",
                        "src": "1752:37:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18636,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1824:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18637,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18610,
                              "src": "1838:1:65",
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
                            "id": 18635,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18461,
                            "src": "1808:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 18638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18639,
                        "nodeType": "EmitStatement",
                        "src": "1803:37:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18640,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "1854:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1854:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18642,
                        "nodeType": "ExpressionStatement",
                        "src": "1854:6:65"
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
            "nameLocation": "1542:8:65",
            "parameters": {
              "id": 18611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18607,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1568:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18646,
                  "src": "1551:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18605,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1551:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18606,
                    "nodeType": "ArrayTypeName",
                    "src": "1551:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18610,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1588:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18646,
                  "src": "1571:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18608,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1571:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18609,
                    "nodeType": "ArrayTypeName",
                    "src": "1571:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1550:40:65"
            },
            "returnParameters": {
              "id": 18612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1608:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18688,
            "nodeType": "FunctionDefinition",
            "src": "1883:341:65",
            "nodes": [],
            "body": {
              "id": 18687,
              "nodeType": "Block",
              "src": "1956:268:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18658,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18649,
                              "src": "1991:1:65",
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
                              "id": 18656,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1980:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18657,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1984:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1980:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:13:65",
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
                        "id": 18655,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1970:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1970:24:65",
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
                              "id": 18664,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18652,
                              "src": "2019:1:65",
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
                              "id": 18662,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2008:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2012:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2008:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2008:13:65",
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
                        "id": 18661,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1998:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
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
                      "src": "1998:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1970:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18686,
                  "nodeType": "IfStatement",
                  "src": "1966:252:65",
                  "trueBody": {
                    "id": 18685,
                    "nodeType": "Block",
                    "src": "2024:194:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b696e745b5d5d",
                              "id": 18669,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2047:37:65",
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
                            "id": 18668,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "2043:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18670,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2043:42:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18671,
                        "nodeType": "EmitStatement",
                        "src": "2038:47:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18673,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2120:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18674,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18649,
                              "src": "2134:1:65",
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
                            "id": 18672,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18468,
                            "src": "2104:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 18675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2104:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18676,
                        "nodeType": "EmitStatement",
                        "src": "2099:37:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18678,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2171:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18679,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18652,
                              "src": "2185:1:65",
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
                            "id": 18677,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18468,
                            "src": "2155:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 18680,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18681,
                        "nodeType": "EmitStatement",
                        "src": "2150:37:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18682,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "2201:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
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
                          "src": "2201:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18684,
                        "nodeType": "ExpressionStatement",
                        "src": "2201:6:65"
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
            "nameLocation": "1892:8:65",
            "parameters": {
              "id": 18653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18649,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1917:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18688,
                  "src": "1901:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18647,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1901:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18648,
                    "nodeType": "ArrayTypeName",
                    "src": "1901:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18652,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1936:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18688,
                  "src": "1920:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18650,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1920:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18651,
                    "nodeType": "ArrayTypeName",
                    "src": "1920:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1900:38:65"
            },
            "returnParameters": {
              "id": 18654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1956:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18730,
            "nodeType": "FunctionDefinition",
            "src": "2230:347:65",
            "nodes": [],
            "body": {
              "id": 18729,
              "nodeType": "Block",
              "src": "2305:272:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18700,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18691,
                              "src": "2340:1:65",
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
                              "id": 18698,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2329:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2333:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2329:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18701,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2329:13:65",
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
                        "id": 18697,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2319:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
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
                      "src": "2319:24:65",
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
                              "id": 18706,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18694,
                              "src": "2368:1:65",
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
                              "id": 18704,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2357:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18705,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2361:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2357:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18707,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2357:13:65",
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
                        "id": 18703,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2347:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18708,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2347:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2319:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18728,
                  "nodeType": "IfStatement",
                  "src": "2315:256:65",
                  "trueBody": {
                    "id": 18727,
                    "nodeType": "Block",
                    "src": "2373:198:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464726573735b5d5d",
                              "id": 18711,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2396:41:65",
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
                            "id": 18710,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "2392:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18712,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2392:46:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18713,
                        "nodeType": "EmitStatement",
                        "src": "2387:51:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18715,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2473:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18716,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18691,
                              "src": "2487:1:65",
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
                            "id": 18714,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18475,
                            "src": "2457:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 18717,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18718,
                        "nodeType": "EmitStatement",
                        "src": "2452:37:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18720,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2524:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18721,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18694,
                              "src": "2538:1:65",
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
                            "id": 18719,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18461,
                              18468,
                              18475
                            ],
                            "referencedDeclaration": 18475,
                            "src": "2508:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 18722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2508:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18723,
                        "nodeType": "EmitStatement",
                        "src": "2503:37:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18724,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "2554:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
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
                          "src": "2554:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18726,
                        "nodeType": "ExpressionStatement",
                        "src": "2554:6:65"
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
            "nameLocation": "2239:8:65",
            "parameters": {
              "id": 18695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18691,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2265:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18730,
                  "src": "2248:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18689,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2248:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18690,
                    "nodeType": "ArrayTypeName",
                    "src": "2248:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18694,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2285:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18730,
                  "src": "2268:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18692,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2268:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18693,
                    "nodeType": "ArrayTypeName",
                    "src": "2268:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2247:40:65"
            },
            "returnParameters": {
              "id": 18696,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2305:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18767,
            "nodeType": "FunctionDefinition",
            "src": "2583:256:65",
            "nodes": [],
            "body": {
              "id": 18766,
              "nodeType": "Block",
              "src": "2677:162:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18744,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18733,
                              "src": "2712:1:65",
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
                              "id": 18742,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2701:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2705:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2701:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2701:13:65",
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
                        "id": 18741,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2691:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2691:24:65",
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
                              "id": 18750,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18736,
                              "src": "2740:1:65",
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
                              "id": 18748,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2729:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18749,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2733:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2729:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2729:13:65",
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
                        "id": 18747,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2719:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2719:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2691:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18765,
                  "nodeType": "IfStatement",
                  "src": "2687:146:65",
                  "trueBody": {
                    "id": 18764,
                    "nodeType": "Block",
                    "src": "2745:88:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2781:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18756,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18738,
                              "src": "2790:3:65",
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
                            "id": 18754,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "2764:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18757,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2764:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18758,
                        "nodeType": "EmitStatement",
                        "src": "2759:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18760,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18733,
                              "src": "2817:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 18761,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18736,
                              "src": "2820:1:65",
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
                            "id": 18759,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18646,
                            "src": "2808:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 18762,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2808:14:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18763,
                        "nodeType": "ExpressionStatement",
                        "src": "2808:14:65"
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
            "nameLocation": "2592:8:65",
            "parameters": {
              "id": 18739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18733,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2618:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18767,
                  "src": "2601:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18731,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2601:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18732,
                    "nodeType": "ArrayTypeName",
                    "src": "2601:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18736,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2638:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18767,
                  "src": "2621:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18734,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18735,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18738,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2655:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18767,
                  "src": "2641:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18737,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2641:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2600:59:65"
            },
            "returnParameters": {
              "id": 18740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2677:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18804,
            "nodeType": "FunctionDefinition",
            "src": "2845:254:65",
            "nodes": [],
            "body": {
              "id": 18803,
              "nodeType": "Block",
              "src": "2937:162:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18781,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18770,
                              "src": "2972:1:65",
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
                              "id": 18779,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2961:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18780,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2965:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2961:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2961:13:65",
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
                        "id": 18778,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2951:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2951:24:65",
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
                              "id": 18787,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18773,
                              "src": "3000:1:65",
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
                              "id": 18785,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2989:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18786,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2993:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2989:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2989:13:65",
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
                        "id": 18784,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2979:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2979:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2951:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18802,
                  "nodeType": "IfStatement",
                  "src": "2947:146:65",
                  "trueBody": {
                    "id": 18801,
                    "nodeType": "Block",
                    "src": "3005:88:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18792,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3041:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18793,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18775,
                              "src": "3050:3:65",
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
                            "id": 18791,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "3024:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18794,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3024:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18795,
                        "nodeType": "EmitStatement",
                        "src": "3019:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18797,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18770,
                              "src": "3077:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            },
                            {
                              "id": 18798,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18773,
                              "src": "3080:1:65",
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
                            "id": 18796,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18688,
                            "src": "3068:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_int256_$dyn_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (int256[] memory,int256[] memory)"
                            }
                          },
                          "id": 18799,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3068:14:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18800,
                        "nodeType": "ExpressionStatement",
                        "src": "3068:14:65"
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
            "nameLocation": "2854:8:65",
            "parameters": {
              "id": 18776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18770,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2879:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18804,
                  "src": "2863:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18768,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2863:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18769,
                    "nodeType": "ArrayTypeName",
                    "src": "2863:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18773,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2898:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18804,
                  "src": "2882:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18771,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2882:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 18772,
                    "nodeType": "ArrayTypeName",
                    "src": "2882:8:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18775,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2915:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18804,
                  "src": "2901:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18774,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2862:57:65"
            },
            "returnParameters": {
              "id": 18777,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2937:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18841,
            "nodeType": "FunctionDefinition",
            "src": "3105:256:65",
            "nodes": [],
            "body": {
              "id": 18840,
              "nodeType": "Block",
              "src": "3199:162:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 18827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 18818,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18807,
                              "src": "3234:1:65",
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
                              "id": 18816,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3223:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18817,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3227:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3223:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18819,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3223:13:65",
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
                        "id": 18815,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3213:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3213:24:65",
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
                              "id": 18824,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18810,
                              "src": "3262:1:65",
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
                              "id": 18822,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3251:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 18823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3255:6:65",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3251:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 18825,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3251:13:65",
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
                        "id": 18821,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3241:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 18826,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3241:24:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3213:52:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18839,
                  "nodeType": "IfStatement",
                  "src": "3209:146:65",
                  "trueBody": {
                    "id": 18838,
                    "nodeType": "Block",
                    "src": "3267:88:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18829,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3303:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18830,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18812,
                              "src": "3312:3:65",
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
                            "id": 18828,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "3286:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3286:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18832,
                        "nodeType": "EmitStatement",
                        "src": "3281:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18834,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18807,
                              "src": "3339:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "id": 18835,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18810,
                              "src": "3342:1:65",
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
                            "id": 18833,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18730,
                            "src": "3330:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address[] memory,address[] memory)"
                            }
                          },
                          "id": 18836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3330:14:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18837,
                        "nodeType": "ExpressionStatement",
                        "src": "3330:14:65"
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
            "nameLocation": "3114:8:65",
            "parameters": {
              "id": 18813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18807,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3140:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18841,
                  "src": "3123:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18805,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3123:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18806,
                    "nodeType": "ArrayTypeName",
                    "src": "3123:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18810,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3160:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18841,
                  "src": "3143:18:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18808,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3143:7:65",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 18809,
                    "nodeType": "ArrayTypeName",
                    "src": "3143:9:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18812,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "3177:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18841,
                  "src": "3163:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3163:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3122:59:65"
            },
            "returnParameters": {
              "id": 18814,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3199:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18860,
            "nodeType": "FunctionDefinition",
            "src": "3388:110:65",
            "nodes": [],
            "body": {
              "id": 18859,
              "nodeType": "Block",
              "src": "3449:49:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 18851,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18843,
                            "src": "3476:1:65",
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
                          "id": 18850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3468:7:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 18849,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3468:7:65",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 18852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3468:10:65",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 18855,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18845,
                            "src": "3488:1:65",
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
                          "id": 18854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3480:7:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 18853,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3480:7:65",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 18856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3480:10:65",
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
                      "id": 18848,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18550,
                        18575,
                        18588,
                        18604,
                        18646,
                        18688,
                        18730,
                        18767,
                        18804,
                        18841,
                        16346,
                        16371,
                        16401,
                        16426,
                        16485,
                        16510,
                        16540,
                        16565,
                        18038,
                        18073
                      ],
                      "referencedDeclaration": 16540,
                      "src": "3459:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 18857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3459:32:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18858,
                  "nodeType": "ExpressionStatement",
                  "src": "3459:32:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqUint",
            "nameLocation": "3397:12:65",
            "parameters": {
              "id": 18846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18843,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3418:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18860,
                  "src": "3410:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3410:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18845,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3429:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18860,
                  "src": "3421:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3421:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3409:22:65"
            },
            "returnParameters": {
              "id": 18847,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3449:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18910,
            "nodeType": "FunctionDefinition",
            "src": "3504:470:65",
            "nodes": [],
            "body": {
              "id": 18909,
              "nodeType": "Block",
              "src": "3588:386:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18870
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18870,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "3606:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 18909,
                      "src": "3598:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18869,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3598:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18876,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18873,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18862,
                        "src": "3628:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18874,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18864,
                        "src": "3631:1:65",
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
                        "id": 18871,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "3614:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3622:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24306,
                      "src": "3614:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18875,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3614:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3598:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18877,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18870,
                      "src": "3648:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18878,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18866,
                      "src": "3656:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3648:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18908,
                  "nodeType": "IfStatement",
                  "src": "3644:324:65",
                  "trueBody": {
                    "id": 18907,
                    "nodeType": "Block",
                    "src": "3666:302:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18881,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3689:36:65",
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
                            "id": 18880,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "3685:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18882,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3685:41:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18883,
                        "nodeType": "EmitStatement",
                        "src": "3680:46:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18885,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3760:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18886,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18862,
                              "src": "3774:1:65",
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
                            "id": 18884,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "3745:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18887,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3745:31:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18888,
                        "nodeType": "EmitStatement",
                        "src": "3740:36:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18890,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3810:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18891,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18864,
                              "src": "3824:1:65",
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
                            "id": 18889,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "3795:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3795:31:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18893,
                        "nodeType": "EmitStatement",
                        "src": "3790:36:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18895,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3860:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18896,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18866,
                              "src": "3874:8:65",
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
                            "id": 18894,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "3845:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 18897,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3845:38:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18898,
                        "nodeType": "EmitStatement",
                        "src": "3840:43:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3917:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18901,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18870,
                              "src": "3931:5:65",
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
                            "id": 18899,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "3902:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
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
                          "src": "3902:35:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18903,
                        "nodeType": "EmitStatement",
                        "src": "3897:40:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18904,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "3951:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3951:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18906,
                        "nodeType": "ExpressionStatement",
                        "src": "3951:6:65"
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
            "nameLocation": "3513:17:65",
            "parameters": {
              "id": 18867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18862,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3539:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18910,
                  "src": "3531:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3531:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18864,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3550:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18910,
                  "src": "3542:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3542:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18866,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "3561:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18910,
                  "src": "3553:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18865,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3553:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3530:40:65"
            },
            "returnParameters": {
              "id": 18868,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3588:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 18946,
            "nodeType": "FunctionDefinition",
            "src": "3980:294:65",
            "nodes": [],
            "body": {
              "id": 18945,
              "nodeType": "Block",
              "src": "4083:191:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18922
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18922,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4101:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 18945,
                      "src": "4093:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 18921,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 18928,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 18925,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18912,
                        "src": "4123:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18926,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18914,
                        "src": "4126:1:65",
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
                        "id": 18923,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "4109:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4117:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24306,
                      "src": "4109:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 18927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4109:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 18931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 18929,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18922,
                      "src": "4143:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18930,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18916,
                      "src": "4151:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4143:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18944,
                  "nodeType": "IfStatement",
                  "src": "4139:129:65",
                  "trueBody": {
                    "id": 18943,
                    "nodeType": "Block",
                    "src": "4161:107:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 18933,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4197:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 18934,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18918,
                              "src": "4206:3:65",
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
                            "id": 18932,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "4180:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 18935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4180:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18936,
                        "nodeType": "EmitStatement",
                        "src": "4175:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 18938,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18912,
                              "src": "4242:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18939,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18914,
                              "src": "4245:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18940,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18916,
                              "src": "4248:8:65",
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
                            "id": 18937,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18910,
                              18946,
                              19091,
                              19127
                            ],
                            "referencedDeclaration": 18910,
                            "src": "4224:17:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 18941,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4224:33:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18942,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:65"
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
            "nameLocation": "3989:17:65",
            "parameters": {
              "id": 18919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18912,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4015:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18946,
                  "src": "4007:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18911,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4007:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18914,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4026:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18946,
                  "src": "4018:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4018:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18916,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4037:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18946,
                  "src": "4029:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18918,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4061:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 18946,
                  "src": "4047:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18917,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4047:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4006:59:65"
            },
            "returnParameters": {
              "id": 18920,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4083:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19002,
            "nodeType": "FunctionDefinition",
            "src": "4280:567:65",
            "nodes": [],
            "body": {
              "id": 19001,
              "nodeType": "Block",
              "src": "4389:458:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    18958
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 18958,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4407:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19001,
                      "src": "4399:13:65",
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
                        "src": "4399:7:65",
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
                        "referencedDeclaration": 18948,
                        "src": "4429:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 18962,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18950,
                        "src": "4432:1:65",
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
                        "id": 18959,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "4415:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 18960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4423:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24306,
                      "src": "4415:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
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
                    "src": "4415:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4399:35:65"
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
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18958,
                      "src": "4449:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 18966,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18952,
                      "src": "4457:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4449:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19000,
                  "nodeType": "IfStatement",
                  "src": "4445:396:65",
                  "trueBody": {
                    "id": 18999,
                    "nodeType": "Block",
                    "src": "4467:374:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 18969,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4490:36:65",
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
                            "id": 18968,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "4486:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 18970,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4486:41:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18971,
                        "nodeType": "EmitStatement",
                        "src": "4481:46:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 18973,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4569:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 18974,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18948,
                              "src": "4583:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18975,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18954,
                              "src": "4586:8:65",
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
                            "id": 18972,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "4546:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4546:49:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18977,
                        "nodeType": "EmitStatement",
                        "src": "4541:54:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 18979,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4637:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 18980,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18950,
                              "src": "4651:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18981,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18954,
                              "src": "4654:8:65",
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
                            "id": 18978,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "4614:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4614:49:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18983,
                        "nodeType": "EmitStatement",
                        "src": "4609:54:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 18985,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4705:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 18986,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18952,
                              "src": "4719:8:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18987,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18954,
                              "src": "4729:8:65",
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
                            "id": 18984,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "4682:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4682:56:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18989,
                        "nodeType": "EmitStatement",
                        "src": "4677:61:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 18991,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4780:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 18992,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18958,
                              "src": "4794:5:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 18993,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18954,
                              "src": "4801:8:65",
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
                            "id": 18990,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "4757:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 18994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4757:53:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18995,
                        "nodeType": "EmitStatement",
                        "src": "4752:58:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 18996,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "4824:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 18997,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4824:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 18998,
                        "nodeType": "ExpressionStatement",
                        "src": "4824:6:65"
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
            "nameLocation": "4289:24:65",
            "parameters": {
              "id": 18955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18948,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4322:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19002,
                  "src": "4314:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18950,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4333:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19002,
                  "src": "4325:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18952,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4344:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19002,
                  "src": "4336:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4336:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18954,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4362:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19002,
                  "src": "4354:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18953,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4354:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4313:58:65"
            },
            "returnParameters": {
              "id": 18956,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4389:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19041,
            "nodeType": "FunctionDefinition",
            "src": "4853:356:65",
            "nodes": [],
            "body": {
              "id": 19040,
              "nodeType": "Block",
              "src": "5001:208:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19016
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19016,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5019:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19040,
                      "src": "5011:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19015,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5011:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19022,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19019,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19004,
                        "src": "5041:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19020,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19006,
                        "src": "5044:1:65",
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
                        "id": 19017,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "5027:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19018,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5035:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24306,
                      "src": "5027:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
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
                    "src": "5027:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5011:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19025,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19023,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19016,
                      "src": "5061:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19024,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19008,
                      "src": "5069:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5061:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19039,
                  "nodeType": "IfStatement",
                  "src": "5057:146:65",
                  "trueBody": {
                    "id": 19038,
                    "nodeType": "Block",
                    "src": "5079:124:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19027,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5115:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19028,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19012,
                              "src": "5124:3:65",
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
                            "id": 19026,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "5098:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19029,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19030,
                        "nodeType": "EmitStatement",
                        "src": "5093:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19032,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19004,
                              "src": "5167:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19033,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19006,
                              "src": "5170:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19034,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19008,
                              "src": "5173:8:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19035,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19010,
                              "src": "5183:8:65",
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
                            "id": 19031,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19002,
                              19041,
                              19183,
                              19222
                            ],
                            "referencedDeclaration": 19002,
                            "src": "5142:24:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 19036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:50:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19037,
                        "nodeType": "ExpressionStatement",
                        "src": "5142:50:65"
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
            "nameLocation": "4862:24:65",
            "parameters": {
              "id": 19013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19004,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4895:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19041,
                  "src": "4887:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19003,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19006,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4906:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19041,
                  "src": "4898:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4898:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19008,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4917:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19041,
                  "src": "4909:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19007,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4909:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19010,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4935:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19041,
                  "src": "4927:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4927:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19012,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4959:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19041,
                  "src": "4945:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19011,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4945:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4886:77:65"
            },
            "returnParameters": {
              "id": 19014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5001:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19091,
            "nodeType": "FunctionDefinition",
            "src": "5215:467:65",
            "nodes": [],
            "body": {
              "id": 19090,
              "nodeType": "Block",
              "src": "5297:385:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19051
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19051,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5315:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19090,
                      "src": "5307:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19050,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5307:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19057,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19054,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19043,
                        "src": "5337:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19055,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19045,
                        "src": "5340:1:65",
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
                        "id": 19052,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "5323:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5331:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24342,
                      "src": "5323:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5323:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5307:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19058,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19051,
                      "src": "5357:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19059,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19047,
                      "src": "5365:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5357:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19089,
                  "nodeType": "IfStatement",
                  "src": "5353:323:65",
                  "trueBody": {
                    "id": 19088,
                    "nodeType": "Block",
                    "src": "5375:301:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 19062,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5398:35:65",
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
                            "id": 19061,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "5394:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5394:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19064,
                        "nodeType": "EmitStatement",
                        "src": "5389:45:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020204c656674",
                              "id": 19066,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5467:13:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              "value": "       Left"
                            },
                            {
                              "id": 19067,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19043,
                              "src": "5482:1:65",
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
                            "id": 19065,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16093,
                            "src": "5453:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 19068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5453:31:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19069,
                        "nodeType": "EmitStatement",
                        "src": "5448:36:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020205269676874",
                              "id": 19071,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5517:13:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              "value": "      Right"
                            },
                            {
                              "id": 19072,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19045,
                              "src": "5532:1:65",
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
                            "id": 19070,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16093,
                            "src": "5503:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 19073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5503:31:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19074,
                        "nodeType": "EmitStatement",
                        "src": "5498:36:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 19076,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5568:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 19077,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19047,
                              "src": "5582:8:65",
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
                            "id": 19075,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "5553:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 19078,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5553:38:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19079,
                        "nodeType": "EmitStatement",
                        "src": "5548:43:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 19081,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5625:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 19082,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19051,
                              "src": "5639:5:65",
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
                            "id": 19080,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "5610:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 19083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:35:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19084,
                        "nodeType": "EmitStatement",
                        "src": "5605:40:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19085,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "5659:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19086,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5659:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19087,
                        "nodeType": "ExpressionStatement",
                        "src": "5659:6:65"
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
            "nameLocation": "5224:17:65",
            "parameters": {
              "id": 19048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19043,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5249:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19091,
                  "src": "5242:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19042,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19045,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5259:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19091,
                  "src": "5252:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19044,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19047,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5270:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19091,
                  "src": "5262:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19046,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5262:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5241:38:65"
            },
            "returnParameters": {
              "id": 19049,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5297:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19127,
            "nodeType": "FunctionDefinition",
            "src": "5688:292:65",
            "nodes": [],
            "body": {
              "id": 19126,
              "nodeType": "Block",
              "src": "5789:191:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19103,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5807:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19126,
                      "src": "5799:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19102,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5799:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19109,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19106,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19093,
                        "src": "5829:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19107,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19095,
                        "src": "5832:1:65",
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
                        "id": 19104,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "5815:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5823:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24342,
                      "src": "5815:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5799:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19110,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19103,
                      "src": "5849:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19111,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19097,
                      "src": "5857:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5849:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19125,
                  "nodeType": "IfStatement",
                  "src": "5845:129:65",
                  "trueBody": {
                    "id": 19124,
                    "nodeType": "Block",
                    "src": "5867:107:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19114,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5903:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19115,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19099,
                              "src": "5912:3:65",
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
                            "id": 19113,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "5886:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5886:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19117,
                        "nodeType": "EmitStatement",
                        "src": "5881:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19119,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19093,
                              "src": "5948:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19120,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19095,
                              "src": "5951:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19121,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19097,
                              "src": "5954:8:65",
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
                            "id": 19118,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18910,
                              18946,
                              19091,
                              19127
                            ],
                            "referencedDeclaration": 19091,
                            "src": "5930:17:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 19122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5930:33:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19123,
                        "nodeType": "ExpressionStatement",
                        "src": "5930:33:65"
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
            "nameLocation": "5697:17:65",
            "parameters": {
              "id": 19100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19093,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5722:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19127,
                  "src": "5715:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19092,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5715:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19095,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5732:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19127,
                  "src": "5725:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19094,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5725:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19097,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5743:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19127,
                  "src": "5735:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5735:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19099,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5767:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19127,
                  "src": "5753:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19098,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5714:57:65"
            },
            "returnParameters": {
              "id": 19101,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5789:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19183,
            "nodeType": "FunctionDefinition",
            "src": "5986:562:65",
            "nodes": [],
            "body": {
              "id": 19182,
              "nodeType": "Block",
              "src": "6093:455:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19139
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19139,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6111:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19182,
                      "src": "6103:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19138,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6103:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19145,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19142,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19129,
                        "src": "6133:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19143,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19131,
                        "src": "6136:1:65",
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
                        "id": 19140,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "6119:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6127:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24342,
                      "src": "6119:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6119:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6103:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19146,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19139,
                      "src": "6153:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19147,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19133,
                      "src": "6161:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6153:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19181,
                  "nodeType": "IfStatement",
                  "src": "6149:393:65",
                  "trueBody": {
                    "id": 19180,
                    "nodeType": "Block",
                    "src": "6171:371:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 19150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6194:35:65",
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
                            "id": 19149,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "6190:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6190:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19152,
                        "nodeType": "EmitStatement",
                        "src": "6185:45:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 19154,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6271:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 19155,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19129,
                              "src": "6285:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19156,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19135,
                              "src": "6288:8:65",
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
                            "id": 19153,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16079,
                            "src": "6249:21:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6249:48:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19158,
                        "nodeType": "EmitStatement",
                        "src": "6244:53:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 19160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6338:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 19161,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19131,
                              "src": "6352:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19162,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19135,
                              "src": "6355:8:65",
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
                            "id": 19159,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16079,
                            "src": "6316:21:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6316:48:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19164,
                        "nodeType": "EmitStatement",
                        "src": "6311:53:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 19166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6406:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 19167,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19133,
                              "src": "6420:8:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19168,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19135,
                              "src": "6430:8:65",
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
                            "id": 19165,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "6383:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6383:56:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19170,
                        "nodeType": "EmitStatement",
                        "src": "6378:61:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 19172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6481:12:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 19173,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19139,
                              "src": "6495:5:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19174,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19135,
                              "src": "6502:8:65",
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
                            "id": 19171,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "6458:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6458:53:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19176,
                        "nodeType": "EmitStatement",
                        "src": "6453:58:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19177,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "6525:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6525:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19179,
                        "nodeType": "ExpressionStatement",
                        "src": "6525:6:65"
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
            "nameLocation": "5995:24:65",
            "parameters": {
              "id": 19136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19129,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6027:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19183,
                  "src": "6020:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19128,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19131,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6037:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19183,
                  "src": "6030:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19130,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6030:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19133,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6048:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19183,
                  "src": "6040:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6040:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19135,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6066:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19183,
                  "src": "6058:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6058:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6019:56:65"
            },
            "returnParameters": {
              "id": 19137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6093:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19222,
            "nodeType": "FunctionDefinition",
            "src": "6554:354:65",
            "nodes": [],
            "body": {
              "id": 19221,
              "nodeType": "Block",
              "src": "6700:208:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19197
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19197,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6718:5:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19221,
                      "src": "6710:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19196,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6710:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19203,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19200,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19185,
                        "src": "6740:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19201,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19187,
                        "src": "6743:1:65",
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
                        "id": 19198,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "6726:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6734:5:65",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24342,
                      "src": "6726:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
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
                    "src": "6726:19:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6710:35:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19204,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19197,
                      "src": "6760:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19205,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19189,
                      "src": "6768:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6760:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19220,
                  "nodeType": "IfStatement",
                  "src": "6756:146:65",
                  "trueBody": {
                    "id": 19219,
                    "nodeType": "Block",
                    "src": "6778:124:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6814:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19209,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19193,
                              "src": "6823:3:65",
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
                            "id": 19207,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "6797:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6797:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19211,
                        "nodeType": "EmitStatement",
                        "src": "6792:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19213,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19185,
                              "src": "6866:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19214,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19187,
                              "src": "6869:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19215,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19189,
                              "src": "6872:8:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19216,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19191,
                              "src": "6882:8:65",
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
                            "id": 19212,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19002,
                              19041,
                              19183,
                              19222
                            ],
                            "referencedDeclaration": 19183,
                            "src": "6841:24:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
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
                          "src": "6841:50:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19218,
                        "nodeType": "ExpressionStatement",
                        "src": "6841:50:65"
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
            "nameLocation": "6563:24:65",
            "parameters": {
              "id": 19194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19185,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6595:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19222,
                  "src": "6588:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19184,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6588:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19187,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6605:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19222,
                  "src": "6598:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19186,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6598:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19189,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6616:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19222,
                  "src": "6608:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19191,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6634:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19222,
                  "src": "6626:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6626:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19193,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "6658:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19222,
                  "src": "6644:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19192,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6587:75:65"
            },
            "returnParameters": {
              "id": 19195,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6700:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19287,
            "nodeType": "FunctionDefinition",
            "src": "6914:733:65",
            "nodes": [],
            "body": {
              "id": 19286,
              "nodeType": "Block",
              "src": "7091:556:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19231,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19226,
                      "src": "7105:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19232,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7110:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7105:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19239,
                  "nodeType": "IfStatement",
                  "src": "7101:33:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19235,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19224,
                          "src": "7129:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19236,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19226,
                          "src": "7132:1:65",
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
                        "id": 19234,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16540,
                        "src": "7120:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
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
                      "src": "7120:14:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19230,
                    "id": 19238,
                    "nodeType": "Return",
                    "src": "7113:21:65"
                  }
                },
                {
                  "assignments": [
                    19241
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19241,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7193:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19286,
                      "src": "7185:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19240,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7185:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19247,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19244,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19224,
                        "src": "7229:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19245,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19226,
                        "src": "7232:1:65",
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
                        "id": 19242,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "7208:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7216:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24365,
                      "src": "7208:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7208:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7185:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19248,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19241,
                      "src": "7249:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19249,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19228,
                      "src": "7264:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7249:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19285,
                  "nodeType": "IfStatement",
                  "src": "7245:396:65",
                  "trueBody": {
                    "id": 19284,
                    "nodeType": "Block",
                    "src": "7281:360:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 19252,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7304:36:65",
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
                            "id": 19251,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "7300:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7300:41:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19254,
                        "nodeType": "EmitStatement",
                        "src": "7295:46:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 19256,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7375:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 19257,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19224,
                              "src": "7391:1:65",
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
                            "id": 19255,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "7360:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 19258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7360:33:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19259,
                        "nodeType": "EmitStatement",
                        "src": "7355:38:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 19261,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7427:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 19262,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19226,
                              "src": "7443:1:65",
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
                            "id": 19260,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16099,
                            "src": "7412:14:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
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
                          "src": "7412:33:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19264,
                        "nodeType": "EmitStatement",
                        "src": "7407:38:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 19266,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7487:14:65",
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
                              "id": 19269,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19267,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19228,
                                "src": "7503:15:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19268,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7521:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7503:21:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19270,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7526:2:65",
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
                            "id": 19265,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "7464:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7464:65:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19272,
                        "nodeType": "EmitStatement",
                        "src": "7459:70:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 19274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7571:14:65",
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
                              "id": 19277,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19275,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19241,
                                "src": "7587:12:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7602:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7587:18:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7607:2:65",
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
                            "id": 19273,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "7548:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7548:62:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19280,
                        "nodeType": "EmitStatement",
                        "src": "7543:67:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19281,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "7624:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7624:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19283,
                        "nodeType": "ExpressionStatement",
                        "src": "7624:6:65"
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
            "nameLocation": "6923:17:65",
            "parameters": {
              "id": 19229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19224,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6958:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19287,
                  "src": "6950:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6950:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19226,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6977:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19287,
                  "src": "6969:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19225,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6969:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19228,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "6996:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19287,
                  "src": "6988:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19227,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6988:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6940:133:65"
            },
            "returnParameters": {
              "id": 19230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7091:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19333,
            "nodeType": "FunctionDefinition",
            "src": "7653:519:65",
            "nodes": [],
            "body": {
              "id": 19332,
              "nodeType": "Block",
              "src": "7857:315:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19298,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19291,
                      "src": "7871:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7876:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7871:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19307,
                  "nodeType": "IfStatement",
                  "src": "7867:38:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19302,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19289,
                          "src": "7895:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19303,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19291,
                          "src": "7898:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19304,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19295,
                          "src": "7901:3:65",
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
                        "id": 19301,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16565,
                        "src": "7886:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 19305,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7886:19:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19297,
                    "id": 19306,
                    "nodeType": "Return",
                    "src": "7879:26:65"
                  }
                },
                {
                  "assignments": [
                    19309
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19309,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7964:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19332,
                      "src": "7956:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19308,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7956:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19315,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19312,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19289,
                        "src": "8000:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19313,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19291,
                        "src": "8003:1:65",
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
                        "id": 19310,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "7979:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19311,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24365,
                      "src": "7979:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7979:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7956:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19316,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19309,
                      "src": "8020:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19317,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19293,
                      "src": "8035:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8020:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19331,
                  "nodeType": "IfStatement",
                  "src": "8016:150:65",
                  "trueBody": {
                    "id": 19330,
                    "nodeType": "Block",
                    "src": "8052:114:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19320,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8088:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19321,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19295,
                              "src": "8097:3:65",
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
                            "id": 19319,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "8071:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8071:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19323,
                        "nodeType": "EmitStatement",
                        "src": "8066:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19325,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19289,
                              "src": "8133:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19326,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19291,
                              "src": "8136:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19327,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19293,
                              "src": "8139:15:65",
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
                            "id": 19324,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19287,
                              19333,
                              19516,
                              19562
                            ],
                            "referencedDeclaration": 19287,
                            "src": "8115:17:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 19328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8115:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19329,
                        "nodeType": "ExpressionStatement",
                        "src": "8115:40:65"
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
            "nameLocation": "7662:17:65",
            "parameters": {
              "id": 19296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19289,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7697:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19333,
                  "src": "7689:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19288,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19291,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7716:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19333,
                  "src": "7708:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19290,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7708:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19293,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "7735:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19333,
                  "src": "7727:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19292,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7727:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19295,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "7830:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19333,
                  "src": "7816:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19294,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7816:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7679:160:65"
            },
            "returnParameters": {
              "id": 19297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7857:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19402,
            "nodeType": "FunctionDefinition",
            "src": "8178:802:65",
            "nodes": [],
            "body": {
              "id": 19401,
              "nodeType": "Block",
              "src": "8388:592:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19344,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19337,
                      "src": "8402:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8407:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8402:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19352,
                  "nodeType": "IfStatement",
                  "src": "8398:33:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19348,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19335,
                          "src": "8426:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19349,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19337,
                          "src": "8429:1:65",
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
                        "id": 19347,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16540,
                        "src": "8417:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 19350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8417:14:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19343,
                    "id": 19351,
                    "nodeType": "Return",
                    "src": "8410:21:65"
                  }
                },
                {
                  "assignments": [
                    19354
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19354,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "8490:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19401,
                      "src": "8482:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19353,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8482:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19360,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19357,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19335,
                        "src": "8526:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19358,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19337,
                        "src": "8529:1:65",
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
                        "id": 19355,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "8505:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8513:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24365,
                      "src": "8505:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8505:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8482:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19361,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19354,
                      "src": "8546:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19362,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19339,
                      "src": "8561:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8546:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19400,
                  "nodeType": "IfStatement",
                  "src": "8542:432:65",
                  "trueBody": {
                    "id": 19399,
                    "nodeType": "Block",
                    "src": "8578:396:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 19365,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8601:36:65",
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
                            "id": 19364,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "8597:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8597:41:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19367,
                        "nodeType": "EmitStatement",
                        "src": "8592:46:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 19369,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8680:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 19370,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19335,
                              "src": "8696:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19371,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19341,
                              "src": "8699:8:65",
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
                            "id": 19368,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "8657:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19372,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8657:51:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19373,
                        "nodeType": "EmitStatement",
                        "src": "8652:56:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 19375,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8750:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 19376,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19337,
                              "src": "8766:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19377,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19341,
                              "src": "8769:8:65",
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
                            "id": 19374,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "8727:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8727:51:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19379,
                        "nodeType": "EmitStatement",
                        "src": "8722:56:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 19381,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8820:14:65",
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
                              "id": 19384,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19382,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19339,
                                "src": "8836:15:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8854:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8836:21:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19385,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8859:2:65",
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
                            "id": 19380,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "8797:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8797:65:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19387,
                        "nodeType": "EmitStatement",
                        "src": "8792:70:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 19389,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8904:14:65",
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
                              "id": 19392,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19390,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19354,
                                "src": "8920:12:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19391,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8935:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8920:18:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19393,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8940:2:65",
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
                            "id": 19388,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "8881:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8881:62:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19395,
                        "nodeType": "EmitStatement",
                        "src": "8876:67:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19396,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "8957:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8957:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19398,
                        "nodeType": "ExpressionStatement",
                        "src": "8957:6:65"
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
            "nameLocation": "8187:24:65",
            "parameters": {
              "id": 19342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19335,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8229:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19402,
                  "src": "8221:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8221:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19337,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8248:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19402,
                  "src": "8240:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19336,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8240:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19339,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "8267:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19402,
                  "src": "8259:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8259:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19341,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "8356:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19402,
                  "src": "8348:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19340,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8348:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8211:159:65"
            },
            "returnParameters": {
              "id": 19343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8388:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19451,
            "nodeType": "FunctionDefinition",
            "src": "8986:569:65",
            "nodes": [],
            "body": {
              "id": 19450,
              "nodeType": "Block",
              "src": "9223:332:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19415,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19406,
                      "src": "9237:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9242:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9237:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19424,
                  "nodeType": "IfStatement",
                  "src": "9233:38:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19419,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19404,
                          "src": "9261:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19420,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19406,
                          "src": "9264:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19421,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19412,
                          "src": "9267:3:65",
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
                        "id": 19418,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16565,
                        "src": "9252:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 19422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9252:19:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19414,
                    "id": 19423,
                    "nodeType": "Return",
                    "src": "9245:26:65"
                  }
                },
                {
                  "assignments": [
                    19426
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19426,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9330:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19450,
                      "src": "9322:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19425,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9322:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19432,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19429,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19404,
                        "src": "9366:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19430,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19406,
                        "src": "9369:1:65",
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
                        "id": 19427,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "9345:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9353:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24365,
                      "src": "9345:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9345:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9322:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19433,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19426,
                      "src": "9386:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19434,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19408,
                      "src": "9401:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9386:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19449,
                  "nodeType": "IfStatement",
                  "src": "9382:167:65",
                  "trueBody": {
                    "id": 19448,
                    "nodeType": "Block",
                    "src": "9418:131:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19437,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9454:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19438,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19412,
                              "src": "9463:3:65",
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
                            "id": 19436,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "9437:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19439,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9437:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19440,
                        "nodeType": "EmitStatement",
                        "src": "9432:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19442,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19404,
                              "src": "9506:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19443,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19406,
                              "src": "9509:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19444,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19408,
                              "src": "9512:15:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19445,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19410,
                              "src": "9529:8:65",
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
                            "id": 19441,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19402,
                              19451,
                              19631,
                              19680
                            ],
                            "referencedDeclaration": 19402,
                            "src": "9481:24:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 19446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9481:57:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19447,
                        "nodeType": "ExpressionStatement",
                        "src": "9481:57:65"
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
            "nameLocation": "8995:24:65",
            "parameters": {
              "id": 19413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19404,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9037:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19451,
                  "src": "9029:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9029:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19406,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9056:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19451,
                  "src": "9048:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9048:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19408,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9075:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19451,
                  "src": "9067:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9067:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19410,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "9164:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19451,
                  "src": "9156:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9156:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19412,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "9196:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19451,
                  "src": "9182:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19411,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9182:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9019:186:65"
            },
            "returnParameters": {
              "id": 19414,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9223:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19516,
            "nodeType": "FunctionDefinition",
            "src": "9561:642:65",
            "nodes": [],
            "body": {
              "id": 19515,
              "nodeType": "Block",
              "src": "9650:553:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 19462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19460,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19455,
                      "src": "9664:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9669:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9664:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19468,
                  "nodeType": "IfStatement",
                  "src": "9660:33:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19464,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19453,
                          "src": "9688:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19465,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19455,
                          "src": "9691:1:65",
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
                        "id": 19463,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16485,
                        "src": "9679:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 19466,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9679:14:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19459,
                    "id": 19467,
                    "nodeType": "Return",
                    "src": "9672:21:65"
                  }
                },
                {
                  "assignments": [
                    19470
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19470,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9752:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19515,
                      "src": "9744:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19469,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9744:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19476,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19473,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19453,
                        "src": "9788:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19474,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19455,
                        "src": "9791:1:65",
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
                        "id": 19471,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "9767:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19472,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9775:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24394,
                      "src": "9767:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9767:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9744:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19477,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19470,
                      "src": "9808:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19478,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19457,
                      "src": "9823:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9808:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19514,
                  "nodeType": "IfStatement",
                  "src": "9804:393:65",
                  "trueBody": {
                    "id": 19513,
                    "nodeType": "Block",
                    "src": "9840:357:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 19481,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9863:35:65",
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
                            "id": 19480,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "9859:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9859:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19483,
                        "nodeType": "EmitStatement",
                        "src": "9854:45:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 19485,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 19486,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19453,
                              "src": "9948:1:65",
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
                            "id": 19484,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16093,
                            "src": "9918:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 19487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9918:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19488,
                        "nodeType": "EmitStatement",
                        "src": "9913:37:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 19490,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9983:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 19491,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19455,
                              "src": "9999:1:65",
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
                            "id": 19489,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16093,
                            "src": "9969:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 19492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9969:32:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19493,
                        "nodeType": "EmitStatement",
                        "src": "9964:37:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 19495,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10043:14:65",
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
                              "id": 19498,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19496,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19457,
                                "src": "10059:15:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19497,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10077:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10059:21:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19499,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10082:2:65",
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
                            "id": 19494,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "10020:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10020:65:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19501,
                        "nodeType": "EmitStatement",
                        "src": "10015:70:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 19503,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10127:14:65",
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
                              "id": 19506,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19504,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19470,
                                "src": "10143:12:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19505,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10158:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10143:18:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19507,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10163:2:65",
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
                            "id": 19502,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "10104:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19508,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10104:62:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19509,
                        "nodeType": "EmitStatement",
                        "src": "10099:67:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19510,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "10180:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19511,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10180:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19512,
                        "nodeType": "ExpressionStatement",
                        "src": "10180:6:65"
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
            "nameLocation": "9570:17:65",
            "parameters": {
              "id": 19458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19453,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9595:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19516,
                  "src": "9588:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19452,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19455,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9605:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19516,
                  "src": "9598:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19454,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9598:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19457,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9616:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19516,
                  "src": "9608:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19456,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9608:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:45:65"
            },
            "returnParameters": {
              "id": 19459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9650:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19562,
            "nodeType": "FunctionDefinition",
            "src": "10209:423:65",
            "nodes": [],
            "body": {
              "id": 19561,
              "nodeType": "Block",
              "src": "10317:315:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 19529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19527,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19520,
                      "src": "10331:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10336:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10331:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19536,
                  "nodeType": "IfStatement",
                  "src": "10327:38:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19531,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19518,
                          "src": "10355:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19532,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19520,
                          "src": "10358:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19533,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19524,
                          "src": "10361:3:65",
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
                        "id": 19530,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16510,
                        "src": "10346:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 19534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10346:19:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19526,
                    "id": 19535,
                    "nodeType": "Return",
                    "src": "10339:26:65"
                  }
                },
                {
                  "assignments": [
                    19538
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19538,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10424:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19561,
                      "src": "10416:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19537,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10416:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19544,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19541,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19518,
                        "src": "10460:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19542,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19520,
                        "src": "10463:1:65",
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
                        "id": 19539,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "10439:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10447:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24394,
                      "src": "10439:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10439:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10416:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19545,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19538,
                      "src": "10480:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19546,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19522,
                      "src": "10495:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10480:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19560,
                  "nodeType": "IfStatement",
                  "src": "10476:150:65",
                  "trueBody": {
                    "id": 19559,
                    "nodeType": "Block",
                    "src": "10512:114:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19549,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10548:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19550,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19524,
                              "src": "10557:3:65",
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
                            "id": 19548,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "10531:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19551,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10531:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19552,
                        "nodeType": "EmitStatement",
                        "src": "10526:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19554,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19518,
                              "src": "10593:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19555,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19520,
                              "src": "10596:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19556,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19522,
                              "src": "10599:15:65",
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
                            "id": 19553,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19287,
                              19333,
                              19516,
                              19562
                            ],
                            "referencedDeclaration": 19516,
                            "src": "10575:17:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 19557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10575:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19558,
                        "nodeType": "ExpressionStatement",
                        "src": "10575:40:65"
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
            "nameLocation": "10218:17:65",
            "parameters": {
              "id": 19525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19518,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10243:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19562,
                  "src": "10236:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19517,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10236:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19520,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10253:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19562,
                  "src": "10246:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19519,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10246:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19522,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10264:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19562,
                  "src": "10256:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19521,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10256:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19524,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "10295:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19562,
                  "src": "10281:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19523,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10281:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10235:64:65"
            },
            "returnParameters": {
              "id": 19526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10317:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19631,
            "nodeType": "FunctionDefinition",
            "src": "10638:703:65",
            "nodes": [],
            "body": {
              "id": 19630,
              "nodeType": "Block",
              "src": "10752:589:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 19575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19573,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19566,
                      "src": "10766:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19574,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10771:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10766:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19581,
                  "nodeType": "IfStatement",
                  "src": "10762:33:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19577,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19564,
                          "src": "10790:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19578,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19566,
                          "src": "10793:1:65",
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
                        "id": 19576,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16485,
                        "src": "10781:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 19579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10781:14:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19572,
                    "id": 19580,
                    "nodeType": "Return",
                    "src": "10774:21:65"
                  }
                },
                {
                  "assignments": [
                    19583
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19583,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10854:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19630,
                      "src": "10846:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19582,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10846:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19589,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19586,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19564,
                        "src": "10890:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19587,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19566,
                        "src": "10893:1:65",
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
                        "id": 19584,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "10869:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19585,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10877:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24394,
                      "src": "10869:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10869:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10846:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19590,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19583,
                      "src": "10910:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19591,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19568,
                      "src": "10925:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10910:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19629,
                  "nodeType": "IfStatement",
                  "src": "10906:429:65",
                  "trueBody": {
                    "id": 19628,
                    "nodeType": "Block",
                    "src": "10942:393:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 19594,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10965:35:65",
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
                            "id": 19593,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "10961:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10961:40:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19596,
                        "nodeType": "EmitStatement",
                        "src": "10956:45:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 19598,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11042:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 19599,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19564,
                              "src": "11058:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19600,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19570,
                              "src": "11061:8:65",
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
                            "id": 19597,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16079,
                            "src": "11020:21:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11020:50:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19602,
                        "nodeType": "EmitStatement",
                        "src": "11015:55:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 19604,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11111:14:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 19605,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19566,
                              "src": "11127:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19606,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19570,
                              "src": "11130:8:65",
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
                            "id": 19603,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16079,
                            "src": "11089:21:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 19607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11089:50:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19608,
                        "nodeType": "EmitStatement",
                        "src": "11084:55:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 19610,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11181:14:65",
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
                              "id": 19613,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19611,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19568,
                                "src": "11197:15:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19612,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11215:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11197:21:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19614,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11220:2:65",
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
                            "id": 19609,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "11158:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11158:65:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19616,
                        "nodeType": "EmitStatement",
                        "src": "11153:70:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 19618,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11265:14:65",
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
                              "id": 19621,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 19619,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19583,
                                "src": "11281:12:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 19620,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11296:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11281:18:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 19622,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11301:2:65",
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
                            "id": 19617,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16087,
                            "src": "11242:22:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 19623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11242:62:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19624,
                        "nodeType": "EmitStatement",
                        "src": "11237:67:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19625,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "11318:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11318:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19627,
                        "nodeType": "ExpressionStatement",
                        "src": "11318:6:65"
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
            "nameLocation": "10647:24:65",
            "parameters": {
              "id": 19571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19564,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10679:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19631,
                  "src": "10672:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19563,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10672:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19566,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10689:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19631,
                  "src": "10682:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19565,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10682:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19568,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10700:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19631,
                  "src": "10692:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10692:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19570,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "10725:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19631,
                  "src": "10717:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10717:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10671:63:65"
            },
            "returnParameters": {
              "id": 19572,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10752:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19680,
            "nodeType": "FunctionDefinition",
            "src": "11347:485:65",
            "nodes": [],
            "body": {
              "id": 19679,
              "nodeType": "Block",
              "src": "11500:332:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 19646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19644,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19635,
                      "src": "11514:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11519:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11514:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19653,
                  "nodeType": "IfStatement",
                  "src": "11510:38:65",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 19648,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19633,
                          "src": "11538:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19649,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19635,
                          "src": "11541:1:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 19650,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19641,
                          "src": "11544:3:65",
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
                        "id": 19647,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          18550,
                          18575,
                          18588,
                          18604,
                          18646,
                          18688,
                          18730,
                          18767,
                          18804,
                          18841,
                          16346,
                          16371,
                          16401,
                          16426,
                          16485,
                          16510,
                          16540,
                          16565,
                          18038,
                          18073
                        ],
                        "referencedDeclaration": 16510,
                        "src": "11529:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 19651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11529:19:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 19643,
                    "id": 19652,
                    "nodeType": "Return",
                    "src": "11522:26:65"
                  }
                },
                {
                  "assignments": [
                    19655
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19655,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "11607:12:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19679,
                      "src": "11599:20:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19654,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11599:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19661,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19658,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19633,
                        "src": "11643:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 19659,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19635,
                        "src": "11646:1:65",
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
                        "id": 19656,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "11622:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 19657,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11630:12:65",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24394,
                      "src": "11622:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 19660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11622:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11599:49:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19662,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19655,
                      "src": "11663:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 19663,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19637,
                      "src": "11678:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11663:30:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19678,
                  "nodeType": "IfStatement",
                  "src": "11659:167:65",
                  "trueBody": {
                    "id": 19677,
                    "nodeType": "Block",
                    "src": "11695:131:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 19666,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11731:7:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 19667,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19641,
                              "src": "11740:3:65",
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
                            "id": 19665,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16111,
                            "src": "11714:16:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 19668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11714:30:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19669,
                        "nodeType": "EmitStatement",
                        "src": "11709:35:65"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19671,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19633,
                              "src": "11783:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19672,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19635,
                              "src": "11786:1:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 19673,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19637,
                              "src": "11789:15:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 19674,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19639,
                              "src": "11806:8:65",
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
                            "id": 19670,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              19402,
                              19451,
                              19631,
                              19680
                            ],
                            "referencedDeclaration": 19631,
                            "src": "11758:24:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 19675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11758:57:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19676,
                        "nodeType": "ExpressionStatement",
                        "src": "11758:57:65"
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
            "nameLocation": "11356:24:65",
            "parameters": {
              "id": 19642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19633,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "11388:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19680,
                  "src": "11381:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19632,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11381:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19635,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11398:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19680,
                  "src": "11391:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19634,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11391:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19637,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "11409:15:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19680,
                  "src": "11401:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19636,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11401:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19639,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "11434:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19680,
                  "src": "11426:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11426:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19641,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "11458:3:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19680,
                  "src": "11444:17:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19640,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11444:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11380:82:65"
            },
            "returnParameters": {
              "id": 19643,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11500:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19698,
            "nodeType": "FunctionDefinition",
            "src": "11838:176:65",
            "nodes": [],
            "body": {
              "id": 19697,
              "nodeType": "Block",
              "src": "11941:73:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19690,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19682,
                        "src": "11964:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19691,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19684,
                        "src": "11972:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19692,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19682,
                        "src": "11983:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19693,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19686,
                        "src": "11991:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 19694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12002:4:65",
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
                      "id": 19689,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19698,
                        19718,
                        19738,
                        19848
                      ],
                      "referencedDeclaration": 19848,
                      "src": "11951:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11951:56:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19696,
                  "nodeType": "ExpressionStatement",
                  "src": "11951:56:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "11847:12:65",
            "parameters": {
              "id": 19687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19682,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "11868:6:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19698,
                  "src": "11860:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19681,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11860:7:65",
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
                  "id": 19684,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "11889:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19698,
                  "src": "11876:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19683,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11876:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19686,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "11913:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19698,
                  "src": "11900:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19685,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11900:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11859:64:65"
            },
            "returnParameters": {
              "id": 19688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11941:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19718,
            "nodeType": "FunctionDefinition",
            "src": "12020:216:65",
            "nodes": [],
            "body": {
              "id": 19717,
              "nodeType": "Block",
              "src": "12161:75:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19710,
                        "name": "targetA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19700,
                        "src": "12184:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19711,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19702,
                        "src": "12193:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19712,
                        "name": "targetB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19704,
                        "src": "12204:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19713,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19706,
                        "src": "12213:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 19714,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12224:4:65",
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
                      "id": 19709,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19698,
                        19718,
                        19738,
                        19848
                      ],
                      "referencedDeclaration": 19848,
                      "src": "12171:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12171:58:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19716,
                  "nodeType": "ExpressionStatement",
                  "src": "12171:58:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12029:12:65",
            "parameters": {
              "id": 19707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19700,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12050:7:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19718,
                  "src": "12042:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12042:7:65",
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
                  "id": 19702,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12072:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19718,
                  "src": "12059:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19701,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12059:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19704,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12091:7:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19718,
                  "src": "12083:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19703,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12083:7:65",
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
                  "id": 19706,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12113:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19718,
                  "src": "12100:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19705,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12100:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12041:82:65"
            },
            "returnParameters": {
              "id": 19708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12161:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19738,
            "nodeType": "FunctionDefinition",
            "src": "12242:231:65",
            "nodes": [],
            "body": {
              "id": 19737,
              "nodeType": "Block",
              "src": "12388:85:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19730,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19720,
                        "src": "12411:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19731,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19722,
                        "src": "12419:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19732,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19720,
                        "src": "12430:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 19733,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19724,
                        "src": "12438:9:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 19734,
                        "name": "strictRevertData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19726,
                        "src": "12449:16:65",
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
                      "id": 19729,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19698,
                        19718,
                        19738,
                        19848
                      ],
                      "referencedDeclaration": 19848,
                      "src": "12398:12:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 19735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12398:68:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19736,
                  "nodeType": "ExpressionStatement",
                  "src": "12398:68:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12251:12:65",
            "parameters": {
              "id": 19727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19720,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "12272:6:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19738,
                  "src": "12264:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12264:7:65",
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
                  "id": 19722,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12293:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19738,
                  "src": "12280:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19721,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12280:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19724,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12317:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19738,
                  "src": "12304:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19723,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12304:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19726,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12333:16:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19738,
                  "src": "12328:21:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19725,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12328:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12263:87:65"
            },
            "returnParameters": {
              "id": 19728,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12388:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19848,
            "nodeType": "FunctionDefinition",
            "src": "12479:1189:65",
            "nodes": [],
            "body": {
              "id": 19847,
              "nodeType": "Block",
              "src": "12669:999:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19752,
                    19754
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19752,
                      "mutability": "mutable",
                      "name": "successA",
                      "nameLocation": "12685:8:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19847,
                      "src": "12680:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 19751,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12680:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 19754,
                      "mutability": "mutable",
                      "name": "returnDataA",
                      "nameLocation": "12708:11:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19847,
                      "src": "12695:24:65",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19753,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12695:5:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19762,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19760,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19742,
                        "src": "12745:9:65",
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
                            "id": 19757,
                            "name": "targetA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19740,
                            "src": "12731:7:65",
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
                          "id": 19756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12723:7:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 19755,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12723:7:65",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12723:16:65",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 19759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12740:4:65",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12723:21:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 19761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12723:32:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12679:76:65"
                },
                {
                  "assignments": [
                    19764,
                    19766
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19764,
                      "mutability": "mutable",
                      "name": "successB",
                      "nameLocation": "12771:8:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19847,
                      "src": "12766:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 19763,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12766:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 19766,
                      "mutability": "mutable",
                      "name": "returnDataB",
                      "nameLocation": "12794:11:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 19847,
                      "src": "12781:24:65",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19765,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12781:5:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19774,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19772,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19746,
                        "src": "12831:9:65",
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
                            "id": 19769,
                            "name": "targetB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19744,
                            "src": "12817:7:65",
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
                          "id": 19768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12809:7:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 19767,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12809:7:65",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19770,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12809:16:65",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 19771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12826:4:65",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12809:21:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 19773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12809:32:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12765:76:65"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 19777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19775,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19752,
                      "src": "12856:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19776,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19764,
                      "src": "12868:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12856:20:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19785,
                  "nodeType": "IfStatement",
                  "src": "12852:120:65",
                  "trueBody": {
                    "id": 19784,
                    "nodeType": "Block",
                    "src": "12878:94:65",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19779,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19754,
                              "src": "12901:11:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 19780,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19766,
                              "src": "12914:11:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c2072657475726e206461746120646f6573206e6f74206d61746368",
                              "id": 19781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12927:33:65",
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
                            "id": 19778,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18604,
                            "src": "12892:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 19782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12892:69:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19783,
                        "nodeType": "ExpressionStatement",
                        "src": "12892:69:65"
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
                    "id": 19792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 19790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 19787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12986:9:65",
                        "subExpression": {
                          "id": 19786,
                          "name": "successA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19752,
                          "src": "12987:8:65",
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
                        "id": 19789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12999:9:65",
                        "subExpression": {
                          "id": 19788,
                          "name": "successB",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19764,
                          "src": "13000:8:65",
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
                      "src": "12986:22:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19791,
                      "name": "strictRevertData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19748,
                      "src": "13012:16:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12986:42:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19800,
                  "nodeType": "IfStatement",
                  "src": "12982:142:65",
                  "trueBody": {
                    "id": 19799,
                    "nodeType": "Block",
                    "src": "13030:94:65",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 19794,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19754,
                              "src": "13053:11:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 19795,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19766,
                              "src": "13066:11:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c20726576657274206461746120646f6573206e6f74206d61746368",
                              "id": 19796,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13079:33:65",
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
                            "id": 19793,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18550,
                              18575,
                              18588,
                              18604,
                              18646,
                              18688,
                              18730,
                              18767,
                              18804,
                              18841,
                              16346,
                              16371,
                              16401,
                              16426,
                              16485,
                              16510,
                              16540,
                              16565,
                              18038,
                              18073
                            ],
                            "referencedDeclaration": 18604,
                            "src": "13044:8:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 19797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13044:69:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19798,
                        "nodeType": "ExpressionStatement",
                        "src": "13044:69:65"
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
                    "id": 19804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13138:9:65",
                      "subExpression": {
                        "id": 19801,
                        "name": "successA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19752,
                        "src": "13139:8:65",
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
                      "id": 19803,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19764,
                      "src": "13151:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13138:21:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19823,
                  "nodeType": "IfStatement",
                  "src": "13134:259:65",
                  "trueBody": {
                    "id": 19822,
                    "nodeType": "Block",
                    "src": "13161:232:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 19806,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13184:29:65",
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
                            "id": 19805,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "13180:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19807,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13180:34:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19808,
                        "nodeType": "EmitStatement",
                        "src": "13175:39:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c207265766572742064617461",
                              "id": 19810,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13249:25:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              "value": "  Left call revert data"
                            },
                            {
                              "id": 19811,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19754,
                              "src": "13276:11:65",
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
                            "id": 19809,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16105,
                            "src": "13233:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13233:55:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19813,
                        "nodeType": "EmitStatement",
                        "src": "13228:60:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c2072657475726e2064617461",
                              "id": 19815,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13323:25:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              "value": " Right call return data"
                            },
                            {
                              "id": 19816,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19766,
                              "src": "13350:11:65",
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
                            "id": 19814,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16105,
                            "src": "13307:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19817,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13307:55:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19818,
                        "nodeType": "EmitStatement",
                        "src": "13302:60:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19819,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "13376:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19820,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13376:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19821,
                        "nodeType": "ExpressionStatement",
                        "src": "13376:6:65"
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
                    "id": 19827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19824,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19752,
                      "src": "13407:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 19826,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13419:9:65",
                      "subExpression": {
                        "id": 19825,
                        "name": "successB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19764,
                        "src": "13420:8:65",
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
                    "src": "13407:21:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19846,
                  "nodeType": "IfStatement",
                  "src": "13403:259:65",
                  "trueBody": {
                    "id": 19845,
                    "nodeType": "Block",
                    "src": "13430:232:65",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 19829,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13453:29:65",
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
                            "id": 19828,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16031,
                            "src": "13449:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 19830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13449:34:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19831,
                        "nodeType": "EmitStatement",
                        "src": "13444:39:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c2072657475726e2064617461",
                              "id": 19833,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13518:25:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              "value": "  Left call return data"
                            },
                            {
                              "id": 19834,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19754,
                              "src": "13545:11:65",
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
                            "id": 19832,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16105,
                            "src": "13502:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13502:55:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19836,
                        "nodeType": "EmitStatement",
                        "src": "13497:60:65"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c207265766572742064617461",
                              "id": 19838,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13592:25:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              "value": " Right call revert data"
                            },
                            {
                              "id": 19839,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19766,
                              "src": "13619:11:65",
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
                            "id": 19837,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16105,
                            "src": "13576:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 19840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13576:55:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19841,
                        "nodeType": "EmitStatement",
                        "src": "13571:60:65"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 19842,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              18489,
                              16242
                            ],
                            "referencedDeclaration": 16242,
                            "src": "13645:4:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 19843,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13645:6:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 19844,
                        "nodeType": "ExpressionStatement",
                        "src": "13645:6:65"
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
            "nameLocation": "12488:12:65",
            "parameters": {
              "id": 19749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19740,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12518:7:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19848,
                  "src": "12510:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12510:7:65",
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
                  "id": 19742,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12548:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19848,
                  "src": "12535:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19741,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12535:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19744,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12575:7:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19848,
                  "src": "12567:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12567:7:65",
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
                  "id": 19746,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12605:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19848,
                  "src": "12592:22:65",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 19745,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:5:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19748,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12629:16:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 19848,
                  "src": "12624:21:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19747,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12624:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12500:151:65"
            },
            "returnParameters": {
              "id": 19750,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12669:0:65"
            },
            "scope": 19849,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 18438,
              "name": "DSTest",
              "nameLocations": [
                "181:6:65"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 18317,
              "src": "181:6:65"
            },
            "id": 18439,
            "nodeType": "InheritanceSpecifier",
            "src": "181:6:65"
          }
        ],
        "canonicalName": "StdAssertions",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          19849,
          18317
        ],
        "name": "StdAssertions",
        "nameLocation": "164:13:65",
        "scope": 19850,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 65
} as const;
