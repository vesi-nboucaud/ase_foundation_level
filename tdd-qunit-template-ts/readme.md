1) Create package.json (without all the steps) with default parameters
```console
npm init -y
```

2) Install TypeScript as a development dependency to the project
```console
npm install --save-dev typescript
```

Your package.json file should now list TypeScript as a dependency

3) Create tsconfig.json with default parameters
```console
npx tsc --init
```

4) Install QUnit and the corresponding TypeScripts types
```console
npm install --save-dev qunit @types/qunit
```

5) We will use "ts-node" to execute  TypeScripts tests without manually compiling them
```console
npm install --save-dev ts-node
```

6) Create "qunit.config.js at the root of the project
```console
// qunit.config.js
const tsNode = require('ts-node');

tsNode.register({
  project: './tsconfig.json'
});

module.exports = {
  extensions: ['ts'],
  require: ['ts-node/register']
};
```

7) Modify tsconfig.json
```
"rootDir": "./",
"outDir": "./dist",
```

8) Modify package.json like this. It allows compiling before launching test + Indicate to perform the test on the compiled file in /dist folder
```
"scripts": {
    "build": "tsc",
    "test": "npm run build && qunit 'dist/test/**/*.js'"
}
```

9) Finally, run the test!
```console
npm  test
```
