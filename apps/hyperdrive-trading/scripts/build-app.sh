#!/bin/bash

yarn run gen:version
yarn run gen:walletconnect

tsc 

if [ "$1" == "development" ]; then
  echo "Building development version..."
  vite build --config vite.config.build.ts --mode development
else
  vite build --config vite.config.build.ts
fi