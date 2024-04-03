#!/bin/bash

yarn run gen:version
yarn run gen:walletconnect

tsc && vite build --config vite.config.build.ts