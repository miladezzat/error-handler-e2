import { NOT_FOUND } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class NotFound extends CustomError {
  constructor(message: string, details?: any) {
    super(message, NOT_FOUND, details);
    this.name = 'NotFound';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default NotFound;
