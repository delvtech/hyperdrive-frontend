#!/bin/bash
set -e

# SETTINGS
default_branch="main"
default_repo_url="git@github.com:delvtech/hyperdrive.git"
src_dir_name="src"
max_file_size=1000000 # 1MB

# Skip the build if the src directory already exists
if [ -d "$src_dir_name" ]; then
  echo "Src path ($src_dir_name) already exists. Skipping src build."
  exit 0
fi

# Check if forge is installed
if ! command -v forge &>/dev/null; then
  echo "forge could not be found. Install forge to compile the contracts."
  exit 1
fi

# Echo usage
echo ""
echo "+"
echo "|  $0"
echo "|  Builds typescript src files from the hyperdrive repo."
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

# Echo settings
echo "Branch: $branch"
echo "Repo URL: $repo_url"
echo "Source directory: $src_dir_name"
echo "Max file size: $max_file_size bytes"
echo ""

git clone --depth 1 "$repo_url" --branch "$branch" "$temp_dir"

echo "Compiling contracts..."
(
  cd "$temp_dir"
  forge install
  forge build
)

echo "Creating typescript files..."

# Reset the src directory
rm -rf "$src_dir_name"
mkdir "$src_dir_name"

processOutDir() {
  local dir=$1
  for entry in "$dir"/*; do

    # Ignore test contract directories which end with ".t.sol"
    if [[ "$entry" == *".t.sol" ]]; then
      continue
    fi

    if [[ -d "$entry" ]]; then
      processOutDir "$entry"
    elif [[ -f "$entry" ]]; then

      # Get the name of the contract
      local contract_name=$(basename "$entry" .json)

      # Ignore the contract if the file is too large. This prevents TSC from
      # throwing errors while trying to parse large files and prevents the
      # script from processing files we probably don't want to be importing into
      # our codebase.
      local file_size=$(wc -c <"$entry")
      if [ "$file_size" -gt "$max_file_size" ]; then
        echo "WARNING: File $entry is too large ($(echo $file_size | tr -d ' ') bytes) and will be omitted."
        continue
      fi

      # Write the contract to a typescript file as a named export with `as
      # const` to prevent typescript from widening the type of the contract.
      local out_file="$src_dir_name/$contract_name.ts"
      {
        echo "export const $contract_name = "
        cat "$entry"
        echo " as const;"
      } >"$out_file"
    fi
  done
}

processOutDir "$temp_dir/out"

echo "Cleaning up..."
rm -rf "$temp_dir"
