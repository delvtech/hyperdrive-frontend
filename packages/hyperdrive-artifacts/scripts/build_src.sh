#!/bin/bash
set -e

# SETTINGS
max_file_size=1000000 # 1MB
default_src_dir_name="src"
default_branch="v0.7.0"
default_repo_url="git@github.com:delvtech/hyperdrive.git"

# Check if forge is installed
if ! command -v forge &>/dev/null; then
  echo "forge could not be found. Please install forge."
  exit 1
fi

# Echo usage
echo "Usage: $0 [src_dir_name] [repo_url] [branch]"

src_dir=${1:-"$default_src_dir_name"}
repo_url=${2:-"$default_repo_url"}
branch=${3:-"$default_branch"}
out_path="$(pwd)/$1"
temp_dir="$(pwd)/temp"

echo "Building src path: $out_path"

# Skip the build if the src directory already exists
if [[ ! -d "$out_path" ]]; then

  echo "Cloning delvtech/council repo..."
  git clone --depth 1 --branch "$branch" "$repo_url" "$temp_dir"

  echo "Compiling contracts..."
  cd "$temp_dir"
  forge install
  forge build

  echo "Creating typescript files..."

  # Reset the src folder
  rm -rf "$out_path"
  mkdir -p "$out_path"

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

    in_file="$dir/$contract_name.json"

    # Ignore the contract if the file is too large
    # This prevents TSC from throwing errors trying to parse large files
    file_size=$(wc -c <"$in_file" | tr -d ' ')
    if [ "$file_size" -gt "$max_file_size" ]; then
      echo "File $in_file is too large ($file_size bytes) and will be omitted."
      continue
    fi

    # Ignore the contract if the json file doesn't exist
    if [ ! -f "$in_file" ]; then
      continue
    fi

    out_file="$out_path/$contract_name.ts"
    {
      echo "export const $contract_name = "
      cat "$in_file"
      echo " as const;"
    } >"$out_file"
  done
fi

echo "Cleaning up..."
rm -rf "$temp_dir"

echo "Done building src!"
process_exit_code=$?
exit $process_exit_code
