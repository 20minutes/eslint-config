# @20minutes/eslint-config
:nail_care: 20 Minutes JavaScript Style Guide

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

Then you can define/update scripts:

```json
{
  "scripts": {
    "lint": "biome check --max-diagnostics=none",
    "lint:fix": "biome check --write --unsafe --max-diagnostics=none",
  }
}
```
