#!/bin/bash

# Wrapping in a subshell to avoid changing the current directory
(
  cd $(dirname $0)/..

  rm example/*.tgz
  cp pkg/*.tgz example/
  cd example
  npm uninstall @delvtech/hyperdrive-wasm
  npm install *.tgz
)
