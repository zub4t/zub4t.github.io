# Curriculum Vitae SPA with React [Still in development]
[![ReactJS version used](https://img.shields.io/badge/react-16.7.0-blue.svg)](https://www.npmjs.com/package/react) ![npm version used](https://img.shields.io/badge/npm-v6.5.0-red.svg) ![material-components-web version used](https://img.shields.io/badge/material--components--web-v0.43.1-green.svg) [![webpack version used](https://img.shields.io/badge/webpack-v4.29.0-1a6bac.svg)](https://github.com/webpack/webpack/releases) 

Single Page Application describing my own professional resume.

## Installation

Clone the project
```
$ git clone https://github.com/IngPorto/react-curriculum-vitae.git
```
Change the directory
```
$ cd react-curriculum-vitae
```
Install the dependencies
```
$ npm install
```
Build the bundle with _Webpack_
```
$ npm run build:local
```

Now you can access to _dist/index.html_ 

## Global access

> [https://davidportocarrero.now.sh/](https://davidportocarrero.now.sh/)

### Screenshots

![screenshots](./statics/project-views.jpg)

### Note: Bug fixed

Trying to install webpack from the [getting-started](https://webpack.js.org/guides/getting-started/) the console print out an Error message. To solve this, I had to run the next command:

```
$ npm i -D terser@3.14
```