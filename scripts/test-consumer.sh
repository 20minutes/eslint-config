#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

PACK_OUTPUT="$(cd "$ROOT_DIR" && npm pack --pack-destination "$TMP_DIR" --silent)"
TARBALL="$TMP_DIR/$PACK_OUTPUT"
CONSUMER_DIR="$TMP_DIR/consumer"

mkdir "$CONSUMER_DIR"
cd "$CONSUMER_DIR"

cat > package.json <<'JSON'
{
  "private": true,
  "type": "module"
}
JSON

yarn add --silent --dev "$TARBALL"

cat > biome.jsonc <<'JSONC'
{
  "extends": [
    "@20minutes/eslint-config/biome"
  ]
}
JSONC

cat > index.js <<'JS'
const message = 'Biome config is consumable'

console.info(message)
JS

git init --quiet

./node_modules/@biomejs/biome/bin/biome check --max-diagnostics=none .
