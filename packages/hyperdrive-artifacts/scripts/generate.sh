#!/bin/bash
set -e

# Check if forge is installed
if ! command -v forge >/dev/null 2>&1; then
  echo "forge not found. Install forge to compile the contracts."
  exit 1
fi

# SETTINGS
default_branch="main"
default_repo_url="git@github.com:delvtech/hyperdrive.git"
max_file_size=1000000 # 1MB
out_dir="src"

branch=${1:-$default_branch}
repo_url=${2:-$default_repo_url}

repo_name=$(basename "$repo_url" .git)
default_repo_name=$(basename "$default_repo_url" .git)
package_name=$(jq -r .name <package.json)
script_name=$(basename "$0")
cat <<EOF
+
|  $package_name $script_name
|
|  Clones the $default_repo_name repo, compiles the contracts with forge,
|  then generates and compiles TypeScript files from the contract artifacts.
|
|  Usage: $script_name [branch] [repo_url]
|
|    branch:    The branch to clone. (default: $default_branch)
|    repo_url:  The url of the git repository to clone. (default: $default_repo_url)
|_______________________________________________________________________________
|
|  Current run:
|
|    Branch:        $branch
|    Repository:    $repo_url
|    Max file size: $max_file_size bytes
|    Out directory: $out_dir
+
EOF

temp_clone_dir="$repo_name.temp"
temp_out_dir=$(mktemp -d)
trap 'rm -rf "$temp_out_dir"' EXIT

# Clone the repo if it doesn't exist
if [ ! -d "$temp_clone_dir" ]; then
  git clone --depth 1 "$repo_url" --branch "$branch" "$temp_clone_dir"
fi

echo "Compiling contracts..."
(
  cd "$temp_clone_dir"
  forge install
  forge build --skip test --skip script
)

echo "Generating typescript files..."

# Find all JSON files in the 'out' directory, excluding 'build-info'
# directories, debug files, and test files
find "$temp_clone_dir/out" \
  -type d -name "build-info" \
  -prune \
  -o -type f -name "*.json" \
  ! -name "*.dbg.json" \
  ! -iname "*test*" \
  -print |
  while IFS= read -r file; do

    # Ignore files that are too large
    file_size=$(wc -c <"$file" | tr -d ' ')
    if [ "$file_size" -gt "$max_file_size" ]; then
      echo "WARNING: File $file is too large ($file_size bytes) and will be omitted."
      continue
    fi

    # Get the values we care about
    contract_name=$(basename "$file" .json)
    abi=$(jq -c .abi <"$file")
    bytecode=$(jq -r .bytecode.object <"$file")
    methodIdentifiers=$(jq -c .methodIdentifiers <"$file")

    # Write the contract to a typescript file as a named export.
    cat >"$temp_out_dir/$contract_name.ts" <<-EOF
			export const $contract_name = {
			  name: '$contract_name' as const,
			  abi: $abi as const,
			  bytecode: '$bytecode' as \`0x\${string}\`,
			  methodIdentifiers: $methodIdentifiers as const
			};
		EOF

  done

echo "Cleaning up..."
rm -rf "$temp_clone_dir"
rm -rf "$out_dir"
mv "$temp_out_dir" "$out_dir"

cat <<EOF
+
|  ✅ TypeScript files generated in $(realpath "$out_dir")
+
EOF
