# Setup

You need to install Node.js

- [Node.js](https://nodejs.org/en)
- NPM (install node.js and get NPM)

Editor

- [VSCode](https://code.visualstudio.com/)

Don't want to install VSCode? Try https://vscode.dev/ instead.

nice to have

- plugins vscode
- github
- git

## OSX

```bash
# install node.js
brew install node
# install vscode
brew install --cask visual-studio-code
```

## check for

check for node verson

```bash
node -v
```

Install angular via NPM globally

```bash
npm install -g @angular/cli
```

## Create initial project

```bash
ng new 00_setup
cd 00_setup
```

## Folder structure

```
.
├── node_modules
├── src
│   ├── app
│   ├── assets
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Starting point

- Typescript file: `00_setup/src/app/app.component.ts`
- HTML template: `00_setup/src/app/app.component.html`
