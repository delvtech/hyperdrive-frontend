#!/bin/bash
set -e
yarn build
yarn build:crates
yarn build:packages
yarn changeset publish
