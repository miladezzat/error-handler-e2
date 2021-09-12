import { CustomError } from '../errors';
import { INTERNAL_SERVER_ERROR } from '../status-codes';

const handleError = (err:any, req:any, res:any, next:any) => {
  if (err instanceof CustomError) {
    next();
    return res.status(err.statusCode).send(err.serializeError());
  }

  next();
  return res.status(INTERNAL_SERVER_ERROR).send({
    Error: 'Internal Server Error',
  });
};

export default handleError;
