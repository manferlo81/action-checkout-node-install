# action-checkout-node-install

A composite action to checkout, setup NodeJS and install dependencies

## Guide

* [Usage](#usage)
* [Inputs](#inputs)
* [Source](#source)

## Usage

```yaml
steps:
  - name: Checkout, Setup NodeJS v16.x and Install dependencies
    uses: manferlo81/action-checkout-node-install@v1
    with:
      node-version: 16.x
      registry-url: https://npm.pkg.github.com/
```

## Inputs

| Input | Description | Required | Default |
| ----- | ----------- | -------- | ------- |
| `node-version` | NodeJS version to setup | No | 20.x |
| `registry-url` | Registry URL | No | <https://registry.npmjs.org/> |

## Source

```yaml
name: Checkout, Setup NodeJS and Install dependencies
description: A composite action to checkout, setup NodeJS and install dependencies

inputs:
  node-version:
    description: NodeJS version to setup
    required: false
    default: 20.x

  registry-url:
    description: Registry URL
    required: false
    default: https://registry.npmjs.org/

runs:
  using: composite
  steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup NodeJS ${{ inputs.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
        registry-url: ${{ inputs.registry-url }}
        cache: npm
        cache-dependency-path: "package-lock.json"

    - name: Install dependencies
      shell: bash
      run: npm ci
```

## License

[MIT](./LICENSE) &copy; 2024 [Manuel Fernández](https://github.com/manferlo81)
