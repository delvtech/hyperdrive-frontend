echo "Downloading contracts..."

if [[ -z "${GITHUB_TOKEN}" ]]; then
  git clone git@github.com:delv-tech/hyperdrive.git hyperdrive-src
else
 git clone https://$GITHUB_TOKEN@github.com/delv-tech/hyperdrive.git hyperdrive-src
fi

# blow away old-contracts
rm -rf contracts
mkdir contracts

echo "Copying latest contracts..."
cp -R hyperdrive-src/contracts/ contracts
rm -rf hyperdrive-src

echo "Done!"