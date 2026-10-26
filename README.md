# @20minutes/eslint-config
:nail_care: Shared Biome linting and formatting configuration for 20 Minutes.

## 📦 Installation

Install the package:

```
yarn add --dev @20minutes/eslint-config
```

## 🚀 Usage

Create a `biome.json` or `biome.jsonc` file in your project root and extend the configuration:

```json
{
  "extends": ["@20minutes/eslint-config/biome"]
}
```

The configuration checks JavaScript, TypeScript, JSON/JSONC/JSON5 and GraphQL.
CSS, SCSS, Markdown and YAML are not included by default.

Then you can define/update scripts:

```json
{
  "scripts": {
    "lint": "biome check --max-diagnostics=none",
    "lint:fix": "biome check --write --max-diagnostics=none",
    "lint:fix:unsafe": "biome check --write --unsafe --max-diagnostics=none"
  }
}
```

`lint:fix` applies safe fixes only. Use `lint:fix:unsafe` explicitly when you want fixes that may
change behavior, and review the diff.

## Validation

```sh
yarn lint
yarn test:consumer
```

The consumer test validates the package contents and checks JavaScript in a temporary project
with the packed package installed.
