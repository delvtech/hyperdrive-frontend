#!/bin/bash

curl -X GET "https://api.coingecko.com/api/v3/coins/list" -H "accept: application/json" > src/token/coin-gecko.json