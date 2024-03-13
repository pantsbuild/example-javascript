# example-javascript

An example repository to demonstrate Pants's experimental JavaScript support.

# Running Pants

You run Pants goals using the `pants` launcher binary, which will bootstrap the
version of Pants configured for this repo if necessary.

See [here](https://www.pantsbuild.org/docs/installation) for how to install the `pants` binary.

# Examples

Try these out in this repo.

## Determine dependencies

```
pants dependencies src/index.js
pants dependencies --transitive src/index.js
```

## Lint and format

```
pants lint ::
pants fmt ::
```

## Test

```
pants test ::
pants test --use-coverage ::
```

The example is configured to use Jest as the test runner via `package.json` "scripts.test" key.
Mocha is also supported by the Javascript backend.

## Package

The example uses esbuild to package the source into a single file in the `dist` directory.

```
pants package ::
```

## Generate lockfiles

```
pants generate-lockfiles ::
```
