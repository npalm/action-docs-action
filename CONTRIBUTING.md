# Contributing to this repository <!-- omit in toc -->

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved. We appreciate your thought to contribute to open source. :heart: We want to make contributing as easy as possible. You are welcome to:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## Getting started <!-- omit in toc -->

Before you begin:

- Have you read the [code of conduct](CODE_OF_CONDUCT.md)?
- Check out the [existing issues](https://github.com/npalm/action-docs-action/issues).


## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:


1. [Fork](http://help.github.com/fork-a-repo/) the repo and create your branch from the default branch.
   
   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/<repo-name>
   # Navigate to the newly cloned directory
   cd <repo-name>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/<upsteam-owner>/<repo-name>

   # Update the upstream
   git checkout <default-branch>
   git pull upstream <default-branch>

   # Create your feature / fix branch
   git checkout -b <topic-branch-name>
   ```

2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Commit your changes, see [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
7. Locally merge (or rebase) the upstream development branch into your topic branch.
   
    ```bash
   git pull [--rebase] upstream <dev-branch>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.


## Development

### Setup you local environment.

1. Ensure you have the Node.js version we use, check [.npmrc](.npmrc). You can easily run multiple NOde version with [nvm](https://github.com/nvm-sh/nvm).

2. Install dependencies `yarn install`

3. See the `package.json` how to run the test.

4. Run locally, no tests yet available.

   ```bash
   # Overwrite defaults if needed
   export INPUT_README=<README>
   export INPUT_ACTIONFILE=<action.yml>
   export INPUT_TOCLEVEL=2
   yarn run watch
   ```

### Use a Consistent Coding Style

- we use spaces.
- You can try running `yarn run lint && yarn run format` for style unification


## License

By contributing, you agree that your contributions will be licensed under its MIT License.

