#!/bin/bash

yarn run gen:version

tsc && vite build --config vite.config.build.ts