import { NOT_FOUND } from '../status-codes';
import { NotFoundError } from '../errors';

const notFound = (req: any, res:any) => res.status(NOT_FOUND).json({
  ...new NotFoundError('Not Found').serializeError(),
});

export default notFound;
