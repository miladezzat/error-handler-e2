# Error Handler E2
[![Build Status](https://travis-ci.org/miladezzat/error-handler-e2.svg?branch=master)](https://travis-ci.org/miladezzat/error-handler-e2)
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;

This package will help you to handle errors, and logging errors with nice style for debugging

## Getting Start 
You need download package in your project and import any function you need

## Installing && Using
```
    npm install npm i error-handler-e2
    //or
    yarn add error-handler-e2

    const ErrorHandlerrE2 = require("error-handler-e2");
    //or
    import ErrorHandlerrE2 from "error-handler-e2";
```

## Examples
### Using Functions

1. create custom error
```
    const { customError } = require("error-handler-e2").functions; 

    const myError = customError({
        message: "testing erro",
        statusCode: 404,
    });

```
2. Logging Errors
```
    const { customError, logErrors } = require("error-handler-e2").functions; 

    const myError = customError({
        message: "testing erro",
        statusCode: 404,
    });

    logErrors({
        error: err,
        file: "index.js",
        path: `${__dirname}/${__filename}`,
    });

```


## Authors 
[Milad](<https://github.com/miladezzat>)