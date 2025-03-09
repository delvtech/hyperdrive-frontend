#!/bin/bash
set -e
yarn build:packages
yarn changeset publish
