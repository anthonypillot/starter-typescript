<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" style="width: 30%;" />

# TypeScript starter

This repository is a **starter** for setting up **Typescript**.
<br/>It provides the basic configuration and tools to write and run TypeScript code in a simple and efficient way.

</div>

## 📝 Prerequisites

- [Node.js](https://nodejs.org/en/) (>= `18.0.0`)
- [Yarn](https://yarnpkg.com/) (>= `1.22.0`)

## 🚀 Quick start - Using CLI

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Or build for production and start server
yarn start:prod
```

## 🚀 Quick start - Using Visual Studio Code

- Install [Visual Studio Code](https://code.visualstudio.com/)
- Use configuration files from `.vscode` folder:
  - Use the command palette _(Ctrl+Shift+P)_ and select `Debug: Select and Start Debugging` to run one of the debug configurations defined in `launch.json`.

## 📖 Documentation

- [Node.js](https://nodejs.org/en/)
  - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/)
  - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [nodemon](https://nodemon.io/)
  - We're using `nodemon` for a better development experience. It will automatically restart the server when file changes in the directory are detected.
