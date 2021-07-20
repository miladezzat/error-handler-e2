import { UNAUTHORIZED } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class Unauthorized extends CustomError {
  constructor(message: string, details?: any) {
    super(message, UNAUTHORIZED, details);
    this.name = 'Unauthorized';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default Unauthorized;
