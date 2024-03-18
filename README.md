<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" style="width: 30%;" />

# TypeScript starter

This repository is a **starter** for setting up **Typescript**.
<br/>It provides the basic configuration and tools to write and run TypeScript code in a simple and efficient way.

</div>

- [TypeScript starter](#typescript-starter)
  - [📝 Prerequisites](#-prerequisites)
  - [🚀 Quick start - Using CLI](#-quick-start---using-cli)
  - [🚀 Quick start - Using Visual Studio Code](#-quick-start---using-visual-studio-code)
  - [Node development command explanation](#node-development-command-explanation)
  - [Why use `ts-alias` and `tsconfig-paths`?](#why-use-ts-alias-and-tsconfig-paths)

## 📝 Prerequisites

- [Node.js](https://nodejs.org/en/) (>= `22.0.0`)
- [NPM](https://www.npmjs.com/) (>= `10.0.0`)

## 🚀 Quick start - Using CLI

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Or build for production and start server
npm run start
```

## 🚀 Quick start - Using Visual Studio Code

- Install [Visual Studio Code](https://code.visualstudio.com/)
- Use configuration files from `.vscode` folder:
  - Use the command palette _(Ctrl+Shift+P)_ and select `Debug: Select and Start Debugging` to run one of the debug configurations defined in `launch.json`.

## Node development command explanation

```bash
node --env-file=../../.env --watch --require tsconfig-paths/register --require ts-node/register src/main.ts
```

- `--env-file=../../.env` - loads environment variables from the `.env` file located in the root directory of the project.
- `--watch` - watches the file system for changes and restarts the server when a change is detected.
- `--require tsconfig-paths/register` - requires the `tsconfig-paths/register` package, which reads the paths and baseUrl options in your tsconfig.json file and redirects the imports at runtime.
- `--require ts-node/register` - requires the `ts-node/register` package, which allows you to run TypeScript files directly without compiling them first.

## Why use `ts-alias` and `tsconfig-paths`?

In this project, we use `ts-alias` and `tsconfig-paths` to simplify the import paths in our TypeScript files (i.e. `@/utils` instead of `../../utils`).

- `tsconfig-paths` is a package that reads the paths and baseUrl options in your `tsconfig.json` file and **redirects the imports at runtime**. This allows us to use shorter and more readable import paths, which are especially useful in a large codebase (e.g. `@/utils` instead of `../../utils`).

- `ts-alias` is used to rewrite these paths in the compiled JavaScript files. When TypeScript compiles the code, it doesn't rewrite the import paths, so without ts-alias, the paths would be incorrect in the compiled code, leading to module resolution errors (e.g. `Cannot find module '@/utils'`).

---

By using these two packages together, we can have both the convenience of shorter import paths during development and the assurance that the paths will be correct in the production build.
