#!/bin/bash

yarn run gen:version
yarn run gen:walletconnect

if [ "$1" == "development" ]; then
  echo "Building development version..."
  tsc && vite build --config vite.config.build.ts --mode development
else
  tsc && vite build --config vite.config.build.ts
fi