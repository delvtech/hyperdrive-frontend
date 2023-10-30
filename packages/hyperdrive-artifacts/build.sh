#!/bin/bash

# Clone the hyperdrive repo if the hyperdrive folder doesn't exist
if [ ! -d "hyperdrive" ]; then
  git clone --depth 1 --branch v0.0.16 git@github.com:delvtech/hyperdrive.git hyperdrive
fi

cd hyperdrive

# Build the contracts if the out folder doesn't already exist
if [ ! -d "out" ]; then
  forge install
  forge build
fi

out_path=../dist

# Reset the dist folder
rm -rf $out_path
mkdir -p $out_path

# Loop through all json files in compiled contracts
for file in $(find out -name '*.json'); do
  # Get the name of the file
  contract_name=$(basename $file | sed 's/.json//g')

  # Create a new file in the dist folder with the artifact exported as a const
  {
    echo "export const $contract_name = "
    cat $file
    echo " as const;"
  } >$out_path/$contract_name.ts
done
