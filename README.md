# Error Handler E2
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;
![https://img.shields.io/npm/dm/error-handler-e2.svg](https://img.shields.io/npm/dm/error-handler-e2.svg)
[![Build Status](https://travis-ci.org/miladezzat/error-handler-e2.svg?branch=master)](https://travis-ci.org/miladezzat/error-handler-e2)
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;

This is handle error package

1. [Installation](#installation)
2. [Usage](#usage)
3. [Options](#options)
## Installation

```js
npm i error-handler-e2
// Or 
yarn add error-handler-e2
```


## Usage
```js
const { Errors: { BadRequestError } } = require('error-handler-e2');
// or
import { Errors } from 'error-handler-e2'
```

## Options

1. Errors
  * [BadRequestError](#badrequesterror)  
  * [ConflictError](#conflicterror)
  * [CustomError](#customerror)
  * [DatabaseError](#databaseerror)
  * [InternalServerError](#internalservererror)
  * [NoContentError](#internalserverError)
  * [NotFoundError](#notfounderror)
  * [UnAuthenticatedError](#unauthenticatederror)
  * [UnAuthorizedError](#unauthorizederror)
  * [UnProcessableEntityError](#unprocessableentityerror)

### BadRequestError
```js
const { Errors:{ BadRequestError }} = require('error-handler-e2');

throw new BadRequestError('Bad request error message', { time: new Date() });
```
### ConflictError
```js
const { Errors:{ ConflictError }} = require('error-handler-e2');

throw new ConflictError('conflict error message', { time: new Date() });
```

### CustomError
```js
const { Errors:{ CustomError }} = require('error-handler-e2');

throw new CustomError('Custom error message', { time: new Date() });
```
### DatabaseError
```js
const { Errors:{ DatabaseError }} = require('error-handler-e2');

throw new DatabaseError('Database error message', { time: new Date() });
```
### InternalServerError
```js
const { Errors:{ InternalServerError }} = require('error-handler-e2');

throw new InternalServerError('Internal Server error message', { time: new Date() });
```
### NoContentError
```js
const { Errors:{ NoContentError }} = require('error-handler-e2');

throw new NoContentError('NoContent error message', { time: new Date() });
```
### NotFoundError
```js
const { Errors:{ NotFoundError }} = require('error-handler-e2');

throw new NotFoundError('NotFound error message', { time: new Date() });
```
### UnAuthenticatedError
```js
const { Errors:{ UnAuthenticatedError }} = require('error-handler-e2');

throw new UnAuthenticatedError('UnAuthenticated error message', { time: new Date() });
```
### UnAuthorizedError
```js
const { Errors:{ UnAuthorizedError }} = require('error-handler-e2');

throw new UnAuthorizedError('UnAuthorized error message', { time: new Date() });
```
### UnProcessableEntityError
```js
const { Errors:{ UnProcessableEntityError }} = require('error-handler-e2');

throw new UnProcessableEntityError('UnProcessable Entity error message', { time: new Date() });
```

2. Http Status
  * [NO_CONTENT 204](#no_content-204)
  * [BAD_REQUEST 400](#bad_request-400)
  * [UNAUTHENTICATED 401](#unauthenticated-401)
  * [UNAUTHORIZED 403](#unauthorized-403)
  * [NOT_FOUND 404](#not_found-404)
  * [CONFLICT 409](#conflict-409)
  * [UNPROCURABLE_ENTITY 422](#unprocurable_entity-422)
  * [INTERNAL_SERVER_ERROR 500](#internal_server_error-500)

### NO_CONTENT 204
```js
const { StatusCodes: { NO_CONTENT } } = require('error-handler-e2');

```
### BAD_REQUEST 400
```js
const { StatusCodes: { BAD_REQUEST } } = require('error-handler-e2');
```
### UNAUTHENTICATED 401
```js
const { StatusCodes: { UNAUTHENTICATED } } = require('error-handler-e2');
```
### UNAUTHORIZED 403
```js
const { StatusCodes: { UNAUTHORIZED } } = require('error-handler-e2');
```
### NOT_FOUND 404
```js
const { StatusCodes: { NOT_FOUND } } = require('error-handler-e2');
```
### CONFLICT 409
```js
const { StatusCodes: { CONFLICT } } = require('error-handler-e2');
```
### UNPROCURABLE_ENTITY 422
```js
const { StatusCodes: { UNPROCURABLE_ENTITY } } = require('error-handler-e2');
```
### INTERNAL_SERVER_ERROR 500
```js
const { StatusCodes: { INTERNAL_SERVER_ERROR } } = require('error-handler-e2');
```

3. Middleware
   * [loggerMiddleware](#loggerMiddleware)

### loggerMiddleware

```js

const { Middleware:{ loggerMiddleware }} = require('error-handler-e2');

app.use(loggerMiddleware);

```