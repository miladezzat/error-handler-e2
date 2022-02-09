# Examples

After installing the package you can import it as the following

## Errors


Every error take two parameters: `message` and `object`.
- message, it must be `String`
- object, that is a javascript object you can set any details you want

```js
const { Errors:{ BadRequestError }} = require('error-handler-e2');
// or
import { Errors: { BadRequestError } }  from 'error-handler-e2';

throw new BadRequestError('Bad request error message', { time: new Date() });
```

## Middleware

It is just a nodejs middleware

```js
const {Middleware:{ asyncHandlerMiddleware }, StatusCodes } = require('error-handler-e2');
// or
import { Middleware:{ asyncHandlerMiddleware }, StatusCodes } from 'error-handler-e2';

// get users example
route.get('/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    return res.status(StatusCodes.OK).json({ users: [{ id: 1, name: 'Milad' } ]});
  })
);
```
```js

const { Middleware:{ loggerMiddleware }} = require('error-handler-e2');

app.use(loggerMiddleware);

```

```js

const { Middleware:{ handleErrorMiddleware }} = require('error-handler-e2');

app.use(handleErrorMiddleware);

```

```js

const { Middleware:{ notFoundMiddleware }} = require('error-handler-e2');

app.use(notFoundMiddleware);

```

## StatusCodes

```js
const { StatusCodes: { NO_CONTENT } } = require('error-handler-e2');
// or
import {StatusCode: {NO_CONNECT} } from 'error-handler-e2';
```