1) Create package.json (without all the steps)
```console
npm init -y
```

2) Install QUnit
```console
npm install --save-dev qunit
```

3) Modify package.json
```
"scripts": {
    "test": "qunit"
}
```

4) Finally, run the test!
```console
npm  test
```
