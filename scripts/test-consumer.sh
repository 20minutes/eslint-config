#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d -t eslint-config-consumer.XXXXXX)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

PACK_OUTPUT="$(cd "$ROOT_DIR" && npm pack --pack-destination "$TMP_DIR" --silent)"
TARBALL="$TMP_DIR/$PACK_OUTPUT"

if tar -tzf "$TARBALL" | grep -vE '^package/(package\.json|README\.md|biome\.jsonc)$'; then
  echo 'Unexpected files in the published package' >&2
  exit 1
fi

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

./node_modules/@biomejs/biome/bin/biome ci --error-on-warnings --max-diagnostics=none .
