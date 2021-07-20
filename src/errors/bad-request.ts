import CustomError from './custom-error';
import { BAD_REQUEST } from '../status-codes'
import { returnSerializeError } from '../utils/custom-types';

class BadRequest extends CustomError {
  constructor(message: string, details?: any) {
    super(message, BAD_REQUEST, details);
    this.name = 'BadRequest';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default BadRequest;
