# Error Handler E2
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;
![https://img.shields.io/npm/dm/error-handler-e2.svg](https://img.shields.io/npm/dm/error-handler-e2.svg)
[![Build Status](https://travis-ci.org/miladezzat/error-handler-e2.svg?branch=master)](https://travis-ci.org/miladezzat/error-handler-e2)
[![npm version](https://badge.fury.io/js/error-handler-e2.svg)](https://badge.fury.io/js/error-handler-e2)&nbsp;

1. [Installation](#installation)
2. [Usage](#usage)

## Installation

```js
npm i error-handler-e2
// Or 
yarn add error-handler-e2
```


## Usage

1. Errors

```js
const { BadRequestError, ConflictError } = require('error-handler-e2');

throw new BadRequestError('Bad request error message', { time: new Date() });

throw new ConflictError('Conflict error message', { time: new Date() });
```

