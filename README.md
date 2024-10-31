# action-checkout-node-install

A composite action to checkout, setup Node.js and install dependencies

We will run `npm ci` (see [Source section](#source)) which requires a `package-lock.json` or `npm-shrinkwrap.json`, make sure it exists otherwise the action will fail.

## Guide

* [Usage](#usage)
* [Inputs](#inputs)
* [Used Actions](#used-actions)
* [Source](#source)

## Usage

```yaml
steps:
  - name: Checkout, Setup Node.js v16.x and Install dependencies
    uses: manferlo81/action-checkout-node-install@v1
    with:
      node-version: 16.x
      registry-url: https://npm.pkg.github.com/
```

## Inputs

| Input | Description | Required | Default |
| ----- | ----------- | -------- | ------- |
| [`node-version`](#node-version) | Node.js version to setup | No | 20.x |
| [`registry-url`](#registry-url) | Registry URL | No | "" |

### `node-version`

Sets what version of Node.js will be installed. This values will be passed to [`actions/setup-node`](https://github.com/actions/setup-node).  See their documentation [here](https://github.com/actions/setup-node#usage).

### `registry-url`

Sets the package registry URL. This values will be passed to [`actions/setup-node`](https://github.com/actions/setup-node). See their documentation [here](https://github.com/actions/setup-node#usage).

## Used Actions

The following actions are being used...

* [`actions/checkout`](https://github.com/actions/checkout)
* [`actions/setup-node`](https://github.com/actions/setup-node)

## Source

```yaml
name: Checkout, Setup Node.js and Install dependencies
description: A composite action to checkout, setup Node.js and install dependencies

inputs:
  node-version:
    description: Node.js version to setup
    required: false
    default: 20.x

  registry-url:
    description: Registry URL
    required: false
    default: ""

runs:
  using: composite
  steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js ${{ inputs.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
        registry-url: ${{ inputs.registry-url }}
        cache: npm

    - name: Install dependencies
      shell: bash
      run: npm ci
```

## License

[MIT](./LICENSE) &copy; 2024 [Manuel Fernández](https://github.com/manferlo81)
