#!/bin/zsh
cd -- "${0:A:h}"
export PATH="$PWD/../.tools/node-v22.16.0-darwin-arm64/bin:$PATH"
npm run dev
