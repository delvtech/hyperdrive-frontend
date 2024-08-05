#!/bin/bash
set -e

# SETTINGS
default_branch="main"
default_repo_url="git@github.com:delvtech/hyperdrive.git"
max_file_size=1000000 # 1MB

# Check if forge is installed
if ! command -v forge &>/dev/null; then
  echo "forge could not be found. Install forge to compile the contracts."
  exit 1
fi

# Echo usage
echo ""
echo "+"
echo "|  $0"
echo "|  Clones the hyperdrive repo, compiles the contracts with forge, then creates and compiles"
echo "|  typescript files from the contract artifacts."
echo "|"
echo "|  Usage: $0 [branch] [repo_url]"
echo "|"
echo "|    branch:    The branch to clone. (default: $default_branch)"
echo "|    repo_url:  The url of the git repository to clone. (default: $default_repo_url)"
echo "+"
echo ""

branch=${1:-$default_branch}
repo_url=${2:-$default_repo_url}
temp_dir=$(mktemp -d "hyperdrive-temp.XXXXXX")
src_dir="src"
dist_dir="dist"

# Echo settings
echo "Branch: $branch"
echo "Repo URL: $repo_url"
echo "Max file size: $max_file_size bytes"
echo ""

git clone --depth 1 "$repo_url" --branch "$branch" "$temp_dir"

echo "Compiling contracts..."
(
  cd "$temp_dir"
  forge install
  forge build --skip test --skip script
)

echo "Creating typescript files..."

# Reset the directories
rm -rf "$src_dir"
rm -rf "$dist_dir"
mkdir "$src_dir"
mkdir "$dist_dir"

function processOutDir() {
  local dir=$1
  for entry in "$dir"/*; do

    # Ignore test contract directories which end with ".t.sol"
    if [[ "$entry" == *".t.sol" ]]; then
      continue
    fi

    # Recursively process directories
    if [[ -d "$entry" ]]; then
      processOutDir "$entry"

    # Process files
    elif [[ -f "$entry" ]]; then

      # Get the name of the contract
      local contract_name=$(basename "$entry" .json)

      # Omit contracts with "test"/"Test" in the name
      if [[ "$contract_name" == *"test"* ]] || [[ "$contract_name" == *"Test"* ]]; then
        continue
      fi

      # Ignore the contract if the file is too large. This prevents TSC from
      # throwing errors while trying to parse large files and prevents the
      # script from processing files we probably don't want to be importing into
      # our codebase.
      local file_size=$(wc -c <"$entry")
      if [ "$file_size" -gt "$max_file_size" ]; then
        echo "WARNING: File $entry is too large ($(echo $file_size | tr -d ' ') bytes) and will be omitted."
        continue
      fi

      # Get the fields we care about
      local abi=$(jq -r .abi <"$entry")
      local bytecode=$(jq -r .bytecode.object <"$entry")
      local methodIdentifiers=$(jq -r '.methodIdentifiers // "{}"' <"$entry")

      # Write the contract to a typescript file as a named export.
      local out_file="$src_dir/$contract_name.ts"
      {
        echo "export const $contract_name = {"
        echo "  abi: $abi as const,"
        echo "  bytecode: '$bytecode' as \`0x\${string}\`,"
        echo "  methodIdentifiers: $methodIdentifiers as const"
        echo "};"
      } >"$out_file"
    fi
  done
}

processOutDir "$temp_dir/out"

echo "Compiling typescript files..."
tsc --outDir "$dist_dir"

echo "Cleaning up..."
rm -rf "$temp_dir"
rm -rf "$src_dir"
