# action-checkout-node-install

A composite action to checkout, setup NodeJS and install dependencies

## Guide

* [Usage](#usage)
* [Inputs](#inputs)

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

## License

[MIT](./LICENSE) &copy; 2024 [Manuel Fernández](https://github.com/manferlo81)
