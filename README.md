# Error Handler E2
[![Build Status](https://travis-ci.org/miladezzat/error-handler-e2.svg?branch=master)](https://travis-ci.org/miladezzat/error-handler-e2)
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;

This package will help you to handle errors, 
and logging errors with nice style for debugging, and you can use handleHttpError 
middleware

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
    const { createCustomError } = require("error-handler-e2").functions; 

    //params createCustomError({message: String, error: ErrorObj, [options]})
    const myError = createCustomError({
      message = "Testing Error message", 
      error = {},       
    });

```
2. create Http Error
```
    const { createHttpError } = require("error-handler-e2").functions;

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    })
```
3. Logging Errors
```
    const { createCustomError,createHttpError ,logErrors } 
            = require("error-handler-e2").functions; 

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    })

    //params createCustomError({message: String, error: ErrorObj, [options]})
    const myError = createCustomError({
      message = "Testing Error message", 
      error = {},       
    });

    logErrors({
        error: httpError,
        file: "index.js",
        path: `${__dirname}/${__filename}`,
    });
    logErrors({
        error: myError,
        file: "index.js",
        path: `${__dirname}/${__filename}`,
    });

```

### Using Middlewares
```
    const { handleHttpError } = require('error-handler-e2).middlwares;
    const { createHttpError } = require('error-handler-e2).functions;

    //params createHttpError({message: String, statusCode: Number, [options]})
    const httpError = createHttpError({
         message = "This is message",
        statusCode = 404,
    });

    //you need throw httpError, when catch error
    throw httpError;

    //after your routes, using handle error middleware
    app.use(handleHttpError());

```



## Authors 
[Milad](<https://github.com/miladezzat>)