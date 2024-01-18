#!/bin/bash

script_dir="$(dirname "$0")"

cd $script_dir

# Ignore the build script if the dist folder already exists
if [ -d "dist" ]; then
  exit 0
fi

# Clone the hyperdrive repo if the hyperdrive folder doesn't exist
if [ ! -d "hyperdrive" ]; then
  git clone --depth 1 --branch v0.5.1 git@github.com:delvtech/hyperdrive.git hyperdrive
fi

cd hyperdrive

# Build the contracts if the out folder doesn't already exist
if [ ! -d "out" ]; then
  forge install
  forge build
fi

out_path=../dist

# # Reset the dist folder
rm -rf $out_path
mkdir -p $out_path

# Loop through each subfolder in the out folder
for dir in out/*; do

  # Get the name of the contract
  dir_name=$(basename $dir)

  # Ignore test contract directories which end with ".t.sol"
  if [[ $dir_name == *".t.sol" ]]; then
    continue
  fi

  # Get the name of the contract by removing ".sol" from the end of the
  # directory name
  contract_name=${dir_name%.sol}

  in_file=$dir/$contract_name.json

  # Ignore the contract if the json file doesn't exist
  if [ ! -f $in_file ]; then
    continue
  fi

  out_file=$out_path/$contract_name.ts
  {
    echo "export const $contract_name = "
    cat $in_file
    echo " as const;"
  } >$out_file
done
