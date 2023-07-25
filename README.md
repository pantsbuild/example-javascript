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
```

## Generate lockfiles

```
pants generate-lockfiles ::
```
